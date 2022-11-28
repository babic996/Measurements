import { Request } from '../../util/useAxios'

export const useSensorLastChange = (id) => {
    return (
        async () => getSensorLastChange(id)
    );
}

export const useSensorLast10Changes = (id) => {
    return (
        async () => getSensorLast10Change(id)
    );
}

export const useAllSensors = () => {
    return (
        async () => getAllSensors()
    );
}


const getSensorLastChange = async (id) => {
    const request = Request();

    const result = await request({ url: `/sensor/last-change?sensorId=${id}`, method: 'get' });
    return result.data;
}

const getAllSensors = async () => {
    const request = Request();

    const result = await request({ url: `/sensor/find-all`, method: 'get' });
    return result.data;
}

const getSensorLast10Change = async (id) => {
    const request = Request();

    const result = await request({ url: `/sensor/last-10-changes?sensorId=${id}`, method: 'get' });
    return result.data;
}