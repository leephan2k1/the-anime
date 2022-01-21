import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import listSlice from "./listSlice";
import filtersSlice from "./filtersSlice";
import aniSlice from "./aniSlice";

const store = configureStore({
  reducer: {
    homeList: listSlice,
    filters: filtersSlice,
    aniDetails: aniSlice,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
