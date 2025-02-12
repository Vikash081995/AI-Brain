import { createSlice } from "@reduxjs/toolkit";
import { posts } from "../types/posts";
import { RootState } from "../store/store";


const initialState: posts[] = [
  { id: "1", title: "learning Redux toolkit" },
  { id: "2", title: "Slices" },
];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});

export const selectAllPosts = (state:RootState)=>state.posts;

export default postSlice.reducer;


