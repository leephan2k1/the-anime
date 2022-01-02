import ANIAPI from "@mattplays/aniapi";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import aniListApi from "../../api/aniListAPI";
import { randomList } from "../../app/selectors";
import Carousel from "../../components/Carousel";
import { addList } from "../../components/Carousel/carouselSlice";
import Header from "../../components/Header";
import SectionAnime from "../../components/SectionAnime";
import SectionSeason from "../../components/SectionSeason";
import { mainCarouselSettings } from "../../settings";

export default function HomePage() {
  const API = new ANIAPI.API("DUMMY_JWT");
  const data = useSelector(randomList);
  const dispatch = useDispatch();

  const [newAniList, setNewAniList] = useState([]);

  //call api
  useEffect(() => {
    const fetchRamdomList = async () => {
      try {
        const response = await aniListApi.getRandom(200);
        const listHasBanner = response.data.filter(
          (e) => e.banner_image !== undefined
        );
        const dataFilter = await API.Anime.Get(
          { year: 2021, season: 3 },
          1,
          10
        );
        setNewAniList(dataFilter.data.documents);
        // console.log(dataFilter.data.documents);
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
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchFilter();
  // }, []);

  return (
    <div className="w-full h-full">
      <Header />
      <Carousel
        settings={mainCarouselSettings}
        carouselType={"carouselMain"}
        data={data}
      />
      <SectionAnime title={"Anime mới cập nhật"} data={newAniList} />
      <SectionSeason />
    </div>
  );
}
