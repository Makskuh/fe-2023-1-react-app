import React from 'react';

function List(props) {
  const { title, children } = props;

  return (
    <article style={{ border: '5px solid black', padding: '20px' }}>
      <h1>{title}</h1>
      <ul>{children}</ul>
    </article>
  );
}

export default List;
