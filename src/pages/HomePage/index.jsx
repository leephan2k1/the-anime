import React from "react";
import { useSelector } from "react-redux";
import { homeList } from "../../app/selectors";
import Carousel from "../../components/Carousel";
import Header from "../../components/Header";
import SectionAnime from "../../components/SectionAnime";
import SectionCategory from "../../components/SectionCategory";
import SectionSeason from "../../components/SectionSeason";
import { mainCarouselSettings } from "../../settings";

function HomePage(props) {
  const data = useSelector(homeList);
  const { newAniList, suggestList } = props;
  return (
    <div className="w-full h-full">
      {console.log("check homepage render")}
      <Header />
      <Carousel
        settings={mainCarouselSettings}
        carouselType={"carouselMain"}
        data={data}
      />
      <SectionAnime title={"Anime mới cập nhật"} data={newAniList} />
      <SectionSeason />
      <SectionAnime title={"Hôm nay xem gì?"} data={suggestList} />
      <SectionCategory title={"Thể loại"} />
    </div>
  );
}

export default React.memo(HomePage);
