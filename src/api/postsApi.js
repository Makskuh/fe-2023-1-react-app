export const getPosts = (options) => {
  return fetch('https://jsonplaceholder.typicode.com/posts').then((response) =>
    response.json()
  );
};
