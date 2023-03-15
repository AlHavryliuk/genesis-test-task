import { createSlice } from '@reduxjs/toolkit';
import { getToken } from './authOperation';

const initialState = { token: null, isLoading: false, error: null };

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  extraReducers: builder =>
    builder

      .addCase(getToken.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getToken.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload;
        localStorage.setItem('token', action.payload);
      })
      .addCase(getToken.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

const authReducer = authSlice.reducer;
export default authReducer;
