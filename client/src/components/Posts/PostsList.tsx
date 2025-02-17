import { useSelector } from "react-redux";
import { Post } from "../../types/posts";
import { selectAllPosts } from "../../slices/postSlice";
import { Container, Typography, Card, CardContent, Box } from "@mui/material";

function PostsList() {
  const posts = useSelector(selectAllPosts);

  const renderPosts = posts.map((post: Post) => (
    <Card key={post.id} sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h5" component="h3">
          {post.title}
        </Typography>
        <Typography variant="body1" component="p">
          {post.content}
        </Typography>
      </CardContent>
    </Card>
  ));

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 3 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Posts
        </Typography>
        {renderPosts}
      </Box>
    </Container>
  );
}

export default PostsList;
