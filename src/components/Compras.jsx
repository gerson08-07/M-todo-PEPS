import React, { useState } from 'react';

function Compras({ addItem }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem({ name, price: parseFloat(price), quantity: parseInt(quantity) });
    setName('');
    setPrice('');
    setQuantity('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex flex-col">
      <input
        type="text"
        placeholder="Nombre del artículo"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 m-2"
      />
      <input
        type="number"
        placeholder="Precio"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="border p-2 m-2"
      />
      <input
        type="number"
        placeholder="Cantidad"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        className="border p-2 m-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 m-2">
        Agregar Artículo
      </button>
    </form>
  );
}

export default Compras;
