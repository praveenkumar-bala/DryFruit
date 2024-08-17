import { ProductReviewsPageView } from "pages-sections/vendor-dashboard/products/page-view"; 
// API FUNCTIONS

import api from "utils/__api__/dashboard";
export const metadata = {
  title: "Product Reviews",
  description: `SEO friendly Online store, delivery app and Multi vendor store`,
  
  
};
export default async function ProductReviews() {
  const reviews = await api.reviews();
  return <ProductReviewsPageView reviews={reviews} />;
}