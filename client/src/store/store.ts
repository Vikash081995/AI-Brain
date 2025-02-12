import { configureStore } from "@reduxjs/toolkit";
import dummyReducer from "../slices/demoSlice";
import postReducer from "../slices/postSlice";

export const store = configureStore({
  reducer: {
    dummyReducer,
    posts: postReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
