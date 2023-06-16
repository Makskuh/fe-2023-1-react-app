import React from 'react';
import classNames from 'classnames';
import { UserContext, ThemeContext } from '../../../../../contexts';
import CONSTANTS from '../../../../../constants';
import styles from './UserData.module.scss';

const { THEMES } = CONSTANTS;

function UserData(props) {
  /*
  

  
  */

  return (
    <UserContext.Consumer>
      {(user) => (
        <ThemeContext.Consumer>
          {([theme]) => {
            const className = classNames({
              [styles.darkTheme]: theme === THEMES.DARK,
              [styles.lightTheme]: theme === THEMES.LIGHT,
            });

            return (
              <div className={className}>
                <h4>
                  {user.firstName} {user.lastName}
                </h4>
              </div>
            );
          }}
        </ThemeContext.Consumer>
      )}
    </UserContext.Consumer>
  );
}

export default UserData;
