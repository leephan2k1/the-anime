import { createSlice } from "@reduxjs/toolkit";

const aniSlice = createSlice({
  name: "aniDetails",
  initialState: { id: "", slug: "", episodes: [] },
  reducers: {
    setAniId: (state, action) => {
      state.id = action.payload;
    },
    setAniSlug: (state, action) => {
      state.slug = action.payload;
    },
    setEpisodes: (state, action) => {
      state.episodes = action.payload;
    },
  },
});

const { actions, reducer } = aniSlice;
export const { setAniId, setAniSlug, setEpisodes } = actions;
export default reducer;
