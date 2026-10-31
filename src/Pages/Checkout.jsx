import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import ArrowIcon from '../Components/Icons/ArrowIcon';
import { formatLKR } from '../utils/currency';

const emptyDetails = { firstName: '', lastName: '', email: '', phone: '', address: '', apartment: '', city: '', province: '', postalCode: '' };
const sampleDetails = { firstName: 'Alex', lastName: 'Perera', email: 'alex@example.com', phone: '0771234567', address: '24 Sample Lane', apartment: '', city: 'Colombo', province: 'Western', postalCode: '00700' };

function Field({ name, label, details, onChange, autoComplete, type = 'text', optional = false, ...props }) {
  return <label className="checkout-field" htmlFor={'checkout-' + name}>
    <span>{label}{optional && <small>Optional</small>}</span>
    <input id={'checkout-' + name} name={name} value={details[name]} onChange={onChange} autoComplete={autoComplete} type={type} required={!optional} pattern={type === 'text' && !optional ? '.*\\S.*' : undefined} {...props} />
  </label>;
}

function CheckoutSummary({ items, total }) {
  const count = items.reduce((sum, item) => sum + item.quantity, 0);
  return <aside className="checkout-summary" aria-label="Order summary">
    <p className="eyebrow">YOUR GOOD FINDS / {count} {count === 1 ? 'ITEM' : 'ITEMS'}</p>
    <h2>Order summary</h2>
    <ul className="checkout-products">{items.map(item => <li key={item.id}>
      <img src={item.image} alt={item.name} />
      <div><h3>{item.name}</h3><p>Qty {item.quantity} · {formatLKR(item.price)} each</p><strong>{formatLKR(item.price * item.quantity)}</strong></div>
    </li>)}</ul>
    <dl className="checkout-totals"><div><dt>Subtotal</dt><dd>{formatLKR(total)}</dd></div><div><dt>Shipping</dt><dd>Complimentary</dd></div><div className="checkout-total"><dt>Total</dt><dd>{formatLKR(total)}</dd></div></dl>
    <p className="checkout-summary-note">Sample checkout. No payment will be taken.</p>
  </aside>;
}

export default function Checkout() {
  const { all_product, cartItems, clearCart } = useContext(ShopContext);
  const [details, setDetails] = useState(emptyDetails);
  const [payment, setPayment] = useState('demo-card');
  const [order, setOrder] = useState(null);
  const confirmationHeading = useRef(null);
  const items = all_product.filter(product => cartItems[product.id] > 0).map(product => ({ id: product.id, name: product.name, image: product.image, price: product.new_price, quantity: cartItems[product.id] }));
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  useEffect(() => {
    if (order) {
      window.scrollTo(0, 0);
      confirmationHeading.current?.focus();
    }
  }, [order]);

  function onChange(event) {
    const { name, value } = event.target;
    setDetails(previous => ({ ...previous, [name]: value }));
  }

  function placeSampleOrder(event) {
    event.preventDefault();
    if (!items.length || !event.currentTarget.reportValidity() || order) return;
    setOrder({ reference: 'OS-DEMO-' + Date.now().toString(36).toUpperCase(), details: { ...details }, payment, items, total });
    clearCart();
  }

  if (order) return <section className="checkout-page">
    <div className="checkout-success"><span className="checkout-success-mark" aria-hidden="true">✓</span><p className="eyebrow">THE NEXT STEP, BEAUTIFULLY SIMPLE</p><h1 ref={confirmationHeading} tabIndex={-1}>Your sample order is complete.</h1><p>Thanks, {order.details.firstName}. That’s how easy your OneStyle checkout could be.</p><p className="demo-notice">This was a demo. No payment was taken, no order will be shipped, and no confirmation email has been sent.</p></div>
    <div className="checkout-layout"><div className="confirmation-details"><p className="eyebrow">{order.reference}</p><h2>The details, at a glance.</h2><dl><div><dt>Contact</dt><dd>{order.details.email}<br />{order.details.phone}</dd></div><div><dt>Sample delivery address</dt><dd>{order.details.firstName} {order.details.lastName}<br />{order.details.address}{order.details.apartment && <><br />{order.details.apartment}</>}<br />{order.details.city}, {order.details.province} {order.details.postalCode}<br />Sri Lanka</dd></div><div><dt>Payment method</dt><dd>{order.payment === 'demo-card' ? 'Demo card — no charge' : 'Cash on delivery — demo only'}</dd></div></dl><p className="checkout-note">Your shopping bag has been cleared. These sample details stay on this screen only.</p><Link className="button dark" to="/womens">Keep discovering <ArrowIcon /></Link></div><CheckoutSummary items={order.items} total={order.total} /></div>
  </section>;

  if (!items.length) return <section className="checkout-page"><div className="empty-state"><p className="eyebrow">YOUR NEXT FAVORITE IS WAITING</p><h1>Let’s start with your bag.</h1><p>Add something you love before trying the sample checkout.</p><Link className="button dark" to="/womens">Explore the collection <ArrowIcon /></Link></div></section>;

  return <section className="checkout-page">
    <Link className="text-link checkout-back" to="/cart"><ArrowIcon direction="left" /> Back to your bag</Link>
    <header className="page-heading"><p className="eyebrow">A FEW DETAILS. ONE GOOD CHOICE.</p><h1>Make it yours.</h1><p className="checkout-subtitle">An easy finish to your everyday favorites.</p></header>
    <div className="demo-notice"><strong>You’re trying a sample checkout.</strong> Use the sample details below. No real payment or delivery takes place.</div>
    <div className="checkout-layout"><form className="checkout-form" onSubmit={placeSampleOrder}>
      <div className="checkout-form-heading"><h2>Your details</h2><button className="text-link" type="button" onClick={() => setDetails({ ...sampleDetails })}>Use sample details <ArrowIcon direction="right" /></button></div>
      <fieldset><legend><span>01</span> Contact</legend><div className="checkout-fields"><Field name="email" label="Email address" type="email" autoComplete="email" details={details} onChange={onChange} /><Field name="phone" label="Phone number" type="tel" autoComplete="tel" details={details} onChange={onChange} pattern="[+]?[0-9][0-9 ]{6,18}" minLength={7} maxLength={20} title="Enter 7–20 characters using digits, spaces, or a leading +." /></div></fieldset>
      <fieldset><legend><span>02</span> Delivery address</legend><div className="checkout-fields"><Field name="firstName" label="First name" autoComplete="given-name" details={details} onChange={onChange} /><Field name="lastName" label="Last name" autoComplete="family-name" details={details} onChange={onChange} /><div className="checkout-full"><Field name="address" label="Street address" autoComplete="address-line1" details={details} onChange={onChange} /></div><div className="checkout-full"><Field name="apartment" label="Apartment, suite, etc." autoComplete="address-line2" optional details={details} onChange={onChange} /></div><Field name="city" label="City" autoComplete="address-level2" details={details} onChange={onChange} /><label className="checkout-field" htmlFor="checkout-province"><span>Province</span><select id="checkout-province" name="province" autoComplete="address-level1" required value={details.province} onChange={onChange}><option value="">Select province</option>{['Central', 'Eastern', 'North Central', 'Northern', 'North Western', 'Sabaragamuwa', 'Southern', 'Uva', 'Western'].map(province => <option key={province}>{province}</option>)}</select></label><Field name="postalCode" label="Postal code" autoComplete="postal-code" inputMode="numeric" pattern="[0-9]{5}" title="Enter a 5-digit postal code." maxLength={5} details={details} onChange={onChange} /><label className="checkout-field" htmlFor="checkout-country"><span>Country</span><input id="checkout-country" autoComplete="country-name" value="Sri Lanka" readOnly /></label></div></fieldset>
      <fieldset><legend><span>03</span> Payment</legend><label className={'payment-option' + (payment === 'demo-card' ? ' selected' : '')}><input type="radio" name="payment" value="demo-card" checked={payment === 'demo-card'} onChange={() => setPayment('demo-card')} /><span><strong>Demo card</strong><small>Simulate a successful payment. No card details needed.</small></span><span className="demo-badge">DEMO</span></label><label className={'payment-option' + (payment === 'cash' ? ' selected' : '')}><input type="radio" name="payment" value="cash" checked={payment === 'cash'} onChange={() => setPayment('cash')} /><span><strong>Cash on delivery</strong><small>A sample delivery option. No real order is placed.</small></span></label></fieldset>
      <button className="button dark checkout-submit" type="submit">Place sample order · {formatLKR(total)} <ArrowIcon /></button><p className="checkout-note">This preview does not collect payment details or send your information to a server.</p>
    </form><CheckoutSummary items={items} total={total} /></div>
  </section>;
}
