import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import CategoryFilter from './CategoryFilter';
import { getProducts } from '../api/products';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const allProducts = await getProducts();
      setProducts(allProducts);
    };

    fetchData();
  }, []);

  const handleFilterChange = (category) => {
    setFilteredCategory(category);
  };

  const filteredProducts =
    filteredCategory === ''
      ? products
      : products.filter((product) => product.category === filteredCategory);

  return (
    <div>
      <div>
        <CategoryFilter
          categories={Array.from(new Set(products.map((p) => p.category)))}
          onFilterChange={handleFilterChange}
        />
      </div>
      <div className="product">
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
