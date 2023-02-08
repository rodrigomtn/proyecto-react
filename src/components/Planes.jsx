import React from 'react';
import {
    Box,
    Grid,
    Typography,
    Button
} from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { NavLink as RouterLink } from 'react-router-dom';

const Planes = () => {  
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} columns={16} alignItems='center' justifyContent= {'center'}>
                    <Grid item xs={12}>
                        <Box textAlign='left' paddingTop={2}>
                            <Button
                                sx={{color:'black'}}
                                startIcon={<ArrowBack/>}
                                component={RouterLink}
                                to='/registrarme'
                            >
                                Regresar
                            </Button>
                        </Box>
                        <Typography gutterBottom variant="h6" component="div" sx={{textAlign: 'center'}}>
                            Planes Disponibles
                        </Typography>
                        <Box sx={{display: 'flex', justifyContent: 'flex-start', mt: 2, p:5}}>
                            <Box sx={{ minWidth: 330, p:1, display: 'flex', alignSelf: 'auto', flexDirection: 'column' ,border: 1}} >
                                <Typography gutterBottom variant="h6" component="div" sx={{textAlign: 'center'}}>
                                    Gratis
                                </Typography>
                                <Typography variant="body2" color="initial" sx={{ml: 2}}>
                                    Horario de atención limitado <br /> <br />
                                    Publicidad de cuartos <br /> <br />
                                    Administracion de cuartos
                                </Typography>
                                <Box sx={{display: 'flex', justifyContent: 'center', height: '46%',mb: 3, alignItems: 'flex-end'}}>
                                    <Button size='medium' variant="contained" sx={{display: 'block', alignSelf: 'auto'}}
                                    component={RouterLink} to='/perfil/miscuartos'>
                                        Seleccionar
                                    </Button>
                                </Box>           
                            </Box>
                            <Box sx={{ minWidth: 330, p:1, display: 'block', alignSelf: 'auto', marginLeft: 'auto',border: 1}} >
                                <Typography gutterBottom variant="h6" component="div" sx={{ textAlign: 'center'}}>
                                    Premium
                                </Typography>
                                <Typography variant="body2" color="initial" sx={{ml: 2}}>
                                    Horario de atención limitado 24/7 <br /> <br />
                                    Visibilidad en el carrusel inicial <br /> <br />
                                    Publicidad en redes <br /> <br />
                                    Mejor posicionamiento en las busquedas <br /> <br />
                                    Verificacion <br /> <br />
                                </Typography>
                                <Box sx={{display: 'flex', justifyContent: 'center', mb: 3, textAlign: 'flex-end'}}>
                                    <Button size='medium' variant="contained" component={RouterLink} to='/perfil/miscuartos'>
                                        Seleccionar
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default Planes;