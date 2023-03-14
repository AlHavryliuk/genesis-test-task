import { createSlice } from '@reduxjs/toolkit';

const initialState = { darkmode: false };

export const themeSlice = createSlice({
  name: 'theme',
  initialState: initialState,
  reducers: {
    toggleDarkMode: state => {
      state.darkmode = !state.darkmode;
    },
    darkModeOn: state => state.darkmode,
    darkModeOff: state => state.darkmode,
  },
});

const themeReducer = themeSlice.reducer;
export const { toggleDarkMode } = themeSlice.actions;
export default themeReducer;
