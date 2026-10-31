import React from 'react';
import { Link } from 'react-router-dom';
import hero from '../Assets/hero-editorial-v2.png';
export default function Hero() {
  return <section className="hero"><div className="hero-copy"><p className="eyebrow">THE EVERYDAY, RECONSIDERED</p><h1>Good style.<br />Great <em>feeling.</em></h1><p className="hero-description">Pieces to live in. Details to fall for.<br />Find your own kind of everyday.</p><Link className="button dark" to="/womens">Explore the collection <span>↗</span></Link><div className="hero-footnote"><span>01 — THE NEW EDIT</span><span>Made for your kind of day.</span></div></div><div className="hero-visual editorial-photo"><span className="vertical-note">THE ONESTYLE POINT OF VIEW</span><img src={hero} alt="Ivory linen and olive knitwear on a walnut chair in warm afternoon light" /><div className="image-caption"><span>The art of everyday.</span><Link to="/mens" aria-label="Explore menswear">↗</Link></div></div></section>;
}
