import React from 'react';
import { ThemeProvider } from 'styled-components';
import Theme from './theme/Theme';
import Quote from './components/Question';


export default function App() {
    return (
        <ThemeProvider theme={Theme}>
            <div className="page__wrapper">
                <Quote />
                <footer className="footer__sign">created by <u><b>Jose Alves</b></u> - devChallenges.io</footer>
            </div>
        </ThemeProvider>
    )
}