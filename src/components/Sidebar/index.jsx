import React from 'react';
import classNames from 'classnames';
import CONSTANTS from '../../constants';
import styles from './Sidebar.module.scss';
import { withTheme, withUser } from '../../HOCs';

const { THEMES } = CONSTANTS;

function Sidebar(props) {
  const { user, theme, switchTheme } = props;

  const className = classNames(styles.container, {
    [styles.darkTheme]: theme === THEMES.DARK,
    [styles.lightTheme]: theme === THEMES.LIGHT,
  });

  const handleThemeChange = (e) => {
    const {
      target: { value },
    } = e;

    switchTheme(value);
  };

  return (
    <div className={className}>
      <h1>{JSON.stringify(user)}</h1>
      <select value={theme} onChange={handleThemeChange}>
        <option value={THEMES.DARK}>Dark theme</option>
        <option value={THEMES.LIGHT}>Light theme</option>
      </select>
    </div>
  );
}

const SidebarWithUser = withUser(Sidebar);
const SidebarWithUserAndTheme = withTheme(SidebarWithUser);

export default SidebarWithUserAndTheme;
