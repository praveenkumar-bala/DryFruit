import { VendorEarningHistoryPageView } from "pages-sections/vendor-dashboard/v-earning-history/page-view"; 
// API FUNCTIONS

import api from "utils/__api__/dashboard";
export const metadata = {
  title: "Earning History",
  description: `SEO friendly Online store, delivery app and Multi vendor store`,
  
  
};
export default async function EarningHistory() {
  const earnings = await api.earningHistory();
  return <VendorEarningHistoryPageView earnings={earnings} />;
}