import React, { Component } from 'react';
import { getPosts } from '../../api';

class PostsLoader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      isLoading: false,
      error: null,
    };
  }

  load = () => {
    this.setState({ isLoading: true });

    getPosts()
      .then((posts) => {
        this.setState({
          // posts: posts,
          posts,
        });
      })
      .catch((error) => {
        this.setState({
          error,
        });
      })
      .finally(() => {
        this.setState({
          isLoading: false,
        });
      });
  };

  componentDidMount() {
    this.load();
  }

  render() {
    const { posts, isLoading, error } = this.state;

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
}

export default PostsLoader;
