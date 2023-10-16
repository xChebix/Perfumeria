import { useState, useEffect } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Fetch product data from your server when the component mounts
    fetch('http://localhost:8081/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container text-center"> {/* Center align content */}
      <h1 className="mt-5">Perfumes</h1>
      <ul className="list-group">
        {products.map((product) => (
          <li key={product.id} className="list-group-item">
            <h2>{product.name}</h2>
            <p className="mb-0">Price: ${product.price}</p>
            <img src={product.image} alt={product.name} className="img-fluid mt-2" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
