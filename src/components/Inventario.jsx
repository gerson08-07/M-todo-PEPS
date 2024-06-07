import React from 'react';

function Inventario({ inventory }) {
  return (
    <div className="mb-4">
      <h2 className="text-xl font-bold">Inventario</h2>
      <ul>
        {inventory.map((item, index) => (
          <li key={index}>
            {item.name} - {item.quantity} unidades a ${item.price} cada uno
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Inventario;
