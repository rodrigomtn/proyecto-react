import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const Titulo = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
}));

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
}));

const Zonas = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={8}>
                <Grid 
                    item
                    xs={12} 
                >
                    <Titulo elevation={0}><h3>Zona de Recidencias</h3></Titulo>                    
                </Grid>
                <Grid item xs={12}>
                    <Item elevation={0}>
                        <Grid container spacing={5}>
                            <Grid item xs={4}>
                                <Item elevation={0}>
                                    <Card sx={{ maxWidth: 345 }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image={require('../assets/cuarto1.jpg')}
                                                alt="Cuarto Aviacion Civil"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    Aviacion Civil
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    hace 8 horas<br/>
                                                    Pequeño departamento ideal para estudiantes, cuenta con todos los servicios: Agua, luz,
                                                    internet.
                                                    Excelente ubicacion cerca del COBAEH<br/>
                                                    3 personas chicos/as
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <Button size="small" color="primary">
                                                Leer Más
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Item>
                            </Grid>
                            <Grid item xs={4}>
                                <Item elevation={0}>
                                    <Card sx={{ maxWidth: 345}}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image={require('../assets/cuarto2.jpg')}
                                                alt="Cuarto Parque poblamiento"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    Parque poblamiento
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    hace 8 horas<br/>
                                                    Pequeño departamento ideal para estudiantes, cuenta con todos los servicios: Agua, luz,
                                                    internet.
                                                    Excelente ubicacion cerca del COBAEH<br/>
                                                    3 personas chicos/as
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <Button size="small" color="primary">
                                                Leer Más
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Item>
                            </Grid>
                            <Grid item xs={4}>
                                <Item elevation={0}>
                                    <Card sx={{ maxWidth: 345 }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image={require('../assets/cuarto3.jpg')}
                                                alt="Cuarto Centro"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    Centro
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    hace 8 horas<br/>
                                                    Pequeño departamento ideal para estudiantes, cuenta con todos los servicios: Agua, luz,
                                                    internet.
                                                    Excelente ubicacion cerca del COBAEH<br/>
                                                    3 personas chicos/as
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <Button size="small" color="primary">
                                                Leer Más
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Item>
                            </Grid>
                        </Grid>                      
                    </Item>

                    <Item elevation={0}>
                        <Grid container spacing={5}>
                            <Grid item xs={4}>
                                <Item elevation={0}>
                                    <Card sx={{ maxWidth: 345 }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image={require('../assets/cuarto1.jpg')}
                                                alt="Cuarto Aviacion Civil"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    Aviacion Civil
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    hace 8 horas<br/>
                                                    Pequeño departamento ideal para estudiantes, cuenta con todos los servicios: Agua, luz,
                                                    internet.
                                                    Excelente ubicacion cerca del COBAEH<br/>
                                                    3 personas chicos/as
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <Button size="small" color="primary">
                                                Leer Más
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Item>
                            </Grid>
                            <Grid item xs={4}>
                                <Item elevation={0}>
                                    <Card sx={{ maxWidth: 345 }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image={require('../assets/cuarto5.jpg')}
                                                alt="Cuarto Parque poblamiento"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    Parque poblamiento
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    hace 8 horas<br/>
                                                    Pequeño departamento ideal para estudiantes, cuenta con todos los servicios: Agua, luz,
                                                    internet.
                                                    Excelente ubicacion cerca del COBAEH<br/>
                                                    3 personas chicos/as
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <Button size="small" color="primary">
                                                Leer Más
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Item>
                            </Grid>
                            <Grid item xs={4}>
                                <Item elevation={0}>
                                    <Card sx={{ maxWidth: 345 }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image={require('../assets/cuarto6.jpg')}
                                                alt="Cuarto Centro"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    Centro
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    hace 8 horas<br/>
                                                    Pequeño departamento ideal para estudiantes, cuenta con todos los servicios: Agua, luz,
                                                    internet.
                                                    Excelente ubicacion cerca del COBAEH<br/>
                                                    3 personas chicos/as
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <Button size="small" color="primary">
                                                Leer Más
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Item>
                            </Grid>
                        </Grid>                      
                    </Item>
                </Grid>             
            </Grid>
        </Box>
    );
};

export default Zonas;