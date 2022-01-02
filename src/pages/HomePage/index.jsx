import ANIAPI from "@mattplays/aniapi";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import aniListApi from "../../api/aniListAPI";
import Carousel from "../../components/Carousel";
import { addList } from "../../components/Carousel/carouselSlice";
import Header from "../../components/Header";
import SectionAnime from "../../components/SectionAnime";
import { mainCarouselSettings } from "../../settings";

export default function HomePage() {
  const API = new ANIAPI.API("DUMMY_JWT");
  const dispatch = useDispatch();

  //call api
  useEffect(() => {
    const fetchRamdomList = async () => {
      try {
        const response = await aniListApi.getRandom(200);
        const listHasBanner = response.data.filter(
          (e) => e.banner_image !== undefined
        );
        dispatch(addList(listHasBanner));
      } catch (error) {
        console.log(error);
      }
    };
    fetchRamdomList();
  }, []);

  //test filer
  // useEffect(() => {
  //   const fetchFilter = async () => {
  //     try {
  //       const data = await API.Anime.Get({ year: 2021 }, 1, 10);
  //       console.log(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchFilter();
  // }, []);

  return (
    <div className="w-full h-full">
      <Header />
      <Carousel settings={mainCarouselSettings} carouselType={"carouselMain"} />
      <SectionAnime />
    </div>
  );
}
