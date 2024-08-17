import { ProductsPageView } from "pages-sections/vendor-dashboard/products/page-view"; 
// API FUNCTIONS

import api from "utils/__api__/dashboard";
export const metadata = {
  title: "Products - Bazaar Next.js E-commerce Template",
  description: `SEO friendly Online store, delivery app and Multi vendor store`,
  
  
};
export default async function Products() {
  const products = await api.products();
  return <ProductsPageView products={products} />;
}