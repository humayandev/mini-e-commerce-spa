import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { dispatch } = useCart();

  if (!product) {
    return <div className="p-6 text-center text-xl">Product not found.</div>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-64 object-cover rounded mb-4"
      />
      <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
      <p className="text-gray-700 mb-2">{product.description}</p>
      <p className="text-lg font-semibold text-green-600 mb-4">
        ${product.price.toFixed(2)}
      </p>
      <button
        onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
}
