import React from 'react';
import { useCart } from '../context/CartContext';

const CartSidebar = () => {
  const { state, dispatch } = useCart();

  const total = state.cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold border-b pb-2">Your Cart</h2>
      {state.cart.length === 0 ? (
        <p className="text-gray-600">Cart is empty.</p>
      ) : (
        state.cart.map(item => (
          <div key={item.id} className="flex justify-between items-center">
            <div>
              <p>{item.title}</p>
              <p className="text-sm text-gray-500">
                ${item.price} × {item.quantity}
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() =>
                  dispatch({ type: 'DECREASE_QUANTITY', payload: item.id })
                }
                className="px-2 bg-gray-200 rounded"
              >
                -
              </button>
              <button
                onClick={() =>
                  dispatch({ type: 'INCREASE_QUANTITY', payload: item.id })
                }
                className="px-2 bg-gray-200 rounded"
              >
                +
              </button>
            </div>
          </div>
        ))
      )}
      <div className="pt-4 border-t">
        <p className="font-semibold">Total: ${total.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CartSidebar;
