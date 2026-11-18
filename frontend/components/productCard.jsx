function ProductCard({ product }) {
    const BASE_URL = import.meta.env.VITE_DJANGO_Base_URL;
  return (
    <div className="dg-whitr rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-transform p-4">
      <img
        src={`${BASE_URL}${product.image}`}
        alt={product.name}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h2 className="text-lg font-semibold text-gray-800 truncate">
        {product.name}
      </h2>
      <p className="text-gray-600 font-medium">£{product.price}</p>
    </div>
  );
}

export default ProductCard;