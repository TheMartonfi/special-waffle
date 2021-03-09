import React from "react";
import { createStyled } from "styletron-react";
import { driver, getInitialStyle } from "styletron-standard";

const THEME = {};

const { Provider, Consumer } = React.createContext(null);

const ThemeProvider = ({ children }) => (
  <Provider value={THEME}>{children}</Provider>
);

const wrapper = (StyledComponent: any) =>
  function withThemeHOC(props: any) {
    return (
      <Consumer>
        {(theme) => <StyledComponent {...props} $theme={theme} />}
      </Consumer>
    );
  };

const styled = createStyled({ wrapper, getInitialStyle, driver });

export { ThemeProvider, styled };
