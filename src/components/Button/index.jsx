import React from "react";
import "./style.scss";

export default function Button(props) {
  const { type, handleEvent } = props;

  const getType = () => {
    switch (type) {
      case "Prev":
        return "‹";
      case "Next":
        return "›";
      case "Play":
        return <i className="bi bi-play-circle-fill"></i>;
      default:
        console.log("button type invalid!");
        return "";
    }
  };

  return (
    <div
      className={`${type} d-flex justify-content-center align-items-center position-absolute`}
      onClick={handleEvent}
    >
      {getType()}
    </div>
  );
}
