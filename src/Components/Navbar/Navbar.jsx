import React, { useContext, useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import { AuthContext } from '../../Context/AuthContext';
export default function Navbar() {
  const {
    getTotalCartItems
  } = useContext(ShopContext);
  const {
    user,
    logout
  } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return <><a className="skip-link" href="#main-content">Skip to content</a><div className="announcement">A little less ordinary. A little more you. <span>Discover the collection ↗</span></div><header className="navbar"><button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? '✕' : '☰'}</button><Link className="wordmark" to="/">onestyle<span>®</span></Link><nav aria-label="Main navigation" className={open ? 'nav-menu open' : 'nav-menu'}><NavLink to="/" end>Discover</NavLink><NavLink to="/womens">Women</NavLink><NavLink to="/mens">Men</NavLink><NavLink to="/kids">Little ones</NavLink></nav><div className="nav-actions">{user ? <button onClick={logout}>Sign out</button> : <Link to="/login">Account</Link>}<Link className="bag-link" to="/cart">Bag <span>{getTotalCartItems()}</span></Link></div></header></>;
}
