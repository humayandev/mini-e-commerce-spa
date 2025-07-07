import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <div className="container mx-auto px-4">
      <div className="w-full border rounded-lg p-4 shadow hover:shadow-lg transition">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover cursor-pointer rounded"
          onClick={() => navigate(`/product/${product.id}`)}
        />
        <h2
          onClick={() => navigate(`/product/${product.id}`)}
          className="mt-2 font-semibold text-lg cursor-pointer hover:text-blue-600"
        >
          {product.title}
        </h2>
        <p className="text-gray-600">${product.price.toFixed(2)}</p>
        <button
          className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
