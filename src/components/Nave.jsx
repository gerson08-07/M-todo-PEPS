import React from 'react';
import Opciones from './Opciones';

function Nave() {
  return (
    <div className='h-1/5 w-full sm:flex sm:justify-between justify:center items-center px-12 py-4'>
      <p className='text-4xl font-semibold font-poppins'>Método PEPS</p>
      <div>
        <Opciones texto="Operaciones" to="/" />
        <Opciones texto="Reportes" to="/reportes" />
      </div>
    </div>
  );
}

export default Nave;

