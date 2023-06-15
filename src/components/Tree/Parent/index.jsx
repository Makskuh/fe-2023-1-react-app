import React from 'react';
import Child from './Child';

function Parent(props) {
  return (
    <div style={{ border: '5px solid red', padding: '20px' }}>
      <h2>Parent</h2>
      <Child user={props.user} />
    </div>
  );
}

export default Parent;
