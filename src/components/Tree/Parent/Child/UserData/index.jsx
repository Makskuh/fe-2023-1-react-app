import React from 'react';
import classNames from 'classnames';
import CONSTANTS from '../../../../../constants';
import styles from './UserData.module.scss';
import { withTheme, withUser } from '../../../../../HOCs';

const { THEMES } = CONSTANTS;

function UserData(props) {
  const { user, theme } = props;

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
}


export default withUser(withTheme(UserData));
