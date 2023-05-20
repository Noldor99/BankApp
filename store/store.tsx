import { configureStore, combineReducers } from "@reduxjs/toolkit";
import todoReducer from "./slice/todoSlice";
import { apiSlice } from './slices/apiSlice';
import authReducer from './slices/authSlice';

const rootReducer = combineReducers({
  todo: todoReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
  auth: authReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(apiSlice.middleware),
  devTools: true,
});

export default store;
