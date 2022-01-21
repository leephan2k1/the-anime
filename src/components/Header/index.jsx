import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import ANIAPI from "@mattplays/aniapi";
import aniList from "api/aniList";
import { remainMiddleElem } from "app/selectors";
import MyLoader from "../MyLoader";
import { headerLoaderSettings } from "settings";
import { Link } from "react-router-dom";

import "./styles.scss";
import "animate.css";
//https://s4.anilist.co/file/anilistcdn/media/anime/banner/128547-aVWJmZz9dwJJ.jpg
export default function Header() {
  const API = new ANIAPI.API("DUMMY_JWT");
  const [urlBanner, setUrlBanner] = useState("");
  const [animeTitle, setAnimeTitle] = useState("");
  const [animeDesc, setAnimeDesc] = useState("");
  const [searchValues, setSearchValues] = useState("");
  const [responseList, setResponseList] = useState([]);
  const debounceTimes = useRef();
  const midElem = useSelector(remainMiddleElem);

  //side Effect sync banner middle element
  useEffect(() => {
    if (midElem) {
      setUrlBanner(midElem.thumbnail);
      setAnimeTitle(midElem.name);
      setAnimeDesc(() => midElem.details?.description);
    }

    return () => {};
  }, [midElem]);

  //side Effect fetch api search filter
  useEffect(() => {
    const fetchSearchFilter = () => {
      //clear timeout debounce before
      if (debounceTimes.current) {
        clearTimeout(debounceTimes.current);
      }
      // console.log(searchValues);
      debounceTimes.current = setTimeout(async () => {
        try {
          const response = await aniList.getList(searchValues);
          console.log(response);
          if (response.success) {
            setResponseList(response.data);
          } else {
            setResponseList([]);
          }
        } catch (err) {
          console.log("search failed with error: ", err);
        }
      }, 300);
    };

    fetchSearchFilter();

    return () => {
      setResponseList([]);
    };
  }, [searchValues]);

  //side Effect active CSS response zone
  useEffect(() => {
    const responseUI = document.querySelector(".searchAnime__responseZone");
    const searchInputDOM = document.querySelector(".searchAnime__input");
    let preventImmediatelyHidden;
    // console.log([searchInputDOM]);
    const handleStyleActive = () => {
      responseUI.style.cssText = "display: block";
    };
    const handleStyleInactive = () => {
      preventImmediatelyHidden = setTimeout(() => {
        responseUI.style.cssText = "display: none";
      }, 100);
    };

    if (searchInputDOM) {
      searchInputDOM.addEventListener("focus", handleStyleActive);
      searchInputDOM.addEventListener("blur", handleStyleInactive);
    }

    //clean up events
    return () => {
      if (searchInputDOM) {
        searchInputDOM.removeEventListener("focus", handleStyleActive);
        searchInputDOM.removeEventListener("blur", handleStyleInactive);
      }
      clearTimeout(preventImmediatelyHidden);
    };
  }, [urlBanner]);

  const handleSearchTitle = (e) => {
    setSearchValues(() => e.target.value);
  };

  return (
    <header className="header">
      {midElem ? (
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
          <div className="searchAnime absolute  d-flex">
            <input
              className="searchAnime__input w-full h-full"
              type="text"
              name="searchAnime"
              placeholder="Nhập tên anime..."
              value={searchValues}
              onChange={handleSearchTitle}
            />
            <div className="searchAnime__responseZone">
              {responseList &&
                responseList.length > 0 &&
                responseList.map((e) => {
                  return (
                    <Link
                      className="searchAnime__responseZone__item"
                      to={`/anime/details/${e.slug}`}
                      key={e.id}
                    >
                      {e.name}
                    </Link>
                  );
                })}
            </div>
            <i className="bi bi-search d-flex align-items-center"></i>
          </div>
        </div>
      ) : (
        <MyLoader stloader={headerLoaderSettings} />
      )}
    </header>
  );
}
