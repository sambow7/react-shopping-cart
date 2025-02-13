// src/components/Shop/Shop.jsx

// npm modules
import { useState } from 'react';

// components
import InventoryList from '../../components/InventoryList/InventoryList';

// data
import { inventoryData } from '../../data/data';

const Shop = () => {
  // Create state variable and pass new inventory state
  // to the InventoryList component below
  const [inventory, setInventory] = useState(inventoryData);

  return (
    <main>
      <h1>Shop</h1>
      <InventoryList inventory={inventory} />
    </main>
  );
};

export default Shop;
