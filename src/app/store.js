import { configureStore } from "@reduxjs/toolkit";
import carouselSlice from "../components/Carousel/carouselSlice";

const store = configureStore({
  reducer: {
    randomList: carouselSlice,
  },
});

export default store;
