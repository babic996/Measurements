import React from 'react'
import { Space, Table, Tag } from 'antd';
import './Table.scss';

const columns = [
  {
    title: 'Sensor Mesure',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Value',
    dataIndex: 'value',
    key: 'value',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  }
];
const data = [
  {
    key: '1',
    name: 'Temperature',
    value: 32,
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Presure',
    value: 42,
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Air quality',
    value: 32,
    tags: ['cool', 'teacher'],
  },
];


const MeasurementTable = () => {
  return (
    <div>
      <Table columns={columns} dataSource={data} className="table"/>
    </div>
  )
}

export default MeasurementTable
