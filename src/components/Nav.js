import React from 'react'
import styled, {ThemeProvider} from 'styled-components';
import theme from '../styles/theme';

const Nav = () => {
    return (
        <ThemeProvider theme={theme}>
        <div>
            Wesight Timer Nav
        </div>
        </ThemeProvider>
    )
}


export default Nav;
