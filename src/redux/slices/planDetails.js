import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPlanDetails = createAsyncThunk(
  "planDetails/getPlanDetails",
  async (_, { rejectWithValue }) => {
    try {
      const resp = await axios.get("http://localhost:8000/plan-details");
      return resp.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

const planDetailsSlice = createSlice({
  name: "planDetails",
  initialState: {
    data: null,
    error: null,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPlanDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getPlanDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPlanDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch plan details";
      });
  },
});


export default planDetailsSlice.reducer;
