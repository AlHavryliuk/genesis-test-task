import { createSlice } from '@reduxjs/toolkit';

const initialState = { page: 1, maxpage: 1 };

export const pageSlice = createSlice({
  name: 'page',
  initialState: initialState,
  reducers: {
    incrementPage(state, action) {
      state.page = ++state.page;
    },
    decrementPage(state, action) {
      state.page = --state.page;
    },
    setMaxPage(state, action) {
      state.maxpage = action.payload;
    },
  },
});

const pageReducer = pageSlice.reducer;
export const { incrementPage, decrementPage, setMaxPage } = pageSlice.actions;
export default pageReducer;
