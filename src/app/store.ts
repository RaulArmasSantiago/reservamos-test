import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import forecastSlice from "./slices/forecastSlice.slice";

//Import slices

const rootReducer = combineReducers({
  // Add your reducers here
  forecast: forecastSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
