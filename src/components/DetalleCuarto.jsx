import React from 'react'
import {
    Box,
    Grid,
    Typography,
    Button,
    CardMedia,
    CardActionArea,
} from '@mui/material';
import { Bed, Person, AttachMoney, WhatsApp, Room, ArrowBack } from '@mui/icons-material';
import { NavLink as RouterLink } from 'react-router-dom';

const DetalleCuarto = () => {
  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} columns={16} alignItems='center' justifyContent= {'center'}>
                <Grid item xs={14}>
                    <Box textAlign='left' paddingTop={2}>
                        <Button
                            sx={{color:'black'}}
                            startIcon={<ArrowBack/>}
                            component={RouterLink}
                            to='/cuartos'
                        >
                            Regresar
                        </Button>
                    </Box>
                    <Typography gutterBottom variant="h6" component="div" sx={{textAlign: 'center'}}>
                        Detalles del cuarto
                    </Typography>

                    <Box sx={{display: 'flex', justifyContent: 'flex-start', mt: 1, p: 1}}>
                        <Box sx={{ minWidth: 60, maxWidth: 100, p:1, display: 'flex', 
                            alignSelf: 'auto',
                            justifyContent: 'flex-start', alignItems: 'center' }}
                        >
                            <Box>
                                <CardActionArea sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <CardMedia
                                        component="img"
                                        height="60"
                                        sx={{ width: 60, display: 'block', alignSelf: 'auto', mt: 1  }}
                                        image={require('../assets/imagen1.jpg')}
                                        alt="imagen1"
                                    />
                                </CardActionArea>
                                <CardActionArea sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <CardMedia
                                        component="img"
                                        height="60"
                                        sx={{ width: 60, display: 'block', alignSelf: 'auto', mt:1  }}
                                        image={require('../assets/imagen2.jpg')}
                                        alt="imagen1"
                                    />
                                </CardActionArea>
                                <CardActionArea sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <CardMedia
                                        component="img"
                                        height="60"
                                        sx={{ width: 60, display: 'block', alignSelf: 'auto', mt:1  }}
                                        image={require('../assets/imagen3.jpg')}
                                        alt="imagen1"
                                    />
                                </CardActionArea>
                                <CardActionArea sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <CardMedia
                                        component="img"
                                        height="60"
                                        sx={{ width: 60, display: 'block', alignSelf: 'auto', mt:1  }}
                                        image={require('../assets/imagen4.jpg')}
                                        alt="imagen1"
                                    />
                                </CardActionArea>
                                <CardActionArea sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <CardMedia
                                        component="img"
                                        height="60"
                                        sx={{ width: 60, display: 'block', alignSelf: 'auto', mt:1  }}
                                        image={require('../assets/imagen5.jpg')}
                                        alt="imagen1"
                                    />
                                </CardActionArea>
                            </Box>
                        </Box>
                        <Box sx={{ minWidth: 330, p:1, display: 'flex', 
                            alignSelf: 'auto', marginLeft: 'auto',
                            justifyContent: 'flex-start', alignItems: 'center' }}>
                            <CardMedia
                                component="img"
                                height="300"
                                sx={{ width: 410, display: 'block', alignSelf: 'auto'  }}
                                image={require('../assets/imagen1.jpg')}
                                alt="Foto 1"
                            />  
                        </Box>
                        <Box sx={{ minWidth: 330, p:1, display: 'block', alignSelf: 'auto', marginLeft: 'auto'}} >
                            <Typography gutterBottom variant="h6" component="div" sx={{ textAlign: 'center'}}>
                                Cuarto en Renta
                            </Typography>
                            <Typography variant="body2" color="initial" sx={{ textAlign: 'center', mb: 2, color: '#747474'}}>
                                Detalles generales
                            </Typography>
                            <Typography variant="body2" color="initial" sx={{ml: 2}}>
                                Se renta cuarto de buen espacio <br /> <br />
                                Publicado: Hace 8 horas <br /> <br />
                                <AttachMoney/> 2,000/ Mes <br /> <br />
                                <Bed/> Recámara(s): 1 <br /> <br />
                                <Person/> Arrendador(a): Particular <br /> <br />
                            </Typography>
                            <Box sx={{display: 'flex', justifyContent: 'center', mb: 3, textAlign: 'flex-end'}}>
                                <Button size='medium' variant="contained" sx={{background: 'green'}}>
                                    Solicitar Cita
                                </Button>
                                <Button size='medium' variant="contained" sx={{background: 'green', ml: 'auto'}} startIcon={<WhatsApp/>}>
                                    WhatsApp
                                </Button>
                            </Box>
                            <Grid xs={8} sx={{ mt: 2, maxWidth: 300, textAlign: 'center' }}>
                                <RouterLink to="#">
                                    Reglamento
                                </RouterLink>           
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={14}>
                <Box sx={{display: 'flex', justifyContent: 'flex-start', p: 2}}>
                        <Box sx={{ minWidth: 330, p:1, display: 'flex', border: 1, 
                            alignSelf: 'auto', flexDirection: 'column',
                            justifyContent: 'flex-start', alignItems: 'center' }}>
                            <Typography gutterBottom variant="h6" component="div" sx={{ textAlign: 'center'}}>
                                <Room/>Ubicación
                            </Typography>
                            <Typography gutterBottom variant="body" color='initial'>
                                Colonia: Charco azul municiipio de Huejutla de Reyes Hgo. <br />
                                Calle: Vicente Guerrero <br />
                                Frente a la universidad, 
                                a un lado de la purificadora
                            </Typography>
                            <CardMedia
                                component="img"
                                height="300"
                                sx={{ width: 500, display: 'block', alignSelf: 'auto'  }}
                                image={require('../assets/ubicacion1.png')}
                                alt="Foto 1"
                            />  
                        </Box>
                        <Box sx={{ maxWidth: 330, p:1, display: 'block', height: 300, border: 1,alignSelf: 'auto', marginLeft: 'auto'}} 
                            height={'auto'}>
                            <Typography gutterBottom variant="h6" component="div" sx={{ textAlign: 'center'}}>
                                Descripcion
                            </Typography>
                            <Typography variant="body2" color="initial" sx={{ml: 2}}>
                                Lorem ipsum dolor sit amet consectetur 
                                adipisicing elit. Veniam amet eos officiis nulla 
                                labore voluptates, quos a quod provident ullam sint <br />
                                illo cumque ipsum fuga. Tenetur tempora libero sed quod!
                                Lorem ipsum dolor sit amet consectetur 
                                adipisicing elit. Veniam amet eos officiis nulla 
                                labore voluptates, quos a quod provident ullam sint 
                                illo cumque ipsum fuga. Tenetur tempora libero sed quod!
                            </Typography>
                            
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    </div>
  )
}

export default DetalleCuarto