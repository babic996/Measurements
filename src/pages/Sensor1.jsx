import React from "react";
import { Avatar, Card } from "antd";
import { Col, Row } from "antd";
const { Meta } = Card;

const Sensor1 = () => {
  return (
    <>
      <Row justify="space-around" align="middle" gutter={[16, 16]} style={{marginLeft:30, marginRight:30, marginTop: 30}}>
        <Col xs={24} sm={24} lg={8}>
          <div>
            <Card>
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="Card title"
                description="Temperature"
              />
            </Card>
          </div>
        </Col>
        <Col xs={24} sm={24} lg={8}>
          <div>
            <Card>
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="Card title"
                description="Temperature"
              />
            </Card>
          </div>
        </Col>
        <Col xs={24} sm={24} lg={8}>
          <div>
            <Card>
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="Card title"
                description="Temperature"
              />
            </Card>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Sensor1;
