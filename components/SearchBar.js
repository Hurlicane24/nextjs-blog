"use client";

import { useEffect, useState } from 'react';

function SearchBar() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  useEffect(() => {
    setFilteredProducts(
      products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, products]);

  return (
    <div>
      <p>The Search Bar!</p>
      <input
        type="text"
        placeholder="Search products"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Product Image</th>
            <th>Product Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map(product => (
            <tr key={product.id}>
              <td>
                <img 
                  src={product.image} 
                  alt={product.title} 
                  style={{ width: "50px", height: "50px", objectFit: "cover" }}
                />
              </td>
              <td>{product.title}</td>
              <td>${product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SearchBar;
