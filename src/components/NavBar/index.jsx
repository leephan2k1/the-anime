import React, { useState, useEffect } from "react";
import "./styles.scss";

export default function NavBar() {
  const [isActive, setActive] = useState(false);

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

  return (
    <nav className="navBar w-full d-flex align-items-center">
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
