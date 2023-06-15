import React from 'react';
import UserData from './UserData';

function Child(props) {
  return (
    <div style={{ border: '5px solid green', padding: '20px' }}>
      <h3>Child</h3>
      <UserData user={props.user} />
    </div>
  );
}

export default Child;
