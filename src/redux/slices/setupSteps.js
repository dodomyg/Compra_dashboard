import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getSteps = createAsyncThunk("setupSteps/getSteps", async (_, { rejectWithValue }) => {
    try {
      const resp = await axios.get("http://localhost:8000/setup-steps");
      return resp.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  });

const setupStepSlice = createSlice({
  name: "setupSteps",
  initialState: {
    data: [],
    error: null,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSteps.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getSteps.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSteps.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch setup steps";
      });
  },
});

export default setupStepSlice.reducer;