import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../slices/postSlice";
import { nanoid } from "@reduxjs/toolkit";

function AddPostForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      setError("Please fill in all fields");
      return;
    }

    if (title && content) {
      dispatch(
        addPost({
          title,
          content,
          id: nanoid(),
          createdAt: new Date().toISOString(),
        })
      );

      // Reset form
      setTitle("");
      setContent("");
      setError("");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create New Post</h2>

      {error && <div>{error}</div>}

      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter post title"
        />
      </div>

      <div>
        <label
          htmlFor="content"
          className="block text-sm font-medium text-gray-700"
        >
          Content
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={4}
          placeholder="Write your post content here"
        />
      </div>

      <button type="submit">Create Post</button>
    </form>
  );
}

export default AddPostForm;
