import React from "react";
import "./styles.scss";

export default function NavBar() {
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
