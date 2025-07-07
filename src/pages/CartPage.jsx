import React from 'react';
import { useCart } from '../context/CartContext';
import products from '../data/products'; // adjust path as needed

const CartPage = () => {
  const { state, dispatch } = useCart();

  // Create a lookup map for product images by id
  const productImageMap = {};
  products.forEach(product => {
    productImageMap[product.id] = product.image;
  });

  const subtotal = state.cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const vatRate = 0.15; // 15% VAT example
  const vat = subtotal * vatRate;
  const grandTotal = subtotal + vat;

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h2 className="text-3xl font-bold mb-6">Shopping Cart</h2>

      {state.cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 border-b-2 pb-3 font-semibold text-gray-700">
            <div className="col-span-5">Item</div>
            <div className="col-span-2 text-center">Price</div>
            <div className="col-span-2 text-center">Quantity</div>
            <div className="col-span-2 text-center">Total</div>
            <div className="col-span-1 text-center">Remove</div>
          </div>

          {/* Cart Items */}
          {state.cart.map(item => (
            <div
              key={item.id}
              className="grid grid-cols-12 gap-4 items-center border-b py-4"
            >
              {/* Item: Image + Title */}
              <div className="col-span-5 flex items-center gap-4">
                <img
                  src={productImageMap[item.id]}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                </div>
              </div>

              {/* Price */}
              <div className="col-span-2 text-center text-lg font-medium">
                ${item.price.toFixed(2)}
              </div>

              {/* Quantity controls */}
              <div className="col-span-2 flex justify-center items-center gap-2">
                <button
                  onClick={() =>
                    dispatch({ type: 'DECREASE_QUANTITY', payload: item.id })
                  }
                  className="w-8 h-8 bg-gray-200 rounded text-xl font-bold"
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className="w-6 text-center">{item.quantity}</span>
                <button
                  onClick={() =>
                    dispatch({ type: 'INCREASE_QUANTITY', payload: item.id })
                  }
                  className="w-8 h-8 bg-gray-200 rounded text-xl font-bold"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              {/* Total per item */}
              <div className="col-span-2 text-center text-lg font-medium">
                ${(item.price * item.quantity).toFixed(2)}
              </div>

              {/* Remove Button */}
              <div className="col-span-1 text-center">
                <button
                  onClick={() =>
                    dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })
                  }
                  className="w-10 h-10 bg-red-600 text-white rounded hover:bg-red-700 transition"
                  aria-label="Remove item"
                >
                  x
                </button>
              </div>
            </div>
          ))}

          {/* Totals */}
          <div className="mt-8 max-w-md ml-auto text-right space-y-2">
            <div className="flex justify-between text-lg">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg">
              <span>VAT (15%):</span>
              <span>${vat.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-xl font-bold border-t pt-2">
              <span>Grand Total:</span>
              <span>${grandTotal.toFixed(2)}</span>
            </div>
            <button
              onClick={() => alert('Checkout simulated')}
              className="mt-4 w-full px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
