import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div>
      <img src={product.images} alt={product.title} />
      <strong><h1>{product.id}</h1></strong>
      <h2>{product.title}</h2>
      <p>${product.price}</p>
      <p>{product.description}</p>
      <Link to={`/product/${product.id}`}>View Details</Link>
    </div>
  );
};

export default ProductCard;
