import React, { useState } from "react";
import Header from "../Components/Header/Header";
import Sidebar from "../Components/SidebarNav/Sidebar";
import MainContainer from "../Components/MainContainer/MainContainer";
import "../App.css";
import "./styles.scss";

export const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = (isOpen: boolean) => {
    setIsSidebarOpen(isOpen);
  };

  return (
    <div className="app">
      <Header toggleSidebar={toggleSidebar} />
      <div className="app__body">
        <MainContainer />
      </div>
    </div>
  );
};

export default Home;
