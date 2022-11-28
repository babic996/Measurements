import axios from "axios";
import { DEFAULT_SERVER } from './const-util'

const req = axios.create({ baseURL: DEFAULT_SERVER });

export const Request = () => {
    return req ;
}