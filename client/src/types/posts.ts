export interface Post {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}

export interface PostState {
  posts: Post[];
  loading: boolean;
  error: string | null;
}
