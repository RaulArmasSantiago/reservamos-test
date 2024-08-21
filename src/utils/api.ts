import axios from "axios";
import * as env from "../config";
const { API_BASE_OPEN_WHEATER, API_BASE_RESERVAMOS } =
  //@ts-ignore
  env[process.env.REACT_APP_STAGE];

export const apiReservamos = axios.create({
  baseURL: API_BASE_RESERVAMOS,
  headers: {
    "Content-Type": "application/json",
  },
});

export const apiWheater = axios.create({
  baseURL: API_BASE_OPEN_WHEATER,
  headers: {
    "Content-Type": "application/json",
  },
});
