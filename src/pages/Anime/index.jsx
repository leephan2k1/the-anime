import ANIAPI from "@mattplays/aniapi";
import ani from "api/ani";
import aniList from "api/aniList";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AnimeDescription from "components/AnimeDescription";
import AnimeEpisode from "components/AnimeEpisode";
import AnimeHeader from "components/AnimeHeader";
import "./styles.scss";

export default function Anime() {
  const API = new ANIAPI.API("DUMMY_JWT");
  const [animeDetails, setAnimeDetails] = useState({});
  const { animeId } = useParams();

  //Call API
  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const response = await ani.getDetails(animeId);
        // console.log(response.data);
        if (response.success) {
          setAnimeDetails(response.data);
        } else {
          console.log("not found anime!!");
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
      <AnimeEpisode data={animeDetails} thumbnail={animeDetails?.cover_image} />
    </div>
  );
}
