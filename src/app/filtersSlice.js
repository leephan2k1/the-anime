import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "categorySlice",
  initialState: { filter: null },
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});
const { actions, reducer } = filtersSlice;
export const { setFilter } = actions;
export default reducer;
