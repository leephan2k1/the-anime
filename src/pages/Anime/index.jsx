import ANIAPI from "@mattplays/aniapi";
import ani from "api/ani";
import aniList from "api/aniList";

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import AnimeDescription from "components/AnimeDescription";
import AnimeEpisode from "components/AnimeEpisode";
import AnimeHeader from "components/AnimeHeader";
import "./styles.scss";
import gomenasaiImg from "assets/images/gomenasai.jpg";

import { setAniId, setAniSlug, setEpisodes } from "app/aniSlice";
import { useDispatch } from "react-redux";

export default function Anime() {
  const API = new ANIAPI.API("DUMMY_JWT");
  const [animeDetails, setAnimeDetails] = useState({});
  let { animeId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Call API
  useEffect(() => {
    const fetchAnime = async () => {
      try {
        animeId = animeId.toLowerCase().replace(/\s+/g, "-");
        const response = await ani.getDetails(animeId);
        if (response.success) {
          dispatch(setAniId(response.data?.id));
          dispatch(setAniSlug(response.data?.slug));
          dispatch(setEpisodes(response.data?.episodes));
          setAnimeDetails(response.data);
        } else {
          const response = await aniList.getList(animeId);
          if (response.success && response.data.length) {
            const responseDetails = await ani.getDetails(
              response.data[0]?.slug
            );
            dispatch(setAniId(responseDetails.data?.id));
            dispatch(setAniSlug(responseDetails.data?.slug));
            setAnimeDetails(responseDetails.data);
          } else {
            setAnimeDetails("Anime not found!");
          }
        }
      } catch (error) {
        console.log("fetch anime failed with error: ", error);
      }
    };

    fetchAnime();

    return () => {};
  }, []);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="Anime-detail w-full d-flex flex-column">
      {animeDetails !== "Anime not found!" ? (
        <>
          <AnimeHeader data={animeDetails} />
          <AnimeDescription data={animeDetails} />
          <AnimeEpisode
            data={animeDetails}
            thumbnail={animeDetails?.thumbnail}
          />
        </>
      ) : (
        <>
          {" "}
          <p className="Anime-detail__message">
            Anime bạn muốn xem chưa có sub hoặc chưa được phát sóng, sin lũi -
            ごめんなさい!
          </p>
          <img
            className="Anime-detail__notFound"
            src={gomenasaiImg}
            alt="gomenasai"
          ></img>
          <div className="Anime-detail__back">
            <p>Quay lại tiếp tục cày bộ khác nào!</p>
            <i className="fas fa-arrow-left" onClick={handleBack}></i>
          </div>
        </>
      )}
    </div>
  );
}
