import React, { useState } from "react";
import "./styles.scss";
import MenuIcon from "../../assets/icons/menu.png";
const Header = ({ toggleSidebar }: any) => {
  const [isMobile, setIsMobile] = useState(false);

  const handleToggleSidebar = () => {
    setIsMobile(!isMobile);
    toggleSidebar(!isMobile);
  };

  return (
    <header className="header">
      <div className="header__title">Reservamos Test</div>
      <input
        type="text"
        className="header__search"
        placeholder="Busca un destino"
      />
      <div className="header__menu" onClick={handleToggleSidebar}>
        <button className="header__menu__button">
          <img src={MenuIcon} alt="Icno Menu" />
        </button>
      </div>
    </header>
  );
};

export default Header;
