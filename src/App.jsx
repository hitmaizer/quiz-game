import React from 'react';
import { ThemeProvider } from 'styled-components';
import Theme from './theme/Theme';
import Quote from './components/Question';


export default function App() {
    return (
        <ThemeProvider theme={Theme}>
            <div className="page__wrapper">
                <Quote />
                
            </div>
        </ThemeProvider>
    )
}