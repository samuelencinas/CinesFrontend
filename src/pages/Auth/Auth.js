import React, { useEffect, useState } from 'react';
import logo from './../../logo.svg';
import './Home.css';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Button, Paper } from '@mui/material';
import axios from 'axios';

function Auth() {
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [data, setData] = useState(null);
    const register = () => {
      axios({
        method: "POST",
        data: {
          username: registerUsername,
          password: registerPassword,
        },
        withCredentials: true,
        url: "http://localhost:8080/register",
      }).then((res) => console.log(res));
    };
    const login = () => {
      axios({
        method: "POST",
        data: {
          username: loginUsername,
          password: loginPassword,
        },
        withCredentials: true,
        url: "http://localhost:8080/login",
      }).then((res) => console.log(res));
    };
    const getUser = () => {
      axios({
        method: "GET",
        withCredentials: true,
        url: "http://localhost:8080/user",
      }).then((res) => {
        setData(res.data);
        console.log(res.data);
      });
    };
    return (
      <div className="App">
        <div>
          <h1>Registrarse</h1>
          <input
            placeholder="username"
            onChange={(e) => setRegisterUsername(e.target.value)}
          />
          <input
            placeholder="password"
            onChange={(e) => setRegisterPassword(e.target.value)}
          />
          <button onClick={register}>Enviar</button>
        </div>
  
        <div>
          <h1>Iniciar sesión</h1>
          <input
            placeholder="username"
            onChange={(e) => setLoginUsername(e.target.value)}
          />
          <input
            placeholder="password"
            onChange={(e) => setLoginPassword(e.target.value)}
          />
          <button onClick={login}>Enviar</button>
        </div>
  
        <div>
          <h1>Obtener usuario</h1>
          <button onClick={getUser}>Submit</button>
          {data ? <h1>Bienvenido {data.username}</h1> : null}
        </div>
      </div>
    );
  }