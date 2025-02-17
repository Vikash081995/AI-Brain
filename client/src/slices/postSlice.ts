import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";
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
    addPost: {
      reducer(state, action: PayloadAction<Post>) {
        state.posts.push(action.payload);
      },
      prepare(title: string, content: string) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            createdAt: new Date().toISOString(),
          },
        };
      },
    },
  },
});

export const { addPost } = postSlice.actions;

export const selectAllPosts = (state: RootState) => state.posts.posts;

export default postSlice.reducer;
