import React from 'react';
import { 
    styled,
    Box,
    Paper,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button, 
    CardActionArea, 
    CardActions, 
    FormControl, 
    InputLabel, 
    MenuItem, 
    Select, 
    TextField, 
    ListItem, 
    ListItemButton, 
    ListItemIcon,
    ListItemText,
    Checkbox
} from '@mui/material';
import { NavLink as RouterLink } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
}));

const Zonas = [
    {
        id: 1,
        zona: 'Aviacion Civil',
    },
    {
        id: 2,
        zona: 'Parque poblamiento',
    },
    {
        id: 3,
        zona: 'Centro',
    }
]

const Inmueble = [
    {
        id: 1,
        tipo: 'Piso',
    },
    {
        id: 2,
        tipo: 'Cuarto',
    }
]

const Compas = [
    {
        id: 1,
        compania: 'Individual',
    },
    {
        id: 2,
        compania: 'Compartido',
    }
]

const Cuartos = () => {  
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} columns={16}>
                    <Grid xs={4} sx={{ mt: 7, maxWidth: 300 }}>
                        <Item>
                            <h6>Encuentra tu habitacion ideal</h6>
                            <Box my={2}>
                                <Typography component="p" sx={{mt: 2, display: 'flex'}}>
                                    Ubicación
                                </Typography>    
                                <Card>
                                    <FormControl 
                                        sx={{ width: '100%' }}
                                        variant="filled"
                                    >
                                        <InputLabel id="demo-simple-select-label">Zonas/Localidad</InputLabel>
                                        <Select
                                            name="rol"
                                            fullWidth
                                            label="Zonas/Localidad"
                                        >
                                            <MenuItem>Seleccione</MenuItem>
                                            {Zonas && Zonas.map((z, index) =>(
                                                <MenuItem id={z.id} value={z.zona}>{z.zona}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Card>
                                <Typography component="p" sx={{mt: 2, display: 'flex'}}>
                                    Tipo de Inmueble
                                </Typography> 
                                <Card sx={{mt: 1}}>
                                    <FormControl 
                                        sx={{ width: '100%' }} 
                                        variant="filled"
                                    >
                                        <InputLabel id="demo-simple-select-label">Tipo de Inmueble</InputLabel>
                                        <Select
                                            name="rol"
                                            fullWidth
                                            label="Tipo de Inmueble"
                                        >
                                        <MenuItem>Seleccione</MenuItem>
                                        {Inmueble && Inmueble.map((i, index) =>(
                                            <MenuItem id={i.id} value={i.tipo}>{i.tipo}</MenuItem>
                                        ))}
                                        </Select>
                                    </FormControl>
                                </Card>
                                <Typography component="p" sx={{mt: 2, display: 'flex'}}>
                                    Compania
                                </Typography>                                
                                <Card sx={{mt: 1}}>
                                    <FormControl 
                                        sx={{ width: '100%' }}
                                        variant="filled"
                                    >
                                        <InputLabel id="demo-simple-select-label">Compañeros</InputLabel>
                                        <Select
                                            name="rol"
                                            fullWidth
                                            label="Compañeros"
                                        >
                                            <MenuItem>Seleccione</MenuItem>
                                            {Compas && Compas.map((c, index) =>(
                                                <MenuItem id={c.id} value={c.compania}>{c.compania}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Card>
                                <Typography component="p" sx={{mt: 2, display: 'flex'}}>
                                    Alquiler por Mes "$"
                                </Typography>                             
                                <TextField label="Minimo" sx={{display: 'flex',  mt: 1}} variant="filled"></TextField>
                                <TextField label="Maximo" sx={{display: 'flex', mt: 1}} variant="filled"></TextField>
                                <Typography component="p" sx={{mt: 2, display: 'flex'}}>
                                    Servicios Disponibles
                                </Typography> 
                                <ListItem>
                                    <ListItemButton role={undefined} dense>
                                        <ListItemIcon>
                                            <Checkbox
                                                edge="start"
                                                disableRipple
                                            />
                                        </ListItemIcon>
                                        <ListItemText primary="Agua"/>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem>
                                    <ListItemButton role={undefined} dense>
                                        <ListItemIcon>
                                            <Checkbox
                                                edge="start"
                                                disableRipple
                                            />
                                        </ListItemIcon>
                                        <ListItemText primary="Electricidad"/>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem>
                                    <ListItemButton role={undefined} dense>
                                        <ListItemIcon>
                                            <Checkbox
                                                edge="start"
                                                disableRipple
                                            />
                                        </ListItemIcon>
                                        <ListItemText primary="Internet"/>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem>
                                    <ListItemButton role={undefined} dense>
                                        <ListItemIcon>
                                            <Checkbox
                                                edge="start"
                                                disableRipple
                                            />
                                        </ListItemIcon>
                                        <ListItemText primary="Aire Acondicionado"/>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem>
                                    <ListItemButton role={undefined} dense>
                                        <ListItemIcon>
                                            <Checkbox
                                                edge="start"
                                                disableRipple
                                            />
                                        </ListItemIcon>
                                        <ListItemText primary="Limpieza"/>
                                    </ListItemButton>
                                </ListItem>
                            </Box>
                        </Item>
                    </Grid>
                    
                    <Grid item xs={12}>
                        <Typography gutterBottom variant="h6" component="div">
                            Publicaciones Recientes
                        </Typography>
                        <Card sx={{ maxWidth: 900}}>
                            <CardActionArea sx={{ display: 'flex' }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={require('../assets/cuarto1.jpg')}
                                    alt="Cuarto Aviacion Civil"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">
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
                                <Button size="small" variant="contained" 
                                    component={RouterLink}
                                    to='/detallecuarto'>
                                    Ver habitación
                                </Button>
                            </CardActions>                         
                        </Card>

                        <Card sx={{ maxWidth: 900, mt: 2  }}>
                            <CardActionArea sx={{ display: 'flex' }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={require('../assets/cuarto2.jpg')}
                                    alt="Cuarto Aviacion Civil"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">
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
                                <Button size="small" variant="contained">
                                    Ver habitación
                                </Button>
                            </CardActions>
                        </Card>

                        <Card sx={{ maxWidth: 900, mt: 2 }}>
                            <CardActionArea sx={{ display: 'flex' }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={require('../assets/cuarto3.jpg')}
                                    alt="Cuarto Aviacion Civil"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">
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
                                <Button size="small" variant="contained">
                                    Ver habitación
                                </Button>
                            </CardActions>
                        </Card> 

                        <Card sx={{ maxWidth: 900, mt: 2 }}>
                            <CardActionArea sx={{ display: 'flex' }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={require('../assets/cuarto5.jpg')}
                                    alt="Cuarto Aviacion Civil"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">
                                        Parque Poblamiento
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
                                <Button size="small" variant="contained">
                                    Ver habitación
                                </Button>
                            </CardActions>
                        </Card>                                                                         
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default Cuartos;