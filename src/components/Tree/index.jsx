import React from 'react';
import Parent from './Parent';

function Tree(props) {
  return (
    <div style={{ border: '5px solid', padding: '20px' }}>
      <h1>Tree</h1>
      <Parent user={props.user} />
    </div>
  );
}

export default Tree;
