import React from 'react';
import { Link } from 'react-router-dom';
import image from '../Assets/exclusive_image.png';
export default function Offers() {
  return <section className="editorial"><div className="editorial-image"><img src={image} alt="A relaxed look from the OneStyle edit" /><span>THE STYLE NOTES / VOL. 01</span></div><div className="editorial-copy"><p className="eyebrow">LESS EFFORT. MORE YOU.</p><h2>A wardrobe that<br />feels like <em>you.</em></h2><p>For slow mornings and full calendars. For familiar places and somewhere new. Discover pieces that go wherever life takes you.</p><Link className="text-link" to="/mens">Meet your new essentials ↗</Link></div></section>;
}
