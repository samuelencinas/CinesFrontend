import {Box, Collapse, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Paper, IconButton} from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import axios from 'axios';
import { useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import * as React from 'react';

export const Row = row => {
    const [open, setOpen] = useState(false);
    return (
        <React.Fragment>
          <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
            <TableCell>
              <IconButton
                aria-label="expand row"
                size="small"
                onClick={() => setOpen(!open)}
              >
                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </IconButton>
            </TableCell>
            <TableCell component="th" scope="row">
              {row.row.id}
            </TableCell>
            <TableCell align="right">{row.row.name}</TableCell>
            <TableCell align="right">{row.row.capacity}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <Box sx={{ margin: 1 }}>
                  <Typography variant="h6" gutterBottom component="div">
                    Cartelera
                  </Typography>
                  <Table size="small" aria-label="purchases">
                    <TableHead>
                      <TableRow>
                        <TableCell>Título</TableCell>
                        <TableCell>Reparto</TableCell>
                        <TableCell>Próxima sesión</TableCell>
                        <TableCell align="right">Comprar</TableCell>

                      </TableRow>
                    </TableHead>
                    <TableBody>
                    {!!row.row.catalog && row.row.catalog.length > 0 ? row.row.catalog.map((catalog) => (
                        <TableRow key={catalog.id}>
                          <TableCell component="th" scope="row">
                            {catalog.name}
                          </TableCell>
                          <TableCell>{catalog.actors}</TableCell>
                          <TableCell>{`${catalog.sessions[0].date} | ${catalog.sessions[0].start} - ${catalog.sessions[0].end}`}</TableCell>
                          <TableCell align="right"><IconButton color="primary" aria-label="upload picture" component="label">
  <ShoppingCartIcon/>
</IconButton></TableCell>
                        </TableRow>
                      )) : <h1>{'row=' +JSON.stringify(row)}</h1>}
                    </TableBody>
                  </Table>

                </Box>
              </Collapse>
            </TableCell>
          </TableRow>
        </React.Fragment>
      );
}

export const CinemasTable = () => {
    const [cinemas, setCinemas] = useState([{
        id: null,
        name: null,
        catalog: [{
            id: null,
            name: null,
            actors: null,
            sessions: [{
                date: null,
                start: null,
                end: null,
            }],
        }],
    }]);
    useEffect(() => {
        axios({
            url: 'http://localhost:8080/cinemas',
            method: 'POST',
            data: {
                withCatalog: true
            }
        })
        .then(res => {
            setCinemas(res.data);
        })
        .catch(err => console.log(err))
    }, []);

        
    return (cinemas.length > 0 && !!cinemas[0].id && 
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>ID</TableCell>
                        <TableCell align="right">Cine</TableCell>
                        <TableCell align="right">Aforo</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {cinemas.map((cinema) => (
                        <Row row={cinema} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
      );
}
export default CinemasTable;