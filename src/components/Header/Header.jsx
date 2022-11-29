import React, { useEffect, useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { Request } from '../../util/useAxios'

const Header = () => {
  const [sensors, setSensors] = useState([]);

  useEffect(() => {
    getAllSensors().then(result=>setSensors(result))
  }, []);

  const getAllSensors = async () => {
    const request = Request();

    const result = await request({ url: `/sensor/find-all`, method: 'get' });
    return result.data;
}

  return (
    <header>
      <a href="/" className="logo">
        from HYPE to REALITY
      </a>
      <input type="checkbox" className="checkBtn" />
      <ol>
        {sensors?.map((sensor) => (
          <Link to={`/sensor/${sensor?.sensorId}`} key={sensor?.sensorId}>
            <li key={sensor?.sensorId}>{sensor?.sensorName}</li>
          </Link>
        ))}
      </ol>
    </header>
  );
};

export default Header;
