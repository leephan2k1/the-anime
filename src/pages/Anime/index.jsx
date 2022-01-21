import ANIAPI from "@mattplays/aniapi";
import ani from "api/ani";
import aniList from "api/aniList";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AnimeDescription from "components/AnimeDescription";
import AnimeEpisode from "components/AnimeEpisode";
import AnimeHeader from "components/AnimeHeader";
import "./styles.scss";

import { setAniId, setAniSlug } from "app/aniSlice";
import { useDispatch } from "react-redux";

export default function Anime() {
  const API = new ANIAPI.API("DUMMY_JWT");
  const [animeDetails, setAnimeDetails] = useState({});
  let { animeId } = useParams();
  const dispatch = useDispatch();

  //Call API
  useEffect(() => {
    const fetchAnime = async () => {
      try {
        animeId = animeId.toLowerCase().replace(/\s+/g, "-");
        const response = await ani.getDetails(animeId);
        // console.log(response.data);
        if (response.success) {
          dispatch(setAniId(response.data?.id));
          dispatch(setAniSlug(response.data?.slug));
          setAnimeDetails(response.data);
        } else {
          const response = await aniList.getList(animeId);
          if (response.success) {
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

  return (
    <div className="Anime-detail w-full d-flex flex-column">
      <AnimeHeader data={animeDetails} />
      <AnimeDescription data={animeDetails} />
      <AnimeEpisode data={animeDetails} thumbnail={animeDetails?.thumbnail} />
    </div>
  );
}
