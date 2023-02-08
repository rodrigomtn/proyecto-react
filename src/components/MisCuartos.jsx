import React from 'react';
import {
    Box,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button, 
    CardActionArea, 
    CardActions,
    IconButton,
} from '@mui/material';
import { CheckCircle, AddCircleOutline, Edit, Delete, AttachMoney, Description, Event } from '@mui/icons-material';
import { NavLink as RouterLink} from "react-router-dom";

const MisCuartos = () => {  
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} columns={16} alignItems='center' justifyContent= {'center'}>
                    <Grid item xs={12}>
                        <Typography gutterBottom variant="h6" component="div" textAlign={'center'}>
                            Mis Publicaciones
                        </Typography>
                        <Box textAlign='right'>
                            <Button
                                sx={{color:'black'}}
                                endIcon={<AddCircleOutline sx={{width: 35, height: 35}}/>}
                                component={RouterLink}
                                to='/perfil/miscuartos/agregarcuarto'
                            >
                                Agregar Publicacion
                            </Button>
                        </Box>
                        <Card sx={{ maxWidth: 850, mt:2, p: 1}}>
                            <CardActionArea sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    sx={{ width: 369, display: 'block', alignSelf: 'auto' }}
                                    image={require('../assets/cuarto1.jpg')}
                                    alt="Cuarto Individual"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">
                                        Cuarto Individual
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Ubicacion: Parque de poblamiento<br/>
                                        Precio: $1,800<br/>
                                        Estado: Ocupado &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Fecha de ocupacion: 06/09/2022 <br />
                                        Inquilino: Marianito Perez Juares &nbsp;&nbsp;&nbsp;&nbsp; Proximo pago: 06/11/2022
                                    </Typography>                                 
                                </CardContent>                             
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" variant="contained">
                                    Ver habitación
                                </Button>
                                <CheckCircle sx={{marginLeft:'auto', width: 35, height: 35, color: '#4caf50'}}/>
                            </CardActions>                         
                        </Card>
                        <Card sx={{ maxWidth: 850, mt: 2, p: 1 }}>
                            <CardActionArea sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    sx={{ width: 369, display: 'block', alignSelf: 'auto'  }}
                                    image={require('../assets/cuarto3.jpg')}
                                    alt="Cuarto Aviacion Civil"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">
                                        Cuarto Compartido
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Ubicacion: Parque de poblamiento<br/>
                                        Precio: $2,000<br/>
                                        Estado: Disponible &nbsp;&nbsp;&nbsp;&nbsp; Fecha de publicacion: 15/09/2022
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" variant="contained">
                                    Ver habitación
                                </Button>
                                <Box marginLeft={'auto'}>
                                    <IconButton aria-label="Editar" sx={{mr:1}}>
                                        <Edit sx={{width: 35, height: 35, color: '#1976d2'}}/>
                                    </IconButton>
                                    <IconButton aria-label="Eliminar" sx={{mr:1}}>
                                        <Delete sx={{width: 35, height: 35, color: '#d32f2f'}}/>
                                    </IconButton>
                                </Box>
                            </CardActions>
                        </Card>
                        <Box textAlign='right' paddingTop={2}>
                            <Button
                                sx={{color:'black'}}
                                endIcon={<AttachMoney sx={{width: 25, height: 25}}/>}
                                component={RouterLink}
                                to='/perfil/miscuartos/ingresos'
                            >
                                Ir a mis ingresos
                            </Button>
                        </Box>
                        <Box textAlign='right' paddingTop={2}>
                            <Button
                                sx={{color:'black', marginLeft: 'auto'}}
                                startIcon={<Description/>}
                                component={RouterLink}
                                to='/perfil/miscuartos/contrato'
                            >
                                Contrato
                            </Button>
                            <Button
                                sx={{color:'black', marginLeft: 2}}
                                startIcon={<Event/>}
                                component={RouterLink}
                                to='/perfil/miscuartos/citas'
                            >
                                Citas
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default MisCuartos;