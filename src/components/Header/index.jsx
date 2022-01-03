import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { remainMiddleElem } from "../../app/selectors";

import "./styles.scss";
import "animate.css";
//https://s4.anilist.co/file/anilistcdn/media/anime/banner/128547-aVWJmZz9dwJJ.jpg
export default function Header() {
  const [urlBanner, setUrlBanner] = useState("");
  const [animeTitle, setAnimeTitle] = useState("");
  const [animeDesc, setanimeDesc] = useState("");
  const midElem = useSelector(remainMiddleElem);

  useEffect(() => {
    if (midElem) {
      setUrlBanner(midElem.banner_image);
      setAnimeTitle(midElem.titles.en);
      setanimeDesc(() => {
        const validDesc = midElem.descriptions.en || midElem.descriptions.it;
        return validDesc;
      });
    }
  }, [midElem]);

  return (
    <header className="header overflow-hidden">
      <div className="header__banner h-full d-flex justify-content-center">
        {animeTitle ? (
          <p
            key={animeTitle}
            className="header__title animate__animated animate__bounceInLeft animate__faster"
          >
            {animeTitle}
          </p>
        ) : null}
        <p
          key={animeDesc}
          className="header__desc animate__animated animate__bounceInLeft animate__faster text-truncate text-truncate--2"
        >
          {animeDesc}
        </p>
        <img className="header__banner-image" src={urlBanner} alt="banner" />
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
