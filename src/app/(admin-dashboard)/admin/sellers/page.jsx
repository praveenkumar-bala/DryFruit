import { SellersPageView } from "pages-sections/vendor-dashboard/sellers/page-view"; 
// API FUNCTIONS

import api from "utils/__api__/dashboard";
export const metadata = {
  title: "Sellers",
  description: `SEO friendly Online store, delivery app and Multi vendor store`,
  
  
};
export default async function Sellers() {
  const sellers = await api.sellers();
  return <SellersPageView sellers={sellers} />;
}