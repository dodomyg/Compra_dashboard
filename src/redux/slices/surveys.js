import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getSurveys = createAsyncThunk(
  "surveys/getSurveys",
  async (_, { rejectWithValue }) => {
    try {
      const resp = await axios.get("http://localhost:8000/surveys");
      return resp.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);


const surveysSlice = createSlice({
  name: "surveys",
  initialState: {
    data: [],
    error: null,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSurveys.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getSurveys.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSurveys.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch surveys";
      });
  },
});

export default surveysSlice.reducer;
