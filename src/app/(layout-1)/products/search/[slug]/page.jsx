
// PAGE VIEW COMPONENT
import { ProductSearchPageView } from "pages-sections/product-details/page-view";
export const metadata = {
  title: "Product Search - Bazaar Next.js E-commerce Template",
  description: `SEO friendly Online store, delivery app and Multi vendor store`,
  
  
};
export default async function ProductSearch({
  params
}) {
  return <ProductSearchPageView />;
}