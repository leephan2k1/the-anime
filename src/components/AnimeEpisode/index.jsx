import React from "react";
import "./styles.scss";
import SectionAnime from "components/SectionAnime";
import gomenasaiImg from "assets/images/gomenasai.jpg";

export default function AnimeEpisode(props) {
  const { data, thumbnail } = props;

  // console.log("AnimeEpisode data: ", data);

  return (
    <section className="animeEpisode w-full d-flex flex-column justify-content-center align-items-center">
      {data.episodes?.length === 0 ? (
        <>
          <p className="animeEpisode__message">
            Anime bạn muốn xem chưa có sub, sin lũi - ごめんなさい!
          </p>
          <img
            className="animeEpisode__notFound"
            src={gomenasaiImg}
            alt="gomenasai"
          ></img>
        </>
      ) : (
        <SectionAnime
          target={"#"}
          title={"Tập phim"}
          data={data.episodes}
          thumbnail={thumbnail}
          sectionType={"Episode"}
        />
      )}
    </section>
  );
}
