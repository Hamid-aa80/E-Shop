import { useState, useEffect } from 'react'

function App() {
  const [products, setMessage] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/api/products/')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error fetching products:', error))
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-3xl font-bold underline">Products List</h1>
      <div className="container mx-auto p-4">
        {products.map(product => (
          <div key={product.id} className="p-4 bg-white rounded shadow mb-4">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p> className="text-gray-600">{product.description}</p>
            <p className="text-gray-800 font-bold">${product.price}</p>
          </div>
        ))}
       
       
      </div>
    </div>
  );
}

export default App 