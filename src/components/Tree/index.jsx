import React from 'react';
import Parent from './Parent';

function Tree(props) {
  return (
    <div style={{ border: '5px solid', padding: '20px' }}>
      <h1>Tree</h1>
      <Parent />
    </div>
  );
}

export default Tree;
