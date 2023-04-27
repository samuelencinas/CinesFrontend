import {Paper} from '@mui/material';
import {Header} from './Header.component';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CinemasPage } from '../pages/Cinemas/Cinemas.page';
import { LandingPage } from '../pages/Landing/Landing.page';

const App = () => {
    return <><Router>
        <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/cinemas" element={<CinemasPage />} />
        </Routes>
    </Router></>
}
export default App;