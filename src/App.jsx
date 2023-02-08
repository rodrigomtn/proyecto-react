import React from 'react'
import Navbar from './components/templates/Navbar.jsx';
import { BrowserRouter as Router } from "react-router-dom";
import Footer from './components/templates/Footer'
import Navegacion from './components/templates/Navegacion';
import Breadcrumb from './components/templates/Breadcrumb';

function App() {
  return (
    <Router>
      <Navbar/>
      <Breadcrumb/>
      <Navegacion/>
      <Footer/>
    </Router>
  );
}

export default App;
