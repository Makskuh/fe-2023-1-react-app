import { useEffect, useState } from 'react';
import { getPosts } from '../../api';

function PostsLoader(props) {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    load();
  }, []);

  const load = () => {
    setIsLoading(true);

    getPosts()
      .then((posts) => {
        setPosts(posts);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

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