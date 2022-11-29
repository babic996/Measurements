import React, { useEffect, useState } from "react";
import { Col, Row } from "antd";
import Card from "../components/Card/Card";
import MeasurementTable from "../components/Table/Table";
import { useParams } from "react-router";
import { Request } from "../util/useAxios";
import moment from "moment";

const Sensor = () => {
  const { sensorId } = useParams();
  const [sensorData, setSensorData] = useState([]);
  const [sensorDataLast10Changes, setSensorDataLast10Changes] = useState();
  const [sensor, setSensor] = useState();

  useEffect(() => {
    if (sensorId) {
      getSensorLastChange(sensorId).then((result) => {
        setSensorData(result);
      });
      getSensorLast10Change(sensorId).then((result) => {
        setSensorDataLast10Changes(result);
      });
      getSensor(sensorId).then((result) => {
        setSensor(result);
      });
    } else {
      getAllSensors().then((result) => {
        getSensorLastChange(result[0]?.sensorId).then((result) => {
          setSensorData(result);
        });
        getSensorLast10Change(result[0]?.sensorId).then((result) => {
          setSensorDataLast10Changes(result);
        });
        getSensor(result[0]?.sensorId).then((result) => {
          setSensor(result);
        });
      });
    }
  }, [sensorId]);

  const getSensorLastChange = async (id) => {
    const request = Request();

    const result = await request({
      url: `/sensor/last-change?sensorId=${id}`,
      method: "get",
    });
    return result.data;
  };

  const getSensor = async (id) => {
    const request = Request();

    const result = await request({
      url: `/sensor?sensorId=${id}`,
      method: "get",
    });
    return result.data;
  };

  const getSensorLast10Change = async (id) => {
    const request = Request();

    const result = await request({
      url: `/sensor/last-10-changes?sensorId=${id}`,
      method: "get",
    });
    return result.data;
  };

  const getAllSensors = async () => {
    const request = Request();

    const result = await request({ url: `/sensor/find-all`, method: "get" });
    return result.data;
  };

  return (
    <>
      <Row
        justify="space-around"
        align="middle"
        gutter={[16, 16]}
        style={{ marginLeft: 30, marginTop: 30, marginRight: 30 }}
      >
        {sensorData.length > 0
          ? sensorData.map((lastChange) => (
              <Col
                key={lastChange?.measuringUnitId}
                xs={24}
                sm={24}
                lg={
                  sensorData?.length === 1
                    ? 24
                    : sensorData?.length === 2
                    ? 12
                    : sensorData?.length === 3
                    ? 8
                    : sensorData?.length === 4
                    ? 6
                    : sensorData?.length === 5
                    ? 4
                    : 6
                }
              >
                <Card
                  measurmentValue={lastChange?.value}
                  measurmentUnit={lastChange?.measuringUnitLabel}
                  measurmentName={lastChange?.columnName}
                  imagePath={
                    lastChange?.measuringUnitId === 1
                      ? "/temperatura.png"
                      : lastChange?.measuringUnitId === 2
                      ? "/vazduh-pritisak.jfif"
                      : lastChange?.measuringUnitId === 3
                      ? "/3.png"
                      : lastChange?.measuringUnitId === 4
                      ? "/4.png"
                      : "5.jfif"
                  }
                  measurmentTime={moment(lastChange?.dateTime).format(
                    "DD-MM-YYYY HH:mm"
                  )}
                  key={lastChange?.measuringUnitId}
                />
              </Col>
            ))
          : sensor?.measuringUnits?.map((element) => (
              <Col
                key={element?.measuringUnitId}
                xs={24}
                sm={24}
                lg={
                  sensor?.measuringUnits.length === 1
                    ? 24
                    : sensor?.measuringUnits.length === 2
                    ? 12
                    : sensor?.measuringUnits.length === 3
                    ? 8
                    : sensor?.measuringUnits.length === 4
                    ? 6
                    : sensor?.measuringUnits.length === 5
                    ? 4
                    : 6
                }
              >
                <Card
                  measurmentValue="No data"
                  measurmentUnit={element?.measuringUnitLabel}
                  measurmentName={element?.columnName}
                  imagePath={
                    element?.measuringUnitId === 1
                      ? "/temperatura.png"
                      : element?.measuringUnitId === 2
                      ? "/vazduh-pritisak.jfif"
                      : element?.measuringUnitId === 3
                      ? "/3.png"
                      : element?.measuringUnitId === 4
                      ? "/4.png"
                      : "5.jfif"
                  }
                  measurmentTime={"No data"}
                  key={element?.measuringUnitId}
                />
              </Col>
            ))}
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <MeasurementTable
            sensorDataLast10Changes={sensorDataLast10Changes}
            sensorUnits={sensor?.measuringUnits}
          />
        </Col>
      </Row>
    </>
  );
};

export default Sensor;
