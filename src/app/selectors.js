import { createSelector } from "@reduxjs/toolkit";

export const homeList = (state) => state.homeList.randomLst;
export const middleElemId = (state) => state.homeList.middleElem;
export const seasonBannerList = (state) => state.homeList.seasonsBannerList;
export const yearFilter = (state) => state.filtersSlice.year;
export const seasonFilter = (state) => state.filtersSlice.season;
export const genresFilter = (state) => state.filtersSlice.genres;
export const statusFilter = (state) => state.filtersSlice.status;
export const formatsFilter = (state) => state.filtersSlice.formats;

export const remainMiddleElem = createSelector(
  homeList,
  middleElemId,
  (randomLst, middleElem) => {
    return randomLst.length && randomLst.find((e) => e.id === +middleElem);
  }
);
