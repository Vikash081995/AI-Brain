import { configureStore } from "@reduxjs/toolkit";
import dummyReducer from "../demo/dummySlice";

export const store = configureStore({
  reducer: {
    dummyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
