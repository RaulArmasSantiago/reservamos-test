import React, { useEffect, useState } from "react";
import "./styles.scss";
import MenuIcon from "../../assets/icons/menu.png";
import { apiReservamos } from "../../utils/api";
import { getCities } from "../../services/ReservamoService";
import { City } from "../../Interfaces/forecast";
import { useAppDispatch } from "../../app/hooks/reduxHook";
import { getForecastForLocation } from "../../app/slices/forecast.thunk";

const Header = ({ toggleSidebar }: any) => {
  const dispatch = useAppDispatch();
  const [isMobile, setIsMobile] = useState(false);
  const [search, setSearch] = useState<string>("");
  const [results, setResults] = useState<City[] | null>(null);

  useEffect(() => {
    let delayDebounceFn: any = null;
    if (search.length > 0) {
      delayDebounceFn = setTimeout(() => {
        findCity();
      }, 1000);
    } else setResults(null);
  }, [search]);

  const handleToggleSidebar = () => {
    setIsMobile(!isMobile);
    toggleSidebar(!isMobile);
  };

  const findCity = async () => {
    console.log(search);
    const response = await getCities(search);
    console.log(response.data);
    if (response.data.length > 0) {
      setResults(response.data.filter((c: City) => c.result_type == "city"));
    }
  };

  const handleSelectCity = async (city: City) => {
    console.log(city);
    await dispatch(getForecastForLocation(city));
    setSearch("");
  };

  return (
    <header className="header">
      <div className="header__title">Reservamos Test</div>
      <div className="header__search-container">
        <input
          type="text"
          className="header__search-container__search"
          placeholder="Busca un destino"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        {results && (
          <div className="header__search-container__results">
            {results &&
              results.map((city: City, i: number) => (
                <span
                  className="header__search-container__results__item"
                  key={i}
                  onClick={() => handleSelectCity(city)}
                >
                  {city.city_name}, {city.state}
                </span>
              ))}
          </div>
        )}
      </div>
      <div className="header__menu" onClick={handleToggleSidebar}>
        <button className="header__menu__button">
          <img src={MenuIcon} alt="Icno Menu" />
        </button>
      </div>
    </header>
  );
};

export default Header;
