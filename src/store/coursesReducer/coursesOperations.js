import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCourses } from 'service/genesisAPI';

export const getCourses = createAsyncThunk(
  'courses/getCourses',
  async (_, { rejectWithValue }) => {
    try {
      const courses = await fetchCourses();
      return courses;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
