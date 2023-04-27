import {Paper, Typography} from '@mui/material';
import {Header} from '../../components/Header.component';
import { useEffect } from 'react';
import CinemasTable from '../../components/CinemasTable.component';
export const CinemasPage = () => {
    useEffect(() => {
      document.title = "CINEMAS";
    }, []);
    return (
      <><Header /><Paper>
        <Typography>Cines</Typography>
        <CinemasTable/>
      </Paper></>
    );
  };