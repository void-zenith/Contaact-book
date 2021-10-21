import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import LayoutSlice from "../features/contact/LayoutSlice";
import ContactSlice from "../features/contact/ContactSlice";
const reducers = combineReducers({
  layout: LayoutSlice,
  contact: ContactSlice,
});
const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
