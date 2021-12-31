import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

function Card(props) {
  return (
    <div className="cardContainer overflow-hidden position-relative">
      <span className="cardContainer__episode position-absolute">13/13</span>
      <img
        className="cardContainer__img w-full h-full"
        src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20958-HuFJyr54Mmir.jpg"
        alt="test"
      />
    </div>
  );
}

Card.propTypes = {};

export default Card;
