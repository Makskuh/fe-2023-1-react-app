import React from 'react';
import Header from '../../components/Header';
import PostsLoader from '../../components/PostsLoader';
import DataLoader from '../../components/DataLoader';
import { getPosts } from '../../api';

function PostsPage() {
  const postsLayout = (state) => {
    const { data, isLoading, error } = state;

    if (isLoading) {
      return <div>LOADING</div>;
    }

    return data.map((post) => (
      <article key={post.id}>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </article>
    ));
  };

  return (
    <>
      <Header />
      <DataLoader loadData={getPosts} render={postsLayout} />
    </>
  );
}

export default PostsPage;
