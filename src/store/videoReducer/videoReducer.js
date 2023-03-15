import { createSlice } from '@reduxjs/toolkit';

const initialState = { videosArray: null, currentVideo: null };

export const videoSlice = createSlice({
  name: 'video',
  initialState: initialState,
  reducers: {
    setCurrentVideo(state, action) {
      state.currentVideo = action.payload;
    },
    clearCurrentVideo(state) {
      state.currentVideo = null;
    },
  },
});

const videoReducer = videoSlice.reducer;
export const { setCurrentVideo, clearCurrentVideo } = videoSlice.actions;
export default videoReducer;
