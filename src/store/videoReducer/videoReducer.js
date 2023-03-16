import { createSlice } from '@reduxjs/toolkit';

const initialState = { videoArray: [], currentVideo: null, openPopup: false };

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
    openVideoPopup(state) {
      state.openPopup = true;
    },
    closeVideoPopup(state) {
      state.openPopup = false;
    },
    saveVideoId(state) {
      state.videoArray = [
        ...state.videoArray,
        { id: state.currentVideo, lastTime: 0 },
      ];
    },
    saveVideoTime(state, action) {
      const video = state.videoArray.find(
        video => video.id === state.currentVideo
      );
      if (video) {
        video.lastTime = action.payload;
      }
    },
  },
});

const videoReducer = videoSlice.reducer;
export const {
  setCurrentVideo,
  clearCurrentVideo,
  saveVideoId,
  saveVideoTime,
  openVideoPopup,
  closeVideoPopup,
} = videoSlice.actions;
export default videoReducer;
