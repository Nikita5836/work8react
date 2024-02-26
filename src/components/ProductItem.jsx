import React from 'react';
import styles from './ProductItem.module.css';

const ProductItem = ({ product }) => {
  return (
    <div className={styles.productItem} id="cart">
      <img
        className={styles.productImage}
        src={product.thumbnail}
        alt={product.title}
      />
      <h3>{product.title}</h3>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
    </div>
  );
};

export default ProductItem;
