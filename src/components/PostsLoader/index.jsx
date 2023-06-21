import { getPosts } from '../../api';
import { useData } from 'hooks';

function PostsLoader(props) {
  const { data: posts, isLoading, error } = useData(getPosts);

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  const postsElems = posts.map((post) => (
    <article key={post.id}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </article>
  ));

  return <div>{postsElems}</div>;
}

export default PostsLoader;
