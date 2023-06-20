import React, { useContext } from 'react';
import classNames from 'classnames';
import CONSTANTS from '../../constants';
import styles from './Sidebar.module.scss';
import { UserContext, ThemeContext } from 'contexts';
import { withTheme, withUser } from '../../HOCs';

const { THEMES } = CONSTANTS;

function Sidebar(props) {
  const user = useContext(UserContext);
  const [theme, switchTheme] = useContext(ThemeContext);

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

export default Sidebar;
