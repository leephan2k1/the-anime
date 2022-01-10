import ANIAPI from "@mattplays/aniapi";
import Plyr from "plyr-react";
import "plyr-react/dist/plyr.css";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import "./styles.scss";

function Player() {
  const [searchParams] = useSearchParams();
  const { animeId } = useParams();
  const [aniUrl, setAniUrl] = useState();
  const timeOutBackBtn = useRef();
  const navigate = useNavigate();
  const API = new ANIAPI.API("DUMMY_JWT");

  //call api
  useEffect(() => {
    const fetchEpisode = async () => {
      try {
        const responseEpisode = await API.Episode.Get({
          anime_id: animeId,
          locale: "it",
        });
        // console.log(responseEpisode);
        if (responseEpisode.status_code === 200) {
          const url =
            responseEpisode.data.documents[+searchParams.get("index") - 1]
              .video;
          setAniUrl({
            type: "video",
            sources: [
              {
                src: url,
                type: "video/mp4",
              },
            ],
          });
        } else {
          console.log("not found episode anime!!");
          setAniUrl({
            type: "video",
            sources: [
              {
                src: "wBamxCpvkGU",
                provider: "youtube",
              },
            ],
          });
        }
      } catch (err) {
        console.log("fetch api fail error >>> ", err);
      }
    };
    fetchEpisode();
  }, []);

  //css Effect back button
  useEffect(() => {
    const playerDOM = document.querySelector(".animeZonePlayer");
    const backBtnDOM = document.querySelector(
      ".animeZonePlayer .bi-arrow-left"
    );
    const handleEvent = () => {
      backBtnDOM.style.cssText = "display: block";
      if (timeOutBackBtn.current) {
        clearTimeout(timeOutBackBtn.current);
      }
      timeOutBackBtn.current = setTimeout(() => {
        backBtnDOM.style.cssText = "display: none";
      }, 2000);
    };
    playerDOM.addEventListener("mousemove", handleEvent);

    return () => {
      playerDOM.removeEventListener("mousemove", handleEvent);
    };
  }, []);

  return (
    <div className="animeZonePlayer d-flex justify-content-center">
      <i
        onClick={() => {
          navigate(`/anime/details/${animeId}`);
        }}
        className="bi bi-arrow-left"
      ></i>
      <Plyr
        source={aniUrl}
        options={{
          blankVideo: "https://youtu.be/at_oZEBRJMQ",
          autoplay: true,
          /* https://github.com/sampotts/plyr#options */
        }}
        {
          ...{
            /* Direct props for inner video tag (mdn.io/video) */
          }
        }
      />
    </div>
  );
}

Player.propTypes = {};

export default Player;

//Test
// https://api.aniapi.com/v1/proxy/https%3a%2f%2fgogoplay1.com%2fdownload%3fid%3dMTU3MTE3%26typesub%3dGogoanime-SUB%26title%3dFruits%2bBasket%253A%2bThe%2bFinal%2bEpisode%2b1/gogoanime/?referrer=https%3a%2f%2fgogoplay1.com

// src: "https://api.aniapi.com/v1/proxy/https%3a%2f%2fgogoplay1.com%2fdownload%3fid%3dMTc0MzQ2%26typesub%3dGogoanime-SUB%26title%3dOusama%2bRanking%2bEpisode%2b5/gogoanime/?referrer=https%3a%2f%2fgogoplay1.com",

// const videoSrc = {
//   type: "video",
//   sources: [
//     {
//       src: "https://api.aniapi.com/v1/proxy/https%3a%2f%2fgogoplay1.com%2fdownload%3fid%3dMTc0MzQ2%26typesub%3dGogoanime-SUB%26title%3dOusama%2bRanking%2bEpisode%2b5/gogoanime/?referrer=https%3a%2f%2fgogoplay1.com",
//       // src: "https://api.aniapi.com/v1/proxy/https%3a%2f%2fgogoplay1.com%2fdownload%3fid%3dMTU3MTE3%26typesub%3dGogoanime-SUB%26title%3dFruits%2bBasket%253A%2bThe%2bFinal%2bEpisode%2b1/gogoanime/?referrer=https%3a%2f%2fgogoplay1.com",
//       type: "video/mp4",
//     },
//   ],
// };
