import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import listSlice from "./listSlice";

const store = configureStore({
  reducer: {
    homeList: listSlice,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
