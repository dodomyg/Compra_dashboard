import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getSurveyMetrics = createAsyncThunk(
  "surveyMetrics/getSurveyMetrics",
  async (_, { rejectWithValue }) => {
    try {
      const resp = await axios.get("http://localhost:8000/survey-metrics");
      return resp.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

// Redux slice for survey metrics
const surveyMetricsSlice = createSlice({
  name: "surveyMetrics",
  initialState: {
    data: null,
    error: null,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSurveyMetrics.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getSurveyMetrics.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSurveyMetrics.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch survey metrics";
      });
  },
});

export default surveyMetricsSlice.reducer;
