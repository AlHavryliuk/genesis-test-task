import { combineReducers } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import authReducer from './authReducer/authSlice';
import coursesReducer from './coursesReducer/coursesSlice';
import detailsReducer from './detailsReducer/detailsSlice';
import miniVideoReducer from './miniVideoReducer/miniVideoReducer';
import pageReducer from './pageReducer/pageSlice';
import themeReducer from './themeReducer/themeSlice';
import videoReducer from './videoReducer/videoReducer';

const persistedThemeConfig = {
  key: `lightmode`,
  storage,
};

const persistedVideoConfig = {
  key: `video`,
  storage,
};

export const persistedThemeReducer = persistReducer(
  persistedThemeConfig,
  themeReducer
);

export const persistedVideoReducer = persistReducer(
  persistedVideoConfig,
  videoReducer
);

export const rootReducer = combineReducers({
  courses: coursesReducer,
  theme: persistedThemeReducer,
  auth: authReducer,
  page: pageReducer,
  details: detailsReducer,
  video: persistedVideoReducer,
  pictureMode: miniVideoReducer,
});
