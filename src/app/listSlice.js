import { createSlice } from "@reduxjs/toolkit";

const homeListSlice = createSlice({
  name: "homeList",
  initialState: { randomLst: [], middleElem: "", seasonsBannerList: {} },
  reducers: {
    addList: (state, action) => {
      state.randomLst = action.payload;
    },
    setMiddleElem: (state, action) => {
      state.middleElem = action.payload;
    },
    setSeasonBannerList: (state, action) => {
      // console.log(action.payload);
      state.seasonsBannerList = action.payload;
    },
  },
});

const { actions, reducer } = homeListSlice;
export const { addList, setMiddleElem, setSeasonBannerList } = actions;
export default reducer;
