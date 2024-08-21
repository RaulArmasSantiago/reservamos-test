import { apiWheater } from "../utils/api";
import * as env from "../config";

type RequestType = {
  lat: string;
  long: string;
};
//@ts-ignore
const { API_KEY_OPEN_WHEATER } = env[process.env.REACT_APP_STAGE];
export const getForecast = async (request: RequestType) => {
  try {
    return apiWheater.get(
      `forecast?lat=${request.lat}&lon=${request.long}&appid=${API_KEY_OPEN_WHEATER}&units=metric&lang=sp`
    );
  } catch (err) {
    console.error("Error al obtener el clima.", err);
    throw err;
  }
};
