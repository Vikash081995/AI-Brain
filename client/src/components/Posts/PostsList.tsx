import { useSelector } from "react-redux";
import { Post } from "../../types/posts";
import { selectAllPosts } from "../../slices/postSlice";

function PostsList() {
  const posts = useSelector(selectAllPosts);

  const renderPosts = posts.map((post: Post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </article>
  ));

  return (
    <section>
      <h2>Posts</h2>
      {renderPosts}
    </section>
  );
}

export default PostsList;
