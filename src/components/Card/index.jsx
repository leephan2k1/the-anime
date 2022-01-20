import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import Button from "../Button";
import { Link, useParams } from "react-router-dom";
import { playerPagePath, detailsPagePath } from "constants/path";

function Card(props) {
  const { imgSrc, episode_count, id, typeCard, title, customCard } = props;
  let basePath;
  const { animeId } = useParams();
  // console.log(customCard);
  if (customCard === "episodeCard") {
    basePath = `/${playerPagePath}`;
  } else {
    basePath = `/${detailsPagePath}`;
  }

  // console.log(basePath);
  return (
    <Link
      to={`${basePath}/${
        customCard === "episodeCard" ? `${animeId}` : `${id}`
      }${customCard === "episodeCard" ? `?index=${episode_count}` : ""}`}
      className="cardContainer position-relative"
    >
      {/* <span className="cardContainer__episode position-absolute">
        {episode_count}
      </span> */}
      <img className="cardContainer__img w-full h-full" src={imgSrc} alt={id} />
      <div className="cardContainer__playBtn position-absolute ">
        <Button type={"Play"} />
      </div>
      {typeCard === "details" ? (
        <div className="cardContainer__details">{title}</div>
      ) : null}
    </Link>
  );
}

Card.propTypes = {
  id: PropTypes.number,
  imgSrc: PropTypes.string,
  episode_duration: PropTypes.number,
  episode_count: PropTypes.number,
};

Card.defaultProps = {
  id: 0,
  imgSrc:
    "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx2582-aB1Vh1jDobQ3.jpg",
  episode_duration: 0,
  episode_count: 0,
};

export default Card;
