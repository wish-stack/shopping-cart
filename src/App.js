import React, { useState } from 'react';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');

  const addItemToCart = () => {
    if (itemName && itemPrice) {
      const newItem = { name: itemName, price: parseFloat(itemPrice) };
      setCart([...cart, newItem]);
      setItemName('');
      setItemPrice('');
    } else {
      alert("Please enter both item name and price");
    }
  };

  const removeItemFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

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