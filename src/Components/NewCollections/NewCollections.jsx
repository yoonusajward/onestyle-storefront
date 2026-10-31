import React from 'react';
import { Link } from 'react-router-dom';
import products from '../Assets/all_product';
import Item from '../Item/Item';
export default function NewCollections() {
  return <section className="collection-section"><div className="section-heading"><div><p className="eyebrow">A FRESH PERSPECTIVE</p><h2>New & noteworthy.</h2></div><Link className="text-link" to="/mens">Explore men ↗</Link></div><div className="product-grid">{[products[13], products[7], products[26], products[16]].map(p => <Item key={p.id} {...p} />)}</div><div className="category-links"><Link to="/womens"><small>01 / THE WOMEN'S EDIT</small><span>Her everyday. ↗</span></Link><Link to="/mens"><small>02 / THE MEN'S EDIT</small><span>His essentials. ↗</span></Link><Link to="/kids"><small>03 / THE LITTLE ONES</small><span>Big little adventures. ↗</span></Link></div></section>;
}
