import React, { useState } from 'react';
import './App.css';

function App() {
  // State to manage the cart and item input
  const [cart, setCart] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');

  // Function to add item to the cart
  const addItemToCart = () => {
    // Check if both fields are filled
    if (itemName && itemPrice) {
      const newItem = { name: itemName, price: parseFloat(itemPrice) };
      setCart([...cart, newItem]); // Add new item to the cart
      setItemName(''); // Reset input
      setItemPrice(''); // Reset input
    } else {
      alert("Please enter both item name and price");
    }
  };

  // Function to remove an item from the cart
  const removeItemFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index); // Remove the item at the specified index
    setCart(updatedCart); // Update the cart state
  };

  // Function to calculate the total price
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="App">
      <h1>Shopping Cart</h1>

      <input
        type="text"
        value={itemName}
        placeholder="Item Name"
        onChange={(e) => setItemName(e.target.value)}
      />
      <input
        type="number"
        value={itemPrice}
        placeholder="Item Price"
        onChange={(e) => setItemPrice(e.target.value)}
      />
      <button onClick={addItemToCart}>Add Item</button>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price.toFixed(2)}
              <button onClick={() => removeItemFromCart(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}

      <h3>Total: ${calculateTotalPrice()}</h3>
    </div>
  );
}

export default App;