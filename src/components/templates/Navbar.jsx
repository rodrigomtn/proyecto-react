import React, {useState} from 'react';
import {
    AppBar, 
    Box, 
    Icon, 
    Toolbar, 
    Typography, 
    Tabs,
    Tab as MaterialLink,
    useTheme,
    useMediaQuery,
} from '@mui/material/';
import DrawerComp from './DrawerComp';
import { NavLink as RouterLink } from "react-router-dom";

const Navbar = () => {
    const [values, setValues] = useState(0)
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Box >
            <AppBar position="fixed" color="primary">
                <Toolbar>
                    <Icon edge="start" color="inherit" aria-label="menu">home</Icon>                
                    {
                        isMatch ? ( <>
                                <Typography variant="h6">
                                    Your Room
                                </Typography>
                                <DrawerComp/>
                            </>     
                        ) : (<>
                                <Typography variant="h6">
                                    Your Room
                                </Typography>
                
                                <Tabs 
                                    sx={{marginLeft: 'auto'}} 
                                    textColor='inherit'
                                    value={values}
                                    onChange={(e, values) => setValues(values)}
                                    indicatorColor='secondary'
                                >
                                    <MaterialLink 
                                        component={RouterLink} 
                                        to='/' 
                                        color="inherit" 
                                        sx={{marginLeft: 'auto'}} 
                                        underline='none'
                                        label='Inicio'
                                    />
                                    <MaterialLink 
                                        component={RouterLink} 
                                        to='/cuartos' 
                                        color="inherit" 
                                        sx={{marginLeft: 'auto'}} 
                                        underline='none'
                                        label='cuartos'
                                    />
                                    <MaterialLink 
                                        component={RouterLink} 
                                        to='/zonas' 
                                        color="inherit" 
                                        sx={{marginLeft: 'auto'}} 
                                        underline='none'
                                        label='Zonas'
                                    />
                                    <MaterialLink 
                                        component={RouterLink} 
                                        to='/acercade' 
                                        color="inherit" 
                                        sx={{marginLeft: 'auto'}} 
                                        underline='none'
                                        label='Acerca de'
                                    />
                                    <MaterialLink 
                                        component={RouterLink} 
                                        to='/registrarme' 
                                        color="inherit" 
                                        sx={{marginLeft: 'auto'}} 
                                        underline='none'
                                        label='Registrarme'
                                    />
                                    <MaterialLink 
                                        component={RouterLink}
                                        to='/iniciarsesion' 
                                        color="inherit" 
                                        sx={{marginLeft: 'auto'}} 
                                        underline='none'
                                        label='Iniciar Sesion'
                                    />                                     
                                </Tabs>
                            </>
                        )
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
}
 
export default Navbar;