import { Request } from '../../util/useAxios'


export const getSensorLastChange = async (id) => {
    const request = Request();

    const result = await request({ url: `/sensor/last-change?sensorId=${id}`, method: 'get' });
    return result.data;
}

export const getAllSensors = async () => {
    const request = Request();

    const result = await request({ url: `/sensor/find-all`, method: 'get' });
    return result.data;
}

export const getSensorLast10Change = async (id) => {
    const request = Request();

    const result = await request({ url: `/sensor/last-10-changes?sensorId=${id}`, method: 'get' });
    return result.data;
}

export const getSensor = async (id) => {
    const request = Request();

    const result = await request({
      url: `/sensor?sensorId=${id}`,
      method: "get",
    });
    return result.data;
  };