import React from "react";
import "./styles.scss";

type SidebarProps = {
  isSidebarOpen: boolean;
};

const Sidebar = ({ isSidebarOpen }: SidebarProps) => {
  return (
    <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
      <ul>
        <li>Dashboard</li>
        <li>Users</li>
        <li>Settings</li>
        <li>Logout</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
