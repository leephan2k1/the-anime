import React from "react";
import { NavLink } from "react-router-dom";
import { homePagePath, browsePagePath } from "constants/path";
import "./styles.scss";

export default function SideBar(props) {
  const { handleEffectSideBar } = props;

  const handleCSSsideBar = () => {
    if (handleEffectSideBar) {
      handleEffectSideBar();
    }
  };

  return (
    <nav className="sideBar flex-column justify-content-start">
      <NavLink
        className="sideBar__logo d-flex justify-content-center align-items-center"
        to={`${homePagePath}`}
      >
        Anime Zone
      </NavLink>
      <ul className="sideBar__list d-flex flex-column justify-content-start align-items-center h-full">
        <li>
          <NavLink
            to={`${homePagePath}`}
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => handleCSSsideBar()}
          >
            Trang chủ
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`${browsePagePath}/category`}
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => handleCSSsideBar()}
          >
            Thể loại
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`${browsePagePath}/new`}
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => handleCSSsideBar()}
          >
            Mới nhất
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
