import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import defaultImage from "assets/images/WallpaperDog-962261.jpg";
import Box from "components/Box";
import MyLoader from "../MyLoader";
import { carouselLoaderSettings } from "settings";

import "./styles.scss";

function AnimeHeader(props) {
  const { data } = props;
  const [bannerImgURL, setBannerImgURL] = useState(null);

  //css & checking data
  useEffect(() => {
    const setImage = () => {
      if (data.episodes) {
        setBannerImgURL(() => {
          return data.episodes[0]?.thumbnail_small || defaultImage;
        });
      }
      const animeHeaderDOM = document.querySelector(".animeHeader");
      const animeHeaderCardDOM = document.querySelector(
        ".animeHeader .animeHeader__card"
      );
      if (animeHeaderDOM) {
        animeHeaderDOM.style.cssText = `background-image: url(${bannerImgURL})`;
      }
      if (animeHeaderCardDOM) {
        animeHeaderCardDOM.style.cssText = `background-image: url(${data.thumbnail})`;
      }
    };
    setImage();
  }, [data, bannerImgURL]);

  return (
    <header className="animeHeader w-full">
      {data?.id ? (
        <Box
          classNames={{
            wrapperClassName: "animeHeader__card overflow-hidden",
            imgClassName: "animeHeader__card__img",
            titleClassName: "animeHeader__card__title",
          }}
        />
      ) : (
        <MyLoader
          className={`animeHeader__card overflow-hidden`}
          stloader={carouselLoaderSettings}
        />
      )}
      <Box
        classNames={{
          wrapperClassName: "animeHeader__card overflow-hidden",
          imgClassName: "animeHeader__card__img",
          titleClassName: "animeHeader__card__title",
        }}
      />
    </header>
  );
}

AnimeHeader.propTypes = {};

export default AnimeHeader;
