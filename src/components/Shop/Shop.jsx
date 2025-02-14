// src/components/Shop/Shop.jsx

// npm modules
import { useState } from 'react';

// components
import InventoryList from '../../components/InventoryList/InventoryList';

// data
import { inventoryData } from '../../data/data';

// css
import './Shop.css';


const Shop = () => {
  // Create state variable and pass new inventory state
  // to the InventoryList component below
  const [shopInventory, setShopInventory] = useState(inventoryData);
  // Create state variables for the shop and user inventories.
  const [userInventory, setUserInventory] = useState([]);


  // Add the following function:
  const handleAddItem = (item) => {
    setUserInventory([...userInventory, item]);
    setShopInventory(shopInventory.filter((el) => el._id !== item._id));
  };

  return (
    <main>
      <h1>Shop</h1>
      <section className="shop-section">
        <InventoryList title="Shop Inventory" inventory={shopInventory} />
        <InventoryList title="User Inventory" inventory={userInventory} />
      </section>
    </main>
  );
};

export default Shop;