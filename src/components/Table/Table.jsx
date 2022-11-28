import React from "react";
import { Table } from "antd";
import moment from 'moment';
import "./Table.scss";

const MeasurementTable = ({ sensorDataLast10Changes, sensorUnits }) => {

  const columns = [];
  const date = {"title": "Date of measurement", "dataIndex": "date", "key": "date"};
  const no = {"title": "No", "dataIndex": "no", "key": "no"};
  let obj = {};
  const tableMeasurements = []

  obj["no"]=null;
  obj["date"]=null;

  columns.push(no);
  sensorUnits?.forEach(element => {
    const column = {"title":element?.columnName,"dataIndex":element?.measuringUnitName, "key":element?.measuringUnitName};
    columns.push(column);
    obj[element?.measuringUnitName]=null;
  });
  columns.push(date);
  

  for (let index = 0; index < sensorDataLast10Changes?.length; index++) {
    let obj = {};
    obj["no"] = index + 1;
    obj["date"] = moment(sensorDataLast10Changes[index]?.dateTime).format("DD-MM-YYYY HH:mm");
    sensorUnits?.forEach(element => {obj[element?.measuringUnitName] = sensorDataLast10Changes[index]?.[element?.measuringUnitName];})
    tableMeasurements.push(obj);
  }

  return (
    <div>
      <Table
        columns={columns}
        dataSource={tableMeasurements}
        pagination={false}
        className="table"
        rowKey="no"
        scroll={{ x: 700 }}
      />
    </div>
  );
};

export default MeasurementTable;
