import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Carousel from "../../components/Carousel";
import SectionAnime from "../../components/SectionAnime";

import aniListApi from "../../api/aniListAPI";

import { mainCarouselSettings } from "../../settings";

export default function HomePage() {
  const [randomList, setRandomList] = useState([]);
  const [fetchDone, setFetchDone] = useState(false);

  //call api
  useEffect(() => {
    const fetchRamdomList = async () => {
      try {
        const resonse = await aniListApi.getRandom(10);
        // console.log(resonse);
        setRandomList(resonse.data);
        setFetchDone(true);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRamdomList();
  }, []);

  useEffect(() => {
    console.log(randomList);
  }, [fetchDone]);

  return (
    <div className="w-full h-full">
      <Header />
      <Carousel
        data={randomList}
        settings={mainCarouselSettings}
        carouselType={"carouselMain"}
      />
      <SectionAnime />
    </div>
  );
}
