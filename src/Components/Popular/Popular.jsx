import ArrowIcon from '../Icons/ArrowIcon';
import React from 'react';
import { Link } from 'react-router-dom';
import products from '../Assets/all_product';
import Item from '../Item/Item';
export default function Popular() {
  return <section className="collection-section"><div className="section-heading"><div><p className="eyebrow">ON REPEAT, FOR A REASON</p><h2>The everyday favorites.</h2></div><Link className="text-link" to="/womens">Shop women <ArrowIcon /></Link></div><div className="product-grid">{products.slice(0, 4).map(p => <Item key={p.id} {...p} />)}</div></section>;
}
