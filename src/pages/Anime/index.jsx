import ANIAPI from "@mattplays/aniapi";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AnimeDescription from "../../components/AnimeDescription";
import AnimeEpisode from "../../components/AnimeEpisode";
import AnimeHeader from "../../components/AnimeHeader";
// import { Outlet } from "react-router-dom";
import "./styles.scss";

export default function Anime(props) {
  const API = new ANIAPI.API("DUMMY_JWT");
  const [animeDetails, setAnimeDetails] = useState({});
  const [episode, setEpisode] = useState({});
  const { animeId } = useParams();

  //Call API
  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const response = await API.Anime.GetByID(animeId);
        // console.log(response.data);
        if (response.status_code === 200) {
          setAnimeDetails(response.data);
        } else {
          console.log("not found anime!!");
        }
        const responseEpisode = await API.Episode.Get({
          anime_id: animeId,
        });
        if (responseEpisode.status_code === 200) {
          setEpisode(responseEpisode.data);
        } else {
          console.log("not found episode anime!!");
          setEpisode("Not found episode");
        }
      } catch (error) {
        console.log("fetch anime failed with error: ", error);
      }
    };
    fetchAnime();

    return () => {
      setAnimeDetails({});
      setEpisode({});
    };
  }, []);

  return (
    <div className="Anime-detail w-full d-flex flex-column">
      <AnimeHeader data={animeDetails} />
      <AnimeDescription data={animeDetails} episode={episode} />
      <AnimeEpisode data={episode} thumbnail={animeDetails?.cover_image} />
    </div>
  );
}

Anime.propTypes = {};
