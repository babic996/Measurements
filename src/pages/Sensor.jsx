import React, { useEffect, useState } from "react";
import { Col, Row } from "antd";
import Card from "../components/Card/Card";
import MeasurementTable from "../components/Table/Table";
import { useParams } from "react-router";
import moment from "moment";
import { getSensorLastChange } from "../hooks/services/useSensor";
import { getSensorLast10Change } from "../hooks/services/useSensor";
import { getAllSensors } from "../hooks/services/useSensor";
import { getSensor } from "../hooks/services/useSensor";
import { useRouteContext } from "../hooks/context/routeContext";

const Sensor = () => {
  const { sensorId } = useParams();
  const [sensorData, setSensorData] = useState([]);
  const [sensorDataLast10Changes, setSensorDataLast10Changes] = useState();
  const [sensor, setSensor] = useState();
  const { setParametar } = useRouteContext();

  useEffect(() => {
    if (sensorId) {
      setParametar(sensorId);
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

  useEffect(() => {
    const interval = setInterval(() => {
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
    }, 10000);
    return () => clearInterval(interval);
  }, [sensorId]);

  return (
    <>
      <Row
        justify="space-around"
        align="middle"
        gutter={[16, 16]}
        style={{ marginLeft: 30, marginTop: 30, marginRight: 30 }}
      >
        {sensorData?.length > 0
          ? sensorData?.map((lastChange) => (
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
                      ? "/vlaznost.png"
                      : lastChange?.measuringUnitId === 4
                      ? "/air-quality.png"
                      : lastChange?.measuringUnitId === 5
                      ? "/ammonia.png"
                      : lastChange?.measuringUnitId === 6
                      ? "/karbon-monoksid.png"
                      : lastChange?.measuringUnitId === 7
                      ? "/nitrogen-dioksid.png"
                      : lastChange?.measuringUnitId === 8
                      ? "/propane.png"
                      : lastChange?.measuringUnitId === 9
                      ? "/butane.png"
                      : lastChange?.measuringUnitId === 10
                      ? "/ch4.png"
                      : lastChange?.measuringUnitId === 11
                      ? "/hydrogen.png"
                      : lastChange?.measuringUnitId === 12
                      ? "/c2h5oh.jfif"
                      : lastChange?.measuringUnitId === 13
                      ? "/zvuk.png"
                      : "/no-image.jfif"
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
                  : sensor?.length === 2
                  ? 12
                  : sensor?.length === 3
                  ? 8
                  : sensor?.length === 4
                  ? 6
                  : sensor?.length === 5
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
                      ? "/vlaznost.png"
                      : element?.measuringUnitId === 4
                      ? "/air-quality.png"
                      : element?.measuringUnitId === 5
                      ? "/ammonia.png"
                      : element?.measuringUnitId === 6
                      ? "/karbon-monoksid.png"
                      : element?.measuringUnitId === 7
                      ? "/nitrogen-dioksid.png"
                      : element?.measuringUnitId === 8
                      ? "/propane.png"
                      : element?.measuringUnitId === 9
                      ? "/butane.png"
                      : element?.measuringUnitId === 10
                      ? "/ch4.png"
                      : element?.measuringUnitId === 11
                      ? "/hydrogen.png"
                      : element?.measuringUnitId === 12
                      ? "/c2h5oh.jfif"
                      : element?.measuringUnitId === 13
                      ? "/zvuk.png"
                      : "/no-image.jfif"
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
