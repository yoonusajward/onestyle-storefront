import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import products from '../Assets/all_product';

const siteUrl = 'https://yoonusajward.github.io/ecommerce-react-project/';
const defaultDescription = 'Discover considered essentials for women, men, and little ones. Explore the OneStyle collection, find your everyday favorites, and shop in LKR.';
const pages = {
  '/': ['OneStyle — Wear it your way', defaultDescription],
  '/womens': ["Women's Collection | OneStyle", 'Discover relaxed shirts, considered tops, and everyday knitwear. Explore the women’s edit at OneStyle, with prices in LKR.'],
  '/mens': ["Men's Collection | OneStyle", 'Explore everyday bombers, overshirts, and considered outerwear. Discover the men’s edit at OneStyle, with prices in LKR.'],
  '/kids': ['Little Ones Collection | OneStyle', 'Small people. Big style. Discover easy hoodies and playful sweatshirts for little ones at OneStyle, with prices in LKR.'],
  '/cart': ['Your Shopping Bag | OneStyle', 'Your OneStyle favorites, all in one place. Review your shopping bag and order total in LKR.'],
  '/login': ['Your Account | OneStyle', 'Welcome to OneStyle. Sign in or create an account for your own kind of everyday style.'],
};

function setMeta(attribute, key, value) {
  let element = document.head.querySelector('meta[' + attribute + '="' + key + '"]');
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', value);
}

export default function PageMetadata() {
  const { pathname } = useLocation();
  useEffect(() => {
    const normalizedPath = pathname.replace(/\/+$/, '') || '/';
    const match = normalizedPath.match(/^\/product\/(\d+)$/);
    const product = match ? products.find(item => item.id === Number(match[1])) : null;
    const [title, description] = product
      ? [product.name + ' | OneStyle', product.description]
      : pages[normalizedPath] || ['Page Not Found | OneStyle', defaultDescription];
    const url = siteUrl + (normalizedPath === '/' ? '' : normalizedPath.slice(1));
    document.title = title;
    setMeta('name', 'description', description);
    setMeta('name', 'robots', ['/cart', '/login'].includes(normalizedPath) || (!product && !pages[normalizedPath]) ? 'noindex, follow' : 'index, follow');
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', url);
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  }, [pathname]);
  return null;
}
