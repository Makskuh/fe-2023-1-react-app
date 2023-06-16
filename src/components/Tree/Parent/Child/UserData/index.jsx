import React from 'react';
import classNames from 'classnames';
import { UserContext, ThemeContext } from '../../../../../contexts';
import CONSTANTS from '../../../../../constants';
import styles from './UserData.module.scss';

const { THEMES } = CONSTANTS;

function UserData(props) {
  const { user } = props;
  return (
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
  );
}

function withUser(Component) {
  const ComponentWithUser = (props) => (
    <UserContext.Consumer>
      {(user) => <Component user={user} {...props} />}
    </UserContext.Consumer>
  );

  return ComponentWithUser;
}

export default withUser(UserData);
