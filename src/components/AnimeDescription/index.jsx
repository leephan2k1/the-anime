import React, { useEffect } from "react";
import ContentLoader from "react-content-loader";
// import Box from "../Box";
import "./styles.scss";
import { Link } from "react-router-dom";

export default function AnimeDescription(props) {
  const { data, episode } = props;

  //handle CSS
  useEffect(() => {
    const animeDscWrapperDOM = document.querySelector(
      ".animeDescription__wrapper"
    );
    const handleHeight = () => {
      const animeDescDOM = document.querySelector(".animeDescription");
      if (animeDescDOM) {
        animeDescDOM.style.cssText = `height: ${animeDscWrapperDOM.offsetHeight}px`;
        if (window.innerWidth < 770) {
          animeDescDOM.style.cssText = `height: ${
            animeDscWrapperDOM.offsetHeight * 1
          }px`;
        }
      }
      // console.log(window.innerWidth);
    };
    //default:
    handleHeight();
    //when someone test responsive!
    window.addEventListener("resize", handleHeight);
    return () => {
      window.removeEventListener("resize", handleHeight);
    };
  }, [data]);

  return (
    <div className="animeDescription position-relative d-flex flex-column justify-content-end">
      <div className="animeDescription__wrapper d-flex flex-column justify-content-start">
        <div className="animeDescription__wrapper__control d-flex">
          <Link
            to={`/anime/watch/${data.id}?index=0`}
            className="animeDescription__wrapper__control__playBtn d-flex justify-content-center align-items-center"
          >
            <i className="bi bi-play-fill"></i>
            <span className="animeDescription__wrapper__playBtn__desc">
              Xem từ đầu
            </span>
          </Link>
          <Link
            to={`/anime/watch/${data.id}?index=${data.episodes?.length - 1}`}
            className="animeDescription__wrapper__control__playBtn d-flex justify-content-center align-items-center"
          >
            <i className="bi bi-play-fill"></i>
            <span className="animeDescription__wrapper__playBtn__desc">
              Tập mới nhất
            </span>
          </Link>
        </div>
        <div className="animeDescription__wrapper__desc">
          {data.name ? (
            <>
              <p className="desc__title">{data.name}</p>
              <p className="desc__title team-sub">
                {data.subTeams.map((e) => {
                  return `${e} `;
                })}
              </p>
              <div className="desc__title">
                {data.genres.map((e, idx) => {
                  if (idx > 4) return;
                  return (
                    <span key={idx} className="desc__genres">
                      {e.name}{" "}
                    </span>
                  );
                })}
              </div>
            </>
          ) : (
            [...Array(2).keys()].map((e) => {
              return (
                <div key={e} className="load_wrapper d-flex">
                  <ContentLoader
                    speed={0.5}
                    width={300}
                    height={70}
                    viewBox="0 0 300 70"
                    backgroundColor="#1f2123"
                    foregroundColor="#5d6468"
                    {...props}
                  >
                    <rect
                      x="-49"
                      y="229"
                      rx="0"
                      ry="0"
                      width="333"
                      height="14"
                    />
                    <rect x="7" y="23" rx="0" ry="0" width="369" height="30" />
                  </ContentLoader>
                </div>
              );
            })
          )}

          {data.description ? (
            <p className="desc__details">
              {data.description?.replace(/<\/?[^>]+(>|$)/g, "")}
            </p>
          ) : (
            <ContentLoader
              className="desc__details"
              speed={0.5}
              width={1000}
              height={100}
              viewBox="0 0 1000 100"
              backgroundColor="#1f2123"
              foregroundColor="#5d6468"
            >
              <rect x="2" y="30" rx="0" ry="0" width="700" height="312" />
            </ContentLoader>
          )}
        </div>
      </div>
    </div>
  );
}
