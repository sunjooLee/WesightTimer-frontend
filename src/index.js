import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import styled, {ThemeProvider} from 'styled-components';
import theme from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './store/reducers/setPlaylistTitle';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <ThemeProvider theme={theme}>
        <GlobalStyle />
          <Routes />
    </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
