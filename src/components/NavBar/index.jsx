import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Container } from "reactstrap";
import "./styles.scss";
import "animate.css";

export default function NavBar() {
  const [isActive, setActive] = useState(false);
  const [toggleUser, setToggleUser] = useState(false);

  //Active css scroll
  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    // console.log(isActive);

    //CSS active
    const navBar = document.querySelector(".navBar");
    if (isActive) {
      navBar.style.cssText = "background-color: #000";
    } else {
      navBar.style.cssText = "background-color: transparent;";
    }

    //cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isActive]);

  const activeUser = () => {
    const userDropDownDOM = document.querySelector(".user__dropdown");
    if (!toggleUser) {
      userDropDownDOM.style.cssText = "display: flex";
    } else {
      userDropDownDOM.style.cssText = "display: none";
    }
    setToggleUser((prev) => !prev);
  };
  return (
    <nav className="navBar w-full d-flex align-items-center">
      <Container className="w-full h-full d-flex justify-content-around">
        <NavLink
          className="navBar__logo h-full d-flex justify-content-center align-items-center"
          to="/"
        >
          Anime Zone
        </NavLink>

        <ul className="navBar__list justify-content-evenly align-items-center h-full">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Trang chủ
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/anime/browse/category"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Thể loại
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/anime/browse/new"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Mới nhất
            </NavLink>
          </li>
        </ul>
        <div className="navBar__right-wrapper d-flex justify-content-center align-items-center">
          <div className="user h-full d-flex align-items-center">
            <i className="bi bi-list me-4"></i>
            <i className="bi bi-person-circle" onClick={activeUser}></i>
            <div className="user__dropdown justify-content-center align-items-center">
              <span className="animate__animated animate__fadeIn animate__infinite">
                Đang phát triển...
              </span>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
}
