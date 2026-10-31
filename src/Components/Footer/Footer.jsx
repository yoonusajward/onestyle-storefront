import React from 'react';
import { Link } from 'react-router-dom';
export default function Footer() {
  return <footer className="footer"><div className="footer-top"><div><Link className="wordmark" to="/">onestyle<span>®</span></Link><p>Wear it your way.</p></div><div><h3>THE COLLECTIONS</h3><Link to="/womens">Women</Link><Link to="/mens">Men</Link><Link to="/kids">Little ones</Link></div><div><h3>YOUR ONESTYLE</h3><Link to="/login">My account</Link><Link to="/cart">Shopping bag</Link><Link to="/">Discover the edit</Link></div><div className="footer-note"><p>Everyday pieces.<br />Extraordinary possibilities.</p><span>Thoughtfully selected. Always you.</span></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} OneStyle. All rights reserved.</span><span>A considered approach to everyday style.</span><span>LKR / EN</span></div></footer>;
}
