import React from 'react';
const cartElements = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    quantity: 2,
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    quantity: 3,
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    quantity: 1,
  }
];

function Cart() {
  const removeItem = (title) => {
    console.log(`Remove item: ${title}`);
  };

  return (
    <div className="cart-container">
      {cartElements.map((item, index) => (
        <div key={index} className="cart-item">
          <img src={item.imageUrl} alt={item.title} className="cart-item-image" />
          <div className="cart-item-details">
            <h4>{item.title}</h4>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => removeItem(item.title)}>Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
