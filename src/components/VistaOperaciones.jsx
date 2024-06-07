import React, { useState } from 'react';
import Compras from './Compras';
import Inventario from './Inventario';
import Ventas from './Ventas';

function VistaOperaciones() {
  const [inventory, setInventory] = useState([]);
  const [sales, setSales] = useState([]);

  const addItem = (item) => {
    setInventory([...inventory, item]);
  };

  const sellItem = (quantity) => {
    let remainingQuantity = quantity;
    let newInventory = [...inventory];
    let totalCost = 0;

    while (remainingQuantity > 0 && newInventory.length > 0) {
      let firstItem = newInventory[0];
      if (firstItem.quantity <= remainingQuantity) {
        totalCost += firstItem.quantity * firstItem.price;
        remainingQuantity -= firstItem.quantity;
        newInventory.shift();
      } else {
        totalCost += remainingQuantity * firstItem.price;
        newInventory[0].quantity -= remainingQuantity;
        remainingQuantity = 0;
      }
    }

    if (remainingQuantity > 0) {
      alert('No hay suficiente inventario para la venta');
    } else {
      setSales([...sales, { quantity, totalCost }]);
      setInventory(newInventory);
    }
  };

    
    const [selectedOption, setSelectedOption] = useState('');

    // Función que se ejecuta cuando el valor del combo box cambia
    const handleSelectChange = (event) => {
      setSelectedOption(event.target.value); // Actualizamos el estado con el nuevo valor seleccionado
    };

  return (
    <div className='h-4/5 flex md:flex-row flex-col col-2 items-center'>
      <div className='md:w-1/2 h-full py-16 px-28 flex flex-col'>
        
          <select value={selectedOption} onChange={handleSelectChange} className="block border border-gray-300 rounded-lg h-8">
            <option value="" disabled>Selecciona una opción</option>
            <option value="opcion1">Opción 1</option>
            <option value="opcion2">Opción 2</option>
            <option value="opcion3">Opción 3</option>
          </select>
          {selectedOption === 'opcion1' && <Compras addItem={addItem} />}
          {selectedOption === 'opcion2' && <Ventas sellItem={sellItem} sales={sales} />}

      </div>

      <div className=''>
        1
      </div>
        
    </div>
      
  );
}

export default VistaOperaciones;
