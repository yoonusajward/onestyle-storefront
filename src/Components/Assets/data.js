import allProducts from './all_product';

// Featured products share the catalog prices and product details.
const data_product = allProducts.filter(product => [1, 2, 3, 4].includes(product.id));

export default data_product;
