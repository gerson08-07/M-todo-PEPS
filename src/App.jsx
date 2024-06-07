import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nave from './components/Nave';
import VistaOperaciones from './components/VistaOperaciones';
import VistaReportes from './components/VistaReportes';

import './App.css';

function App() {
  
  
  return (
      
    <Router>
      <div className='mx-auto h-full '>
        <Nave />
        <Routes>
            <Route path='/' element={<VistaOperaciones />} />
            <Route path='/reportes' element={<VistaReportes />} />
        </Routes>
      </div>
      
    </Router>

  );
}

export default App;
