import React from "react";
import { Table } from "antd";
import moment from "moment";
import "./Table.scss";

const MeasurementTable = ({ sensorDataLast10Changes, sensorUnits }) => {
  const columns = [];
  const tableMeasurements = [];

  const date = { title: "Date of measurement", dataIndex: "date", key: "date" }; // default column
  const no = { title: "No", dataIndex: "no", key: "no" }; // default column

  columns.push(no);
  sensorUnits?.forEach((element) => {
    const column = {
      title: element?.columnName,
      dataIndex: element?.measuringUnitName,
      key: element?.measuringUnitName,
    }; //columns changes on sensor change
    columns.push(column);
  });
  columns.push(date);

  for (let index = 0; index < sensorDataLast10Changes?.length; index++) {
    let objectRow = {};
    objectRow["no"] = index + 1;
    objectRow["date"] = moment(sensorDataLast10Changes[index]?.dateTime).format(
      "DD-MM-YYYY HH:mm"
    );
    sensorUnits?.forEach((element) => {
      objectRow[element?.measuringUnitName] =
        sensorDataLast10Changes[index]?.[element?.measuringUnitName];
    });
    tableMeasurements.push(objectRow);
  }

  return (
    <div>
      <Table
        columns={columns}
        dataSource={tableMeasurements}
        pagination={false}
        className="table"
        rowKey="no"
        scroll={{ x: 768 }}
      />
    </div>
  );
};

export default MeasurementTable;
