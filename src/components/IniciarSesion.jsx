import React, {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLink as RouterLink} from "react-router-dom";
import Evaluacion from './Evaluacion';
const theme = createTheme();

const IniciarSesion = () => {
    const [leyendaUsuario, setLeyendaUsuario] = useState("");
    const [errorUsuario, setErrorUsuario] = useState(true);
    const [leyendaPassword, setLeyendaPassword] = useState("");
    const [errorPassword, setErrorPassword] = useState(true);

    function iniciarSesion(e){
        e.preventDefault();
        var txtusu = document.getElementById("txtusu").value;
        var txtpas = document.getElementById("txtpas").value;
        if(true){
            if(txtusu.length===0 || /^\s+$/.test(txtusu)){
                setErrorUsuario(true);
                setLeyendaUsuario("Campo obligatorio");
            }
            else if (txtusu==="rodrigo"){
                setErrorUsuario(false);
                setLeyendaUsuario("");
            }else{
                document.getElementById("txtusu").value = "";
            }
        }
        if(true){
            if(txtpas.length===0 || /^\s+$/.test(txtpas)){
                setErrorPassword(true);
                setLeyendaPassword("Campo obligatorio");
            }
            else if (txtpas==="123"){
                setErrorPassword(false);
                setLeyendaPassword("");
            }
            else{
                setErrorPassword(true);
                setLeyendaPassword("Contraseña Incorrecta");
                document.getElementById("txtpas").value = "";
            }  
        }
        if(errorUsuario && errorPassword){
            document.getElementById("txtusu").focus(); 
        }
    }
    if(!errorUsuario && !errorPassword){
        return <Evaluacion/>
    }
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs" id="form_login">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Iniciar Sesión
                </Typography>
                <Box component="form" sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="txtusu"
                        label="Usuario"
                        name="usuario"
                        autoComplete="usuario"
                        autoFocus
                        error={errorUsuario}
                        helperText={leyendaUsuario}                     
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Contraseña"
                        type="password"
                        id="txtpas"
                        autoComplete="current-password"
                        error={errorPassword}
                        helperText={leyendaPassword}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        component={RouterLink}
                        to='/perfil/evaluacion'
                        value="Login" 
                        onClick={ iniciarSesion }
                    >
                        Entrar
                    </Button>
                    <Grid container>
                    <Grid item xs>
                        <Link href="e" variant="body2">
                            Olvidaste tu contraseña?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="e" variant="body2">
                            {"No tienes una cuenta?"}
                        </Link>
                    </Grid>
                    </Grid>
                </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
};

export default IniciarSesion;