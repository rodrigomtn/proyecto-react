import {
    Box,
    Grid,
    Card,
    CardMedia,
    Typography,
    Button, 
} from '@mui/material';
import { CheckCircle, ArrowBack, Cancel } from '@mui/icons-material';
import { NavLink as RouterLink} from "react-router-dom";

const Citas = () => {
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
                                to='/perfil/miscuartos'
                            >
                                Regresar
                            </Button>
                        </Box>
                        <Typography gutterBottom variant="h6" component="div" textAlign={'center'}>
                            Citas Pendientes
                        </Typography>
                        
                        <Card sx={{ maxWidth: 850, m:2, p:1, display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                <CardMedia
                                    component="img"
                                    height="120"
                                    sx={{ width: 120, display: 'block', alignSelf: 'auto' }}
                                    image={require('../assets/user3.png')}
                                    alt="Cuarto Individual"
                                />
                                <Box sx={{display: 'flex', width: 'auto' ,flexDirection: 'row', textAlign: 'center'}}>
                                    <Box sx={{display: 'block', m: 1}}>
                                        <Typography variant="body2" color="text.secondary">
                                            <b> Usuario:</b> <br/>  Jose Antonio Romero Lopez
                                        </Typography>
                                    </Box>
                                    <Box sx={{display: 'block', m: 1}}>
                                        <Typography variant="body2" color="text.secondary">
                                            <b> Fecha:</b> <br/>  05/12/2022
                                        </Typography>
                                    </Box>
                                    <Box sx={{display: 'block', m: 1}}>
                                        <Typography variant="body2" color="text.secondary">
                                            <b> Hora:</b> <br/>  09:00 AM
                                        </Typography>
                                    </Box>
                                    <Box sx={{display: 'block', m: 1}}>
                                        <Typography variant="body2" color="text.secondary">
                                            <b> Cuarto: </b> <br /> 1
                                        </Typography>
                                    </Box>
                                    <Box sx={{display: 'block', m: 1}}>
                                        <Typography variant="body2" color="text.secondary">
                                            <b> Renta Base:</b> <br/>
                                            $ 800
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box sx={{display: 'flex', marginLeft: 'auto', flexDirection: 'column'}}>
                                    <Button sx={{color:'green', m: 1}}
                                    startIcon={<CheckCircle/>}>
                                        Aceptar
                                    </Button>
                                    <Button sx={{color:'red', m:1}}
                                    startIcon={<Cancel/>}>
                                        Rechazar
                                    </Button>
                                </Box>                           
                        </Card>
                        <Card sx={{ maxWidth: 850, m:2, p:1, display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                <CardMedia
                                    component="img"
                                    height="120"
                                    sx={{ width: 120, display: 'block', alignSelf: 'auto' }}
                                    image={require('../assets/user4.png')}
                                    alt="Cuarto Individual"
                                />
                                <Box sx={{display: 'flex', width: 'auto' ,flexDirection: 'row', textAlign: 'center'}}>
                                    <Box sx={{display: 'block', m: 1}}>
                                        <Typography variant="body2" color="text.secondary">
                                            <b> Usuario:</b> <br/>  Jose Angel Hernandez Hernandez
                                        </Typography>
                                    </Box>
                                    <Box sx={{display: 'block', m: 1}}>
                                        <Typography variant="body2" color="text.secondary">
                                            <b> Fecha:</b> <br/>  05/12/2022
                                        </Typography>
                                    </Box>
                                    <Box sx={{display: 'block', m: 1}}>
                                        <Typography variant="body2" color="text.secondary">
                                            <b> Hora:</b> <br/>  10:00 AM
                                        </Typography>
                                    </Box>
                                    <Box sx={{display: 'block', m: 1}}>
                                        <Typography variant="body2" color="text.secondary">
                                            <b> Cuarto: </b> <br /> 1
                                        </Typography>
                                    </Box>
                                    <Box sx={{display: 'block', m: 1}}>
                                        <Typography variant="body2" color="text.secondary">
                                            <b> Renta Base:</b> <br/>
                                            $ 800
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box sx={{display: 'flex', marginLeft: 'auto', flexDirection: 'column'}}>
                                    <Button sx={{color:'green', m: 1}}
                                    startIcon={<CheckCircle/>}>
                                        Aceptar
                                    </Button>
                                    <Button sx={{color:'red', m:1}}
                                    startIcon={<Cancel/>}>
                                        Rechazar
                                    </Button>
                                </Box>                           
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </div>
  )
}

export default Citas