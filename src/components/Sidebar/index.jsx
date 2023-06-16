import React from 'react';
import classNames from 'classnames';
import { UserContext, ThemeContext } from '../../contexts';
import CONSTANTS from '../../constants';
import styles from './Sidebar.module.scss';

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

// function SidebarWithUser(props) {
//   return (
//     <UserContext.Consumer>
//       {(user) => <Sidebar user={user} {...props} />}
//     </UserContext.Consumer>
//   );
// }

// function SidebarWithUserAndTheme(props) {
//   return (
//     <ThemeContext.Consumer>
//       {([theme, switchTheme]) => (
//         <SidebarWithUser theme={theme} switchTheme={switchTheme} />
//       )}
//     </ThemeContext.Consumer>
//   );
// }

function withUser(Component) {
  const ComponentWithUser = (props) => (
    <UserContext.Consumer>
      {(user) => <Component user={user} {...props} />}
    </UserContext.Consumer>
  );

  return ComponentWithUser;
}

const SidebarWithUser = withUser(Sidebar);

const withTheme = (Component) => (props) =>
  (
    <ThemeContext.Consumer>
      {([theme, switchTheme]) => (
        <Component theme={theme} switchTheme={switchTheme} {...props} />
      )}
    </ThemeContext.Consumer>
  );

const SidebarWithUserAndTheme = withTheme(SidebarWithUser);

export default SidebarWithUserAndTheme;
