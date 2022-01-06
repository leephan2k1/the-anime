import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filtersSlice",
  initialState: {
    year: 2021,
    season: 1,
    genres: null,
    status: null,
    formats: null,
  },
  reducers: {
    setYear: (state, action) => {
      state.year = action.payload;
    },
    setSeason: (state, action) => {
      switch (action.payload) {
        case "Tất cả":
          state.season = null;
          break;
        case "Mùa Xuân":
          state.season = 1;
          break;
        case "Mùa Hạ":
          state.season = 2;
          break;
        case "Mùa Thu":
          state.season = 3;
          break;
        case "Mùa Đông":
          state.season = 4;
          break;
      }
    },
    setGenres: (state, action) => {
      if (action.payload === "Tất cả") {
        state.genres = null;
      } else {
        state.genres = action.payload;
      }
    },
    setStatus: (state, action) => {
      if (action.payload === "Tất cả") {
        state.status = null;
      } else {
        state.status = action.payload;
      }
    },
    setFormats: (state, action) => {
      if (action.payload === "Tất cả") {
        state.formats = null;
      } else {
        state.formats = action.payload;
      }
    },
  },
});

const { actions, reducer } = filtersSlice;
export const { setYear, setSeason, setGenres, setStatus, setFormats } = actions;
export default reducer;
