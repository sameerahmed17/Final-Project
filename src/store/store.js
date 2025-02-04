import { configureStore } from "@reduxjs/toolkit";
import postReducer from '../store/postSlice/postSlice'

export const store =configureStore({
  reducer: {
    posts: postReducer,
  },
});