import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import defaultImage from "../../assets/images/WallpaperDog-962261.jpg";
import Box from "../../components/Box";
import MyLoader from "../MyLoader";
import { carouselLoaderSettings } from "../../settings";

import "./styles.scss";

function AnimeHeader(props) {
  const { data } = props;
  const [bannerImgURL, setBannerImgURL] = useState(null);

  //css & checking data
  useEffect(() => {
    const setImage = async () => {
      await setBannerImgURL(() => {
        return data.banner_image || defaultImage;
      });
      const animeHeaderDOM = document.querySelector(".animeHeader");
      if (animeHeaderDOM) {
        animeHeaderDOM.style.cssText = `background-image: url(${bannerImgURL})`;
      }
    };
    setImage();
  }, [data, bannerImgURL]);

  return (
    <header className="animeHeader w-full">
      {data.cover_image ? (
        <Box
          classNames={{
            wrapperClassName: "animeHeader__card overflow-hidden",
            imgClassName: "animeHeader__card__img",
            titleClassName: "animeHeader__card__title",
          }}
          imgUrl={data.cover_image}
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
