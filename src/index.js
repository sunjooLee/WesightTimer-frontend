import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import styled, {ThemeProvider} from 'styled-components';
import theme from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <GlobalStyle />
          <Routes />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
