import { configureStore, combineReducers } from "@reduxjs/toolkit";
import paramReducer from "./slice/paramSlice";

const rootReducer = combineReducers({
  param: paramReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: true,
});

export default store;
