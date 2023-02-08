import React from 'react';
import { Container } from '@mui/material';
import Inicio from '../Inicio';
import Cuartos from '../Cuartos';
import Zonas from '../Zonas';
import AcercaDe from '../AcercaDe';
import Registrarme from '../Registrarme/Registrarme';
import IniciarSesion from '../IniciarSesion';
import Politicas from '../Politicas';
import MisCuartos from '../MisCuartos';
import MisIngresos from '../Ingresos';
import Contrato from '../Contrato';
import Planes from '../Planes';
import DetalleCuarto from '../DetalleCuarto';
import Evaluacion from '../Evaluacion';
import Quejas from '../Quejas';
import AggCuarto from '../AggCuarto';
import Citas from '../Citas';
import Error404 from '../Errores/Error-404';
import Error400 from '../Errores/Error-400';
import Error500 from '../Errores/Error-500';

import { Routes, Route} from 'react-router-dom';

const Navegacion = () => {
  return (
    <Container maxWidth='lg' sx={{maxWidht: 800, mb: 12}}>
        <Routes>
            <Route path='cuartos' element={<Cuartos/>}/>
            <Route path='zonas' element={<Zonas/>}/>
            <Route path='acercade' element={<AcercaDe/>}/>
            <Route path='registrarme' element={<Registrarme/>}/>
            <Route path='iniciarsesion' element={<IniciarSesion/>}/>
            <Route path='politica' element={<Politicas/>}/>
            <Route path='/perfil/miscuartos' element={<MisCuartos/>}/>
            <Route path='/perfil/miscuartos/ingresos' element={<MisIngresos/>}/>
            <Route path='/perfil/miscuartos/contrato' element={<Contrato/>}/>
            <Route path='/perfil/planes' element={<Planes/>}/>
            <Route path='detallecuarto' element={<DetalleCuarto/>}/>
            <Route path='/perfil/evaluacion' element={<Evaluacion/>}/>
            <Route path='quejas' element={<Quejas/>}/>
            <Route path='/perfil/miscuartos/agregarcuarto' element={<AggCuarto/>}/>
            <Route path='/perfil/miscuartos/citas' element={<Citas/>}/>
            <Route path='/' element={<Inicio/>}/>
            <Route path='error400' element={<Error400/>}/>
            <Route path='error500' element={<Error500/>}/>
            <Route path='*' element={<Error404/>}/>
        </Routes>
    </Container>
  )
}

export default Navegacion