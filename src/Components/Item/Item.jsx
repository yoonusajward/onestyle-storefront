import { formatLKR } from '../../utils/currency';
import React from 'react';
import { Link } from 'react-router-dom';
export default function Item(p) {
  return <article className="item"><Link className="item-image" to={'/product/' + p.id}><img src={p.image} alt={p.name} loading="lazy" /><span className="item-badge">THE EVERYDAY EDIT</span><span className="item-arrow">↗</span></Link><div className="item-info"><Link to={'/product/' + p.id}><h3>{p.name}</h3></Link><div className="item-prices"><span>{formatLKR(p.new_price)}</span><del>{formatLKR(p.old_price)}</del></div></div></article>;
}
