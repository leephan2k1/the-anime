import "./App.scss";
import NavBar from "./components/NavBar";
import Anime from "./pages/Anime";
import { Suspense, lazy, useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import ANIAPI from "@mattplays/aniapi";
import aniListApi from "./api/aniListAPI";

import { useDispatch } from "react-redux";
import { addList } from "./app/listSlice";
import { setSeasonBannerList } from "./app/listSlice";

const HomePage = lazy(() => import("./pages/HomePage"));

function App() {
  const API = new ANIAPI.API("DUMMY_JWT");
  const [newAniList, setNewAniList] = useState([]);
  const [suggestList, setSuggestList] = useState([]);

  const dispatch = useDispatch();

  //call api
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

  return (
    <div className="Anime-app d-flex flex-column">
      <NavBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage newAniList={newAniList} suggestList={suggestList} />
            }
          />
          <Route path="/anime" element={<Anime />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "5rem", fontSize: "10rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
