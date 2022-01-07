import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import listSlice from "./listSlice";
import filtersSlice from "./filtersSlice";

const store = configureStore({
  reducer: {
    homeList: listSlice,
    filters: filtersSlice,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
