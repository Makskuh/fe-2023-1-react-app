import React from 'react';

function UserData(props) {
  const { user } = props;
  return (
    <div>
      <h4>
        {user.firstName} {user.lastName}
      </h4>
    </div>
  );
}

export default UserData;
