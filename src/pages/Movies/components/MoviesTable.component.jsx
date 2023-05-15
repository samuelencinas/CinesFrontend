import {Box, Collapse, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Paper, IconButton} from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import axios from 'axios';
import { useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import * as React from 'react';


export const MoviesTable = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios({
        url: 'http://localhost:8080/movies',
        method: 'POST',
    })
    .then(res => {
        setMovies(res.data);
    })
    .catch(err => console.log(err))
}, []);

  <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
  {movies.map((item, index) => (
    <ImageListItem key={item.img}>
      <img
        src={`../assets/img/${index}.png`}
        alt={item.name}
        loading="lazy"
      />
    </ImageListItem>
  ))}
</ImageList>
}
export default MoviesTable;