import React from 'react';
import { ThemeProvider } from 'styled-components';


export default function App() {
    return (
        <ThemeProvider>
            <div className="page__wrapper">
                <h1>Hello mate!</h1>
            </div>
        </ThemeProvider>
    )
}