import React from 'react';
import { Link } from 'react-router-dom';
export default function NewsLetter() {
  return <section className="newsletter"><div><p className="eyebrow">FIND YOUR EVERYDAY</p><h2>A little inspiration.<br /><em>A lot of possibility.</em></h2><p>New perspectives on the pieces you reach for every day.</p></div><div className="newsletter-action"><Link className="button dark" to="/womens">Find your next favorite ↗</Link><span>YOUR STYLE. YOUR OWN WAY.</span></div></section>;
}
