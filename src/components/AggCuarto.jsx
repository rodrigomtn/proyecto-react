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
  } from '@mui/material';
import { FileUpload, ArrowBack, Send } from '@mui/icons-material';
import { NavLink as RouterLink } from 'react-router-dom';

const inputsStyle = {
    display: 'flex',
  }

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

const AggCuarto = () => {
  return (
    <Stack>
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
      <Box 
        textAlign={'center'}
        m={3}
      >
        <Typography variant='h6'>Registro de cuarto</Typography>
      </Box>
      <Grid 
        display={'flex'}
        justifyContent= {'center'}
        container
        columns={16}
        spacing={1}
      >
      <Grid item xs={10} sx={{mt: 2, maxWidth: 300}}>
          <TextField style={inputsStyle} label='Zona' variant='filled'/>
        </Grid>
        <Grid item xs={10} sx={{mt: 2, maxWidth: 300}}>
          <TextField style={inputsStyle} label='Dirección' variant='filled'/>
        </Grid>
        <Grid item xs={10} sx={{mt: 2, maxWidth: 300}}>
          <TextField style={inputsStyle} label='Descripcion' variant='filled'/>
        </Grid>
        <Grid item xs={10} sx={{mt: 2, maxWidth: 300}}>
          <TextField type='number' style={inputsStyle} label='Precio' variant='filled'/>
        </Grid>
        <Grid item xs={10} sx={{mt: 2, maxWidth: 300}}>
          <Typography variant='p' sx={{marginRight:2}}>Servicios: </Typography>
          <FormControlLabel label='Agua' control={<Checkbox/>}/>
          <FormControlLabel label='Luz' control={<Checkbox/>}/>
          <FormControlLabel label='Internet' control={<Checkbox/>}/>
          <FormControlLabel label='Drenaje' control={<Checkbox/>}/>
          <FormControlLabel label='Aire Acondicionado' control={<Checkbox/>}/>
        </Grid>
        <Grid item xs={10} sx={{mt: 2, maxWidth: 300}}>
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
        </Grid>
        <Grid item xs={10} sx={{mt: 2, maxWidth: 300}}>
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
        </Grid>
        <Grid item xs={10} sx={{mt: 2,maxWidth: 300}}>
          <Typography variant='p'>Fotografias: </Typography>
          <TextField type='file' sx={{marginLeft: 2}}/>
          <FileUpload sx={{width:40, height:40, marginLeft: 2, mt: 1}}/>
        </Grid>
        
        <Grid item xs={10} sx={{maxWidth: 300, mt: 2}}>
          <Button 
            variant='contained' 
            color='primary' 
            sx={{width:'100%'}} 
            startIcon={<Send/>}
            component={RouterLink} 
            to='/miscuartos' 
          >
            Publicar
          </Button>
        </Grid>
      </Grid>
    </Stack>
  )
}

export default AggCuarto