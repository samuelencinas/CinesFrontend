import React, { useEffect } from 'react';
import logo from './../../logo.svg';
import './Home.css';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Button, Paper } from '@mui/material';
import axios from 'axios';

export const Home = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    const consultaAPI = async () => {
      await axios({
        url: 'http://localhost:3000/cines/',
        method: 'POST',
        data: {}
      }).then(respuesta => {
        setData(respuesta.data);
      });

    }
  });
  return (
    <Container maxWidth="sm" className="Home">
      <Paper>
        <img src={logo} className="Home-logo" alt="logo" />
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App + Material-UI
        </Typography>
        <Button variant="contained" color="primary">
          Primary Button
        </Button>
        <Button variant="contained" color="secondary">
          Secondary Button
        </Button>
      </Paper>
    </Container>
  );
}
export default Home;

