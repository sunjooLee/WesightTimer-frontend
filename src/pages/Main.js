import React from 'react'
import Nav from '../components/Nav';
import styled, {ThemeProvider} from 'styled-components';
import theme from '../styles/theme';


const Main = () => {
    return (
        <ThemeProvider theme={theme}>
        <Nav />
        <div>
            Wesight Timer Main
        </div>
        </ThemeProvider>
    )
}


export default Main;
