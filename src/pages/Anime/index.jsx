import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import AnimeHeader from "../../components/AnimeHeader";
import AnimeDescription from "../../components/AnimeDescription";
import AnimeEpisode from "../../components/AnimeEpisode";

import "./styles.scss";

import ANIAPI from "@mattplays/aniapi";

export default function Anime(props) {
  const API = new ANIAPI.API("DUMMY_JWT");
  const [animeDetails, setAnimeDetails] = useState({});
  const params = useParams();

  //Call API
  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const response = await API.Anime.GetByID(params.animeId);
        // console.log(response.data);
        if (response.status_code === 200) {
          setAnimeDetails(response.data);
        } else {
          console.log("not found anime!!");
        }
      } catch (error) {
        console.log("fetch anime failed with error: ", error);
      }
    };
    fetchAnime();
  }, []);

  return (
    <div className="Anime-detail w-full d-flex flex-column">
      {/* {console.log(animeDetails)} */}
      <AnimeHeader data={animeDetails} />
      <AnimeDescription data={animeDetails} />
      {/* <AnimeEpisode /> */}
    </div>
  );
}

Anime.propTypes = {};
