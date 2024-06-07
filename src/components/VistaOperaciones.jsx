// VistaOperaciones.js
import React, { useState } from 'react';
import Compras from './Compras';
import Ventas from './Ventas';
import CustomizedTables from './Tabla';

function VistaOperaciones() {
  const [inventory, setInventory] = useState([]);
  const [sales, setSales] = useState([]);
  const [purchases, setPurchases] = useState([]); // Nueva variable de estado para las compras

  const addItem = (item) => {
    setInventory([...inventory, item]);
    setPurchases([...purchases, item]); // Agregar item a purchases también
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

  const [selectedOperation, setSelectedOperation] = useState('opcion1');
  const [selectedTable, setSelectedTable] = useState('opcion1');

  const comboOperations = (event) => {
    setSelectedOperation(event.target.value);
  };
  const comboTables = (event) => {
    setSelectedTable(event.target.value);
  };

  const inventoryHeaders = ['Fechas', 'Cantidad', 'Precio'];
  const salesHeaders = ['Cantidad', 'Costo Total'];

  return (
    <div className='h-4/5 flex md:flex-row flex-col col-2 items-center'>
      <div className='md:w-1/2 h-full p-20  flex flex-col gap-4'>
        <select
          value={selectedOperation}
          onChange={comboOperations}
          className="block border border-gray-300 rounded-lg h-8"
        >
          <option value="" disabled>Selecciona una opción</option>
          <option value="opcion1">Compras</option>
          <option value="opcion2">Ventas</option>
        </select>
        {selectedOperation === 'opcion1' && <Compras addItem={addItem} />}
        {selectedOperation === 'opcion2' && <Ventas sellItem={sellItem} sales={sales} />}
      </div>

      <div className='w-1/2 flex p-20 h-full flex flex-col gap-4'>
        <select
          value={selectedTable}
          onChange={comboTables}
          className="block border border-gray-300 rounded-lg h-8"
        >
          <option value="" disabled>Selecciona una opción</option>
          <option value="opcion1">Inventario</option>
          <option value="opcion2">Ventas</option>
        </select>
        {selectedTable === 'opcion1' && <CustomizedTables headers={inventoryHeaders} data={inventory} />}
        {selectedTable === 'opcion2' && <CustomizedTables headers={salesHeaders} data={sales} />}
        
      </div>
    </div>
  );
}

export default VistaOperaciones;
