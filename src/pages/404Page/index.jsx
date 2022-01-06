import React from "react";
import "./styles.scss";
import sugoiImg from "../../assets/images/sugoi.png";

export default function NotFoundPage() {
  return (
    <div className="notFoundPage d-flex flex-column justify-content-center align-items-center">
      <p>
        Sugoi Onii-chan! Onii-chan đã giúp Website isekai đến một vùng đất mới.
      </p>
      <p>Rất tiếc vùng đất này hoàn toàn trống rỗng.</p>
      <p>
        Hãy giúp website trở lại thực tại bằng cách chọn vào logo Anime Zone
      </p>
      <img src={sugoiImg} alt="sugoi" />
    </div>
  );
}
