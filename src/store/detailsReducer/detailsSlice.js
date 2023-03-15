import { createSlice } from '@reduxjs/toolkit';
import { getDetails } from './detailsOperations';

const initialState = { details: null, isLoading: false, error: null };

export const detailsSlice = createSlice({
  name: 'course',
  initialState: initialState,
  extraReducers: builder =>
    builder

      .addCase(getDetails.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.details = action.payload;
      })
      .addCase(getDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

const detailsReducer = detailsSlice.reducer;
export default detailsReducer;
