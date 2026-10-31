import React from 'react';
import { Link } from 'react-router-dom';
export default function Breadcrump({
  product
}) {
  return <nav aria-label="Breadcrumb" className="breadcrumb"><Link to="/">Home</Link><span>/</span><Link to={product.category === 'women' ? '/womens' : product.category === 'men' ? '/mens' : '/kids'}>{product.category === 'kid' ? 'Little ones' : product.category}</Link><span>/</span><span>{product.name}</span></nav>;
}
