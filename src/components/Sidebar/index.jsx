import React from 'react';
import classNames from 'classnames';
import { UserContext, ThemeContext } from '../../contexts';
import CONSTANTS from '../../constants';
import styles from './Sidebar.module.scss';

const { THEMES } = CONSTANTS;

function Sidebar() {
  return (
    <UserContext.Consumer>
      {(user) => (
        <ThemeContext.Consumer>
          {([theme, switchTheme]) => {
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
          }}
        </ThemeContext.Consumer>
      )}
    </UserContext.Consumer>
  );
}
export default Sidebar;
