import { createSelector } from "@reduxjs/toolkit";

export const randomList = (state) => state.randomList.randomLst;
export const middleElemId = (state) => state.randomList.middleElem;

export const remainMiddleElem = createSelector(
  randomList,
  middleElemId,
  (randomLst, middleElem) => {
    return (
      randomLst.length && randomLst.find((e) => e.anilist_id === +middleElem)
    );
  }
);
