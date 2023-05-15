import {CssBaseline, Paper} from '@mui/material';
import {Header} from './Header.component';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CinemasPage } from '../pages/Cinemas/Cinemas.page';
import { LandingPage } from '../pages/Landing/Landing.page';
import { createTheme, ThemeProvider } from "@mui/material/styles"; // ! Importadlo de @mui/material/styles
import useMediaQuery from '@mui/material/useMediaQuery';
import React from 'react';
import { orange } from '@mui/material/colors';


const App = () => {
    // Preferencia por el modo oscuro
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)'); // Leer el modo del sistema

    // Tema personalizado con color principal naranja
    const theme = React.useMemo(() => createTheme({
        palette: {
            mode: !!prefersDarkMode ? 'dark' : 'light',
            primary: {
                main: orange[500]
            }
        }
    }));
        
    return (
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Header/>
        <Router>
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route path="/cines" element={<CinemasPage />} />
            </Routes>
        </Router>
    </ThemeProvider>);
}
export default App;