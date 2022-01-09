import React from "react";
import { useSelector } from "react-redux";
import { homeList } from "../../app/selectors";
import { mainCarouselSettings } from "../../settings";
// import { Outlet } from "react-router-dom";
import Carousel from "../../components/Carousel";
import Header from "../../components/Header";
import SectionAnime from "../../components/SectionAnime";
import SectionCategory from "../../components/SectionCategory";
import SectionSeason from "../../components/SectionSeason";

import { browsePagePath } from "constants/path";

function HomePage(props) {
  const data = useSelector(homeList);
  const { newAniList, suggestList } = props;
  return (
    <div className="w-full h-full">
      <Header />
      <Carousel
        settings={mainCarouselSettings}
        carouselType={"carouselMain"}
        data={data}
      />
      <SectionAnime
        target={`${browsePagePath}/new`}
        title={"Anime mới cập nhật"}
        data={newAniList}
      />
      <SectionSeason target={`${browsePagePath}/category`} />
      <SectionAnime
        target={`${browsePagePath}/category`}
        title={"Hôm nay xem gì?"}
        data={suggestList}
      />
      <SectionCategory
        title={"Thể loại"}
        target={`${browsePagePath}/category`}
      />
      {/* <Outlet /> */}
    </div>
  );
}

export default React.memo(HomePage);
