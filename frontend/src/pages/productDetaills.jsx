import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext.jsx";

function ProductDetaills() {
  const { id } = useParams();
  const BASE_URL = import.meta.env.VITE_DJANGO_Base_URL;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`${BASE_URL}/api/products/${id}/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id, BASE_URL]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center py-10">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-3xl w-full">
        <div className="flex flex-col md:flex-row gap-8">
          <img
            src={`${product.image}`}
            alt={product.name}
            className="w-full md:w-1/2 h-auto object-cover rounded-lg"
          />
          <div className="flex flex-col justify-between">
            <h1 className="text-3xl font-bold text-gray-800">
              {" "}
              {product.name}{" "}
            </h1>
            <p className="text-2xl text-gray-600 font-semibold mb-6">
              £{product.price}
            </p>
            <p className="text-gray-600 mt-4">{product.description}</p>
            <button onClick={() => addToCart(product.id)} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              Add to Cart{" "}
              <img
                src="https://img.icons8.com/emoji/48/shopping-cart-emoji.png"
                alt="cart"
                className="inline-block ml-2"
              />
            </button>
            {/* Home button */}
            <div className="mt-4">
              <a href="/" className="text-blue-600 hover:underline">
                &larr; Back to Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetaills;
