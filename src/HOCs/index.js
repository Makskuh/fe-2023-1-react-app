import { ThemeContext, UserContext } from '../contexts';

export const withTheme = (Component) => (props) =>
  (
    <ThemeContext.Consumer>
      {([theme, switchTheme]) => (
        <Component theme={theme} switchTheme={switchTheme} {...props} />
      )}
    </ThemeContext.Consumer>
  );

export function withUser(Component) {
  const ComponentWithUser = (props) => (
    <UserContext.Consumer>
      {(user) => <Component user={user} {...props} />}
    </UserContext.Consumer>
  );

  return ComponentWithUser;
}
