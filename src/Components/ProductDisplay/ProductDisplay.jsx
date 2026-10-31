import ArrowIcon from '../Icons/ArrowIcon';
import { formatLKR } from '../../utils/currency';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
export default function ProductDisplay({
  product
}) {
  const {
    addToCart
  } = useContext(ShopContext);
  const [added, setAdded] = useState(false);
  return <section className="productdisplay"><div className="product-photo"><img src={product.image} alt={product.name} /><span>THE EVERYDAY EDIT</span></div><div className="product-details"><p className="eyebrow">ONESTYLE ESSENTIALS / {product.category === 'kid' ? 'LITTLE ONES' : product.category.toUpperCase()}</p><h1>{product.name}</h1><div className="detail-price">{formatLKR(product.new_price)} <del>{formatLKR(product.old_price)}</del></div><p className="product-description">{product.description}</p><p className="eyebrow">THE EVERYDAY EDIT</p><p className="fit-note">An easy addition to your everyday rotation.</p><button className="button dark add-button" onClick={() => {
        addToCart(product.id);
        setAdded(true);
      }}>{added ? 'Added to your bag ✓' : 'Add to bag'} <span><ArrowIcon /></span></button><p className="added-message" role="status">{added && <Link to="/cart">Your next favorite is in the bag. View bag <ArrowIcon direction="right" /></Link>}</p><div className="product-promises"><span>01 / A considered everyday essential</span><span>02 / Style it your way, all year round</span></div><details><summary>The OneStyle point of view</summary><p>Good style starts with pieces you reach for again and again. Make this one part of your everyday rotation.</p></details></div></section>;
}
