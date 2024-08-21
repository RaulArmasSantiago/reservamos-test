import React from "react";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import "./styles.scss";
import { LocationIcon } from "../SVGS";

const Forecast = () => {
  const { currentCity } = useSelector((state: RootState) => state.forecast);
  if (!currentCity) return <div>Selecciona un destino</div>;

  return (
    <div className="forecast">
      <div className="forecast__place">
        <LocationIcon />
        <span>
          {currentCity.city}, {currentCity.state}
        </span>
      </div>
      <div className="forecast__container">
        <div className="forecast__container__week">
          <div className="forecast__container__week__title">
            <h3>Pronóstico diario</h3>
          </div>
          <div className="forecast__container__week__week-items">
            {currentCity.week.map((day, index) => (
              <section key={index} className="forecast__container__week__item">
                <span className="forecast__container__week__item__day">
                  {day.day}
                </span>
                <img
                  src={`http://openweathermap.org/img/wn/${day.icon}@2x.png`}
                  alt="Icono de clima"
                />
                <span className="forecast__container__week__item__temp">
                  {day.temp_max}°C / {day.temp_min}°C
                </span>
              </section>
            ))}
          </div>
        </div>

        <div className="forecast__container__hour">
          <div className="forecast__container__hour__title">
            <h3>Pronóstico cada 3 horas</h3>
          </div>
          <div className="forecast__container__hour__times__item fijar">
            <span className="forecast__container__hour__times__item__time">
              Hora
            </span>
            <span className="forecast__container__hour__times__item__temp">
              Temperatura min. / max.
            </span>
            <span></span>
          </div>
          <div className="forecast__container__hour__times">
            {currentCity.hour.map((h, index) => (
              <div className="forecast__container__hour__times__item">
                <span className="forecast__container__hour__times__item__time">
                  {h.time}
                </span>
                <span className="forecast__container__hour__times__item__temp">
                  {h.temp_min}°C / {h.temp_max}°C
                </span>
                <img
                  src={`http://openweathermap.org/img/wn/${h.icon}@2x.png`}
                  alt="Icono de clima"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forecast;
