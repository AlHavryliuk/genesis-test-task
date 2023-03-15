import { combineReducers } from 'redux';
import authReducer from './authReducer/authSlice';
import coursesReducer from './coursesReducer/coursesSlice';
import pageReducer from './pageReducer/pageSlice';
import themeReducer from './themeReducer/themeSlice';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import detailsReducer from './detailsReducer/detailsSlice';
import videoReducer from './videoReducer/videoReducer';

const persistedConfig = {
  key: `lightmode`,
  storage,
};

export const persistedthemeReducer = persistReducer(
  persistedConfig,
  themeReducer
);

export const rootReducer = combineReducers({
  courses: coursesReducer,
  theme: persistedthemeReducer,
  auth: authReducer,
  page: pageReducer,
  details: detailsReducer,
  video: videoReducer,
});
