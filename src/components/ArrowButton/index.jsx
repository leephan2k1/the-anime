import React from "react";
import "./style.scss";

export default function ArrowButton(props) {
  const { type, sliderRef } = props;

  return (
    <div
      className={`${type} d-flex justify-content-center align-items-center position-absolute`}
      onClick={sliderRef}
      onClick={sliderRef}
    >
      {type === "Prev" ? "‹" : "›"}
    </div>
  );
}
