import React from "react";
import { Avatar, Card as AntCard } from "antd";
import './Card.scss';
const { Meta } = AntCard;


const Card = ({measurmentValue, measurmentUnit, measurmentName, imagePath, measurmentTime }) => {
  return (
    <AntCard>
      <Meta
        avatar={<Avatar src={imagePath} size="large"/>}
        description={measurmentValue + " " + measurmentUnit + " - (Measurement time: " + measurmentTime + ")" }
        title={measurmentName}
        style={{fontSize: 15}}
      />
    </AntCard>
  );
};

export default Card;
