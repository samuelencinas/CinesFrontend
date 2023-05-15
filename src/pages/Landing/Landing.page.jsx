import {useEffect} from 'react';
import * as React from 'react';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LoginIcon from '@mui/icons-material/Login';
import {AppBar, Paper, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem} from '@mui/material';
import { LoginDialog } from '../../components/LoginDialog.component';
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu'

export const LandingPage = () => {
    useEffect(() => {
      document.title = "No has iniciado sesión";
    }, []);
    return (
        <Paper>
            <Typography>No has iniciado sesión</Typography>
            <LoginDialog/>

        </Paper>
    );
  };