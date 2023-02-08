import React from 'react';
import {
    Box,
    Grid,
    CardMedia,
    CardContent,
    Typography,
} from '@mui/material'
const AcercaDe = () => {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} columns={16}>
                    <Grid item xs={8}>
                        <br/>
                        <CardMedia
                            component="img"
                            height="240"
                            image={require('../assets/renta.jpg')}
                            alt="Cuarto Aviacion Civil"
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                ¿Quienes somos?
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Nosotros somos una empresa con el objetivo de facilitar la busqueda de curtos para rentar y tambien ayudar a personas que deseen promocionarce a encontrar un plataforma en la que tendran mayor alcance.<br/>
                                A travez de nuestro sitio web o aplicacion podras tener acceso a distintas funcionaldades que podran satisfacer tus necesidades si lo que desea es encontrar un cuarto que se ajuste a lo que deseas.
                            </Typography>
                        </CardContent>
                    </Grid>
                    <Grid item xs={16} sx={{mt: 2}}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Vision
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Convertirse en el mejor servicio para promocion y busqueda de espacios de renta de Huejutla de Reyes Hidalgo. Haciendo mas accesible para los arrendadores el promocionarse y a los arrendados el encontrar espacios con mayor facilidad.    
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div">
                                Misión
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Crear una plataforma de rentas no solo para los que buscan si no tambien para lo que desea ofrecer este servicio. Mientras trabajamos para lograr este objetivo, nos enfocamos en construir para el futuro, impulsar un fuerte crecimiento sostenido y crear nuevos negocios que impulsarán el éxito a largo plazo.   
                            </Typography>
                        </CardContent>
                    </Grid>
                </Grid>              
            </Box>
        </div>
    );
};

export default AcercaDe;