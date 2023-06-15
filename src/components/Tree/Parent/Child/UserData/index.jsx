import React from 'react';
import { UserContext } from '../../../../../contexts';

function UserData(props) {
  // return (
  //   <div>
  //     <h4>
  //       {user.firstName} {user.lastName}
  //     </h4>
  //   </div>
  // );

  return (
    <UserContext.Consumer>
      {(user) => (
        <div>
          <h4>
            {user.firstName} {user.lastName}
          </h4>
        </div>
      )}
    </UserContext.Consumer>
  );
}

export default UserData;
