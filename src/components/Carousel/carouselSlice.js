import { createSlice } from "@reduxjs/toolkit";

const carouselSlice = createSlice({
  name: "randomList",
  initialState: { randomLst: [], middleElem: {} },
  reducers: {
    addList: (state, action) => {
      state.randomLst = action.payload;
    },
    setMiddleElem: (state, action) => {
      state.middleElem = state.randomLst.find(
        (e) => e.anilist_id === action.payload
      );
    },
  },
});

const { actions, reducer } = carouselSlice;
export const { addList, setMiddleElem } = actions;
export default reducer;
