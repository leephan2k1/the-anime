import React, { useState, useEffect } from "react";
import "./styles.scss";
import { useSelector } from "react-redux";
import { remainMiddleElem } from "../../app/selectors";

//https://s4.anilist.co/file/anilistcdn/media/anime/banner/128547-aVWJmZz9dwJJ.jpg
export default function Header() {
  const [urlBanner, setUrlBanner] = useState("");
  const midElem = useSelector(remainMiddleElem);

  useEffect(() => {
    if (midElem) {
      setUrlBanner(midElem.banner_image);
    }
  }, [urlBanner, midElem]);

  return (
    <header className="header overflow-hidden">
      {console.log("check render")}
      <div className="header__banner h-full d-flex justify-content-center">
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
