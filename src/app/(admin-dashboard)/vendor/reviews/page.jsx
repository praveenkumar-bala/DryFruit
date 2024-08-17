import { ReviewsPageView } from "pages-sections/vendor-dashboard/reviews/page-view"; 
// API FUNCTIONS

import api from "utils/__api__/vendor";
export const metadata = {
  title: "Reviews",
  description: `SEO friendly Online store, delivery app and Multi vendor store`,
  
  
};
export default async function Reviews() {
  const reviews = await api.getAllProductReviews();
  return <ReviewsPageView reviews={reviews} />;
}