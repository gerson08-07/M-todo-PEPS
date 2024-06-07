import React from 'react';
import { Link } from 'react-router-dom';

function Opciones({ texto, to }) {
  return (
    <Link to={to} >
      <button className="px-4 py-2 m-2 bg-blue-500 text-white rounded">
        {texto}
      </button>
    </Link>
  );
}

export default Opciones;