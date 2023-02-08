import React from 'react';
import { 
  Typography, 
  Box, 
  Checkbox, 
  TextField, 
  Stack, 
  FormControlLabel, 
  Grid, 
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  ListItemButton, 
  ListItemIcon, 
  ListItemText, 
} from '@mui/material';
import { FileUpload, Login } from '@mui/icons-material';
import { NavLink as RouterLink } from 'react-router-dom';
import Ventana from './Ventana'

const inputsStyle = {
  display: 'flex',
}

const Discapacidad = [
  {
      id: 1,
      dis: 'No',
  },
  {
      id: 2,
      dis: 'Si',
  }
]

const Registrarme = () => {
  return (
    <Stack>
      <Box 
        textAlign={'center'}
        m={3}
      >
        <Typography variant='h6'>Registro</Typography>
      </Box>
      <Grid 
        display={'flex'}
        justifyContent= {'center'}
        container
        columns={16}
        spacing={1}
      >
      <Grid item xs={10} sx={{mt: 2, maxWidth: 300}}>
          <TextField style={inputsStyle} label='Nombre' variant='filled'/>
        </Grid>
        <Grid item xs={10} sx={{mt: 2, maxWidth: 300}}>
          <TextField style={inputsStyle} label='Apellido Materno' variant='filled'/>
        </Grid>
        <Grid item xs={10} sx={{mt: 2, maxWidth: 300}}>
          <TextField style={inputsStyle} label='Apellido Paterno' variant='filled'/>
        </Grid>
        <Grid item xs={10} sx={{mt: 2, maxWidth: 300}}>
          <Typography variant='p'>Sexo: </Typography>
          <FormControlLabel label='Masculino' control={<Checkbox/>}/>
          <FormControlLabel label='Femenino' control={<Checkbox/>}/>
        </Grid>
        <Grid item xs={10} sx={{mt: 2, maxWidth: 300}}>
          <TextField type='number' style={inputsStyle} label='Codigo Postal' variant='filled'/>
        </Grid>
        <Grid item xs={10} sx={{mt: 2, maxWidth: 300}}>
          <TextField type='number' style={inputsStyle} label='Numero de Telefono' variant='filled'/>
        </Grid>
        <Grid item xs={10} sx={{mt: 2, maxWidth: 300}}>
          <TextField style={inputsStyle} label='CURP' variant='filled'/>
        </Grid>
        <Grid item xs={10} sx={{mt: 2, maxWidth: 300}}>
          <TextField style={inputsStyle} label='RFC' variant='filled'/>
        </Grid>
        <Grid item xs={10} sx={{mt: 2, maxWidth: 300}}>
          <TextField style={inputsStyle} label='Nacionalidad' variant='filled'/>
        </Grid>
        <Grid item xs={10} sx={{mt: 3, maxWidth: 300}}>
        <TextField style={inputsStyle}
            id="date"
            label="Fecha De Nacimiento"
            type="date"
            defaultValue="2022-12-05"
            sx={{ width: 200 }}
            InputLabelProps={{
              shrink: true,
            }}
        />
        </Grid>
        <Grid item xs={10} sx={{mt: 2,maxWidth: 300}}>
          <Typography variant='p'>Identificacion: </Typography>
          <TextField type='file' sx={{marginLeft: 2}}/>
          <FileUpload sx={{width:40, height:40, marginLeft: 2, mt: 1}}/>
        </Grid>
        <Grid item xs={10} sx={{mt: 2,maxWidth: 300}}>
          <Typography variant='p'>Fotografia: </Typography>
          <TextField type='file' sx={{marginLeft: 2}}/>
          <FileUpload sx={{width:40, height:40, marginLeft: 2, mt: 1}}/>
        </Grid>
        <Grid item xs={10} sx={{mt: 2, maxWidth: 300}}>
          <FormControl 
                sx={{ width: '100%' }}
                variant="filled"
            >
                <InputLabel id="demo-simple-select-label">¿Presenta alguna discapacidad?</InputLabel>
                <Select
                    name="rol"
                    fullWidth
                    label="Discapacidad"
                >
                    <MenuItem>Seleccione</MenuItem>
                    {Discapacidad && Discapacidad.map((c, index) =>(
                        <MenuItem id={c.id} value={c.dis}>{c.dis}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Grid>
        <Grid item xs={10} sx={{mt: 2, maxWidth: 300}}>
          <TextField  style={inputsStyle} label='¿Cuál?' variant='filled'/>
        </Grid>
        <Grid item xs={10} sx={{mt: 2, maxWidth: 300}}>
          <TextField type='email' style={inputsStyle} label='Correo Electronico' variant='filled'/>
        </Grid>
        <Grid item xs={10} sx={{mt: 2, maxWidth: 300}}>
          <TextField type='password' style={inputsStyle} label='Contraseña' variant='filled'/>
        </Grid>
        <Grid item xs={10} sx={{mt: 2, maxWidth: 300}}>
          <TextField type='password' style={inputsStyle} label='Confirmar Contraseña' variant='filled'/>
        </Grid>
        <Grid item xs={10} sx={{mt: 2, maxWidth: 300}}>
          <ListItemButton>
            <ListItemIcon>
              <Checkbox edge='start' disableRipple/>
            </ListItemIcon>
            <ListItemText>
              <Ventana/>     
            </ListItemText>
          </ListItemButton>
        </Grid>
        <Grid item xs={10} sx={{maxWidth: 300}}>
          <Button 
            variant='contained' 
            color='primary' 
            sx={{width:'100%'}} 
            startIcon={<Login/>}
            component={RouterLink} 
            to='/perfil/planes' 
          >
            Registrarse
          </Button>
        </Grid>
        <Grid item xs={10} sx={{mt: 2, maxWidth: 300, textAlign: 'center'}}>
          <RouterLink to="/iniciarsesion">
            ¿Ya tienes una cuenta?
          </RouterLink>
        </Grid>
      </Grid>
    </Stack>
  )
}

export default Registrarme