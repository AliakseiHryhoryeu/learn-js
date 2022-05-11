import React from 'react'
import { createRoot } from 'react-dom/client'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import './index.css'
import App from './components/App'

const theme = createTheme({
    palette: {
        primary: {
            main: '#61dafb'
        },
        secondary: {
            main: '#00ff00'
        }
    }
});


const container = document.getElementById('root')
const root = createRoot(container)
root.render(
    <ThemeProvider theme={theme} >
        <App />
    </ThemeProvider>,
)