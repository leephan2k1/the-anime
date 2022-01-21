import { createSlice } from "@reduxjs/toolkit";

const aniSlice = createSlice({
  name: "aniDetails",
  initialState: { id: "", slug: "" },
  reducers: {
    setAniId: (state, action) => {
      state.id = action.payload;
    },
    setAniSlug: (state, action) => {
      state.slug = action.payload;
    },
  },
});

const { actions, reducer } = aniSlice;
export const { setAniId, setAniSlug } = actions;
export default reducer;
