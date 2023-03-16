import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCoursesById } from './../../service/genesisAPI';


export const getDetails = createAsyncThunk(
  'details/getDetails',
  async (id, { rejectWithValue }) => {
    try {
      const course = await fetchCoursesById(id);
      // console.log(course);
      return course;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
