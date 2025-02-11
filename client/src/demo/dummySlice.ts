import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const dummySlice = createSlice({
  name: "CounterSlice",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export const { increment, decrement } = dummySlice.actions;

export default  dummySlice.reducer;
