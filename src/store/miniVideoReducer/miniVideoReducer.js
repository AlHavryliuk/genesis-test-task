import { createSlice } from '@reduxjs/toolkit';

const initialState = { isHidden: true };

export const miniVideoSlice = createSlice({
  name: 'miniVideo',
  initialState: initialState,
  reducers: {
    pictureModeOn(state) {
      state.isHidden = false;
    },
    pictureModeOff(state) {
      state.isHidden = true;
    },
  },
});

const miniVideoReducer = miniVideoSlice.reducer;
export const { pictureModeOn, pictureModeOff } = miniVideoSlice.actions;
export default miniVideoReducer;
