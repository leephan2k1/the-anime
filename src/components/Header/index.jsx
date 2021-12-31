import React from "react";
import "./styles.scss";

export default function Header() {
  return (
    <header className="header overflow-hidden">
      <div className="header__banner h-full d-flex justify-content-center">
        <img
          className="header__banner-image"
          src="https://s4.anilist.co/file/anilistcdn/media/anime/banner/128547-aVWJmZz9dwJJ.jpg"
          alt="banner"
        />
        <div className="searchAnime absolute overflow-hidden d-flex">
          <input
            className="searchAnime__input w-full h-full"
            type="text"
            name="searchAnime"
            placeholder="Nhập tên anime..."
          />
          <i className="bi bi-search d-flex align-items-center"></i>
        </div>
      </div>
    </header>
  );
}
