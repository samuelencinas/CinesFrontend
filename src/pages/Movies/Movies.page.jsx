import {Paper, Typography} from '@mui/material';
import {Header} from '../../components/Header.component';
import { useEffect } from 'react';
import CinemasTable from './components/MoviesTable.component';
export const CinemasPage = () => {
    useEffect(() => {
      document.title = "CINEMAS";
    }, []);
    return (
      <Paper>
        <Typography variant="h1" color="primary">Cines</Typography>
        <CinemasTable/>
      </Paper>
    );
  };