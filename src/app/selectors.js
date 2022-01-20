import { createSelector } from "@reduxjs/toolkit";

export const homeList = (state) => state.homeList.randomLst;
export const middleElemId = (state) => state.homeList.middleElem;
export const seasonBannerList = (state) => state.homeList.seasonsBannerList;
export const filter = (state) => state.filters.filter;

export const remainMiddleElem = createSelector(
  homeList,
  middleElemId,
  (randomLst, middleElem) => {
    return (
      randomLst.length && randomLst.find((e) => e.details?.id === +middleElem)
    );
  }
);
