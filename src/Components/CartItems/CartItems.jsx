import { formatLKR } from '../../utils/currency';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
export default function CartItems() {
  const {
    all_product,
    cartItems,
    updateCartItemCount,
    getTotalCartAmount,
    getTotalCartItems
  } = useContext(ShopContext);
  const products = all_product.filter(p => cartItems[p.id] > 0);
  return <section className="cart-page"><header className="page-heading"><p className="eyebrow">YOUR GOOD FINDS</p><h1>The shopping bag.<sup>{getTotalCartItems()}</sup></h1></header>{!products.length ? <div className="empty-state"><span className="empty-icon">↗</span><h2>A little room for something good.</h2><p>Your bag is waiting for your next favorite.</p><Link className="button dark" to="/womens">Discover the collection ↗</Link></div> : <div className="cart-layout"><div className="cart-list">{products.map(p => <article className="cart-row" key={p.id}><Link to={'/product/' + p.id}><img src={p.image} alt={p.name} /></Link><div><small>ONESTYLE ESSENTIALS</small><Link to={'/product/' + p.id}><h3>{p.name}</h3></Link><p>{formatLKR(p.new_price)}</p><div className="quantity"><button aria-label={'Decrease quantity of ' + p.name} onClick={() => updateCartItemCount(p.id, cartItems[p.id] - 1)}>−</button><span>{cartItems[p.id]}</span><button aria-label={'Increase quantity of ' + p.name} onClick={() => updateCartItemCount(p.id, cartItems[p.id] + 1)}>+</button></div></div><div className="cart-line-total"><span>{formatLKR(p.new_price * cartItems[p.id])}</span><button onClick={() => updateCartItemCount(p.id, 0)}>Remove</button></div></article>)}<Link className="text-link" to="/womens">← Continue exploring</Link></div><aside className="order-summary"><p className="eyebrow">THE DETAILS</p><h2>Order summary</h2><div><span>Subtotal</span><span>{formatLKR(getTotalCartAmount())}</span></div><div><span>Shipping</span><span>Complimentary</span></div><div className="order-total"><span>Total</span><span>{formatLKR(getTotalCartAmount())}</span></div><button className="button dark" disabled>Checkout coming soon</button><p>Your bag is ready. Online checkout is not available yet.</p></aside></div>}</section>;
}
