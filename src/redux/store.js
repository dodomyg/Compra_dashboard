import { configureStore } from "@reduxjs/toolkit";
import setupStepsReducer from "./slices/setupSteps";
import surveyMetricsReducer from "./slices/surveyMetrics";
import planDetailsReducer from "./slices/planDetails";
import surveysSlice from "./slices/surveys";

export const store = configureStore({
  reducer: {
    setupSteps: setupStepsReducer,
    surveyMetrics: surveyMetricsReducer,
    planDetails: planDetailsReducer,
    surveys:surveysSlice
  },
});
