import React, { useState, useEffect } from "react";
import "./styles.scss";

export default function NavBar() {
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    const App = document.querySelector(".Anime-app");
    const handleScroll = () => {
      setActive(App.scrollTop > 60);
    };
    App.addEventListener("scroll", handleScroll);

    //CSS active
    const navBar = document.querySelector(".navBar");
    if (isActive) {
      navBar.style.cssText = "background-color: #000";
    } else {
      navBar.style.cssText = "background-color: transparent;";
    }

    //cleanup
    return () => {
      App.removeEventListener("scroll", handleScroll);
    };
  }, [isActive]);

  return (
    <nav className="navBar w-full absolute d-flex align-items-center">
      <div className="navBar__logo h-full d-flex justify-content-center align-items-center">
        Anime Zone
      </div>
      <ul className="navBar__list justify-content-between align-items-center h-full">
        <li>
          <a className="active" href="#">
            Trang chủ
          </a>
        </li>
        <li>
          <a href="#">Bảng xếp hạng</a>
        </li>
        <li>
          <a href="#">Thể loại</a>
        </li>
        <li>
          <a href="#">Mới nhất</a>
        </li>
      </ul>
      <div className="navBar__right-wrapper d-flex justify-content-center align-items-center">
        <div className="user h-full d-flex align-items-center">
          <i className="bi bi-list me-4"></i>
          <i className="bi bi-person-circle"></i>
        </div>
      </div>
    </nav>
  );
}
