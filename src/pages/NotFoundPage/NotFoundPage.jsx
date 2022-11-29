import React from "react";
import "./NotFoundPage.scss";
import { Result } from "antd";
import { Link } from "react-router-dom";

const NotFoundPage = () => (
  <Result
    status="warning"
    title="ERROR 404"
    extra={
      <Link to="/">
        <button className="button">Go Home</button>
      </Link>
    }
  />
);

export default NotFoundPage;
