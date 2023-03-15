import { createSlice } from '@reduxjs/toolkit';
import { getCourses } from './coursesOperations';

const initialState = { courses: null, isLoading: false, error: null };

export const coursesSlice = createSlice({
  name: 'courses',
  initialState: initialState,
  extraReducers: builder =>
    builder

      .addCase(getCourses.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCourses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.courses = action.payload;
      })
      .addCase(getCourses.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

const coursesReducer = coursesSlice.reducer;
export default coursesReducer;
