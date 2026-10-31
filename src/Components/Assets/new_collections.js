import allProducts from './all_product';

const featuredIds = [12, 35, 14, 8, 15, 2, 17, 28];
const new_collections = featuredIds.map(id => allProducts.find(product => product.id === id));

export default new_collections;
