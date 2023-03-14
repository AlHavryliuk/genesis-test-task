import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAuth } from 'service/genesisAPI';

export const getToken = createAsyncThunk(
  'token/getToken',
  async (_, thunkAPI) => {
    try {
      const { token } = await fetchAuth();
      return token;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
