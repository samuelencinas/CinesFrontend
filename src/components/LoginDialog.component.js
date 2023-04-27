import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import {useState, useEffect} from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

export const LoginDialog = () => {
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userError, setUserError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const navigate = useNavigate();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const performLogin = (event) => {
    event.preventDefault();
    setUserError(false);
    setPasswordError(false);

    if (username === '') setUserError(true);
    if (password === '') setPasswordError(true);

    if (!!username && !!password) {
        axios({
            url: 'http://localhost:8080/login',
            method: 'POST',
            data: {
                username: username,
                password: password,
            }
        }).then(response => {
            if (response.data.status === 'OK') navigate('/cinemas');
        })
    }
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Iniciar sesión
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Iniciar sesión</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            onChange={e => setUsername(e.target.value)}
            margin="dense"
            id="username"
            label="Usuario"
            fullWidth
            variant="standard"
          />
                    <TextField
            autoFocus
            onChange={e => setPassword(e.target.value)}
            margin="dense"
            id="password"
            label="Contraseña"
            type="password"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={performLogin}>Iniciar sesión</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}