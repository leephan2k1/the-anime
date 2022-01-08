import "./App.scss";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Player from "./pages/Player";

import { Suspense, lazy, useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import ANIAPI from "@mattplays/aniapi";
import aniListApi from "./api/aniListAPI";

import { useDispatch } from "react-redux";
import { addList } from "./app/listSlice";
import { setSeasonBannerList } from "./app/listSlice";

const HomePage = lazy(() => import("./pages/HomePage"));
const Anime = lazy(() => import("./pages/Anime"));
const _404Page = lazy(() => import("./pages/404Page"));
const Browse = lazy(() => import("./pages/Browse"));

function App() {
  const API = new ANIAPI.API("DUMMY_JWT");
  const [newAniList, setNewAniList] = useState([]);
  const [suggestList, setSuggestList] = useState([]);
  const [toggleSideBar, setToggleSideBar] = useState(true);

  const dispatch = useDispatch();

  //call api 4 homepage
  useEffect(() => {
    const fetchRamdomList = async () => {
      try {
        const response = await aniListApi.getRandom(200);
        const listHasBanner = response.data.filter(
          (e) => e.banner_image !== undefined
        );
        //store to redux
        dispatch(addList(listHasBanner));

        const dataFilter = await API.Anime.Get(
          { year: 2021, season: 3 },
          1,
          10
        );
        //store to state
        setNewAniList(dataFilter.data.documents);
        const dataSuggest = await API.Anime.Get(
          {
            genres: ["Action", "Adventure", "Comedy"],
            year: 2021,
            status: [ANIAPI.ENUMS.AnimeStatus.FINISHED],
          },
          1,
          10
        );
        //store to state
        setSuggestList(dataSuggest.data.documents);

        const springSeason = await API.Anime.Get(
          { year: 2021, season: 1 },
          1,
          2
        );
        const summerSeason = await API.Anime.Get(
          { year: 2021, season: 2 },
          1,
          2
        );
        const fallSeason = await API.Anime.Get({ year: 2021, season: 3 }, 1, 2);
        const winterSeason = await API.Anime.Get({ season: 4 }, 1, 2);

        //store to redux
        const seasonPayLoad = {
          springSeason: springSeason.data.documents,
          summerSeason: summerSeason.data.documents,
          fallSeason: fallSeason.data.documents,
          winterSeason: winterSeason.data.documents,
        };

        dispatch(setSeasonBannerList(seasonPayLoad));
      } catch (error) {
        console.log(error);
      }
    };
    fetchRamdomList();
  }, []);

  //Handle Event Click button
  const handleEffectSideBar = () => {
    const sideBar = document.querySelector(".sideBar");
    if (sideBar) {
      sideBar.style.cssText = "transform: translateX(-100%)";
    }
    setToggleSideBar(!toggleSideBar);
  };
  useEffect(() => {
    const menuBtn = document.querySelector(".bi-list");
    const overlay = document.querySelector(".Anime-app__overlay");

    const handleActiveSideBar = () => {
      const sideBar = document.querySelector(".sideBar");
      setToggleSideBar(!toggleSideBar);
      // console.log(toggleSideBar);
      if (toggleSideBar) {
        sideBar.style.cssText = "transform: translateX(0%)";
      } else {
        sideBar.style.cssText = "transform: translateX(-100%)";
      }
    };
    if (overlay) overlay.addEventListener("click", handleActiveSideBar);
    menuBtn.addEventListener("click", handleActiveSideBar);
    //clean up event
    return () => {
      menuBtn.removeEventListener("click", handleActiveSideBar);
      if (overlay) overlay.removeEventListener("click", handleActiveSideBar);
    };
  }, [toggleSideBar]);

  return (
    <div className="Anime-app d-flex flex-column">
      {toggleSideBar === false ? (
        <div className="Anime-app__overlay"></div>
      ) : null}
      <NavBar />
      <SideBar handleEffectSideBar={handleEffectSideBar} />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage newAniList={newAniList} suggestList={suggestList} />
            }
          >
            <Route
              path="anime"
              element={
                <HomePage newAniList={newAniList} suggestList={suggestList} />
              }
            />
          </Route>

          <Route path="anime/details/:animeId" element={<Anime />} />
          <Route path="anime/watch/:animeId" element={<Player />} />

          <Route path="anime/browse/" element={<Browse />}>
            <Route path=":type" element={<Browse />} />
          </Route>

          <Route path="*" element={<_404Page />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
