import ArrowIcon from '../Components/Icons/ArrowIcon';
import React, { useContext, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Item/Item';
export default function ShopCategory({
  category
}) {
  const {
    all_product
  } = useContext(ShopContext);
  const [search, setSearch] = useState('');
  const [price, setPrice] = useState('');
  const [sort, setSort] = useState('featured');
  const names = {
    women: "The women's edit.",
    men: "The men's edit.",
    kid: 'Small people. Big style.'
  };
  let products = all_product.filter(p => p.category === category && p.name.toLowerCase().includes(search.toLowerCase()) && (!price || (price === 'low' ? p.new_price < 3000 : price === 'medium' ? p.new_price >= 3000 && p.new_price <= 6000 : p.new_price > 6000)));
  if (sort !== 'featured') products.sort((a, b) => sort === 'ascending' ? a.new_price - b.new_price : b.new_price - a.new_price);
  return <div className="category-page"><header className="category-heading"><p className="eyebrow">ONESTYLE / {category === 'kid' ? 'LITTLE ONES' : category.toUpperCase()}</p><h1>{names[category]}</h1><p>Easy to wear. Easy to love. Make the everyday your own.</p></header><div className="filter-bar"><label className="search-field"><span>Search</span><input type="search" placeholder="Find your next favorite" value={search} onChange={e => setSearch(e.target.value)} /></label><label>Price<select value={price} onChange={e => setPrice(e.target.value)}><option value="">All prices</option><option value="low">Under LKR 3,000</option><option value="medium">LKR 3,000 – 6,000</option><option value="high">Above LKR 6,000</option></select></label><label>Sort by<select value={sort} onChange={e => setSort(e.target.value)}><option value="featured">Featured</option><option value="ascending">Price: low to high</option><option value="descending">Price: high to low</option></select></label></div><p className="results-count">{products.length} considered essentials</p><div className="product-grid">{products.map(p => <Item key={p.id} {...p} />)}</div>{!products.length && <div className="empty-state"><h2>No matches, just yet.</h2><p>Try another search or a different price range.</p><button className="button dark" onClick={() => {
        setSearch('');
        setPrice('');
      }}>Clear filters <ArrowIcon /></button></div>}</div>;
}
