import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostState, Post } from "../types/posts";
import { RootState } from "../store/store";

const initialState: PostState = {
  posts: [],
  loading: false,
  error: null,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Post>) => {
      state.posts.push(action.payload);
    },
  },
});

export const { addPost } = postSlice.actions;

export const selectAllPosts = (state: RootState) => state.posts.posts;

export default postSlice.reducer;
