import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  City,
  CityForecast,
  ForecastByHours,
  WeekForecast,
} from "../../Interfaces/forecast";
import { getForecast } from "../../services/WeatherService";
import { setCurrentCity } from "./forecastSlice.slice";

const getDayOfWeek = (dateString: string) => {
  const daysOfWeek = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo",
  ];
  const date = new Date(dateString);
  return daysOfWeek[date.getDay()];
};

export const getForecastForLocation = createAsyncThunk<boolean, City>(
  "forescast/getForecastForLocation",
  async (payload, { getState, dispatch }) => {
    try {
      console.log(payload);
      // Fetch forecast data from API using data.city_name
      const request = {
        lat: payload.lat,
        long: payload.long,
      };
      let { data } = await getForecast(request);

      const groupedData: {
        [date: string]: { temp_min: number; temp_max: number; icon: string };
      } = {};

      const groupedDataHour: {
        [date: string]: {
          temp_min: number;
          temp_max: number;
          icon: string;
          time: string;
          date: string;
        };
      } = {};

      data.list.forEach((item: any) => {
        const date = item.dt_txt.split(" ")[0];
        const time = item.dt_txt.split(" ")[1]; // Extraer solo la fecha
        if (!groupedData[date]) {
          groupedData[date] = {
            temp_min: item.main.temp_min,
            temp_max: item.main.temp_max,
            icon: item.weather[0].icon,
          };
        } else {
          groupedData[date].temp_min = Math.min(
            groupedData[date].temp_min,
            item.main.temp_min
          );
          groupedData[date].temp_max = Math.max(
            groupedData[date].temp_max,
            item.main.temp_max
          );
        }
        groupedDataHour[item.dt_txt] = {
          temp_min: item.main.temp_min,
          temp_max: item.main.temp_max,
          icon: item.weather[0].icon,
          time,
          date,
        };
      });

      let week = Object.entries(groupedData).map(
        ([date, { temp_min, temp_max, icon }]) => ({
          date,
          day: getDayOfWeek(date),
          temp_min,
          temp_max,
          icon,
        })
      );

      let hour = Object.entries(groupedDataHour).map(
        ([date, { temp_min, temp_max, icon, time }]) => ({
          date,
          day: getDayOfWeek(date),
          temp_min,
          temp_max,
          icon,
          time,
        })
      );

      let forecastData: CityForecast = {
        city: payload.city_name,
        state: payload.state,
        lat: payload.lat,
        long: payload.long,
        week: week as WeekForecast[],
        hour: hour as ForecastByHours[],
      };
      dispatch(setCurrentCity(forecastData));
      return true;
    } catch (error) {
      return false;
    }
  }
);
