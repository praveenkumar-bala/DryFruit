import { EarningHistoryPageView } from "pages-sections/vendor-dashboard/earning-history/page-view"; 
// API FUNCTIONS

import api from "utils/__api__/dashboard";
export const metadata = {
  title: "Earning History",
  description: `SEO friendly Online store, delivery app and Multi vendor store`,
  
  
};
export default async function EarningHistory() {
  const earnings = await api.earningHistory();
  return <EarningHistoryPageView earnings={earnings} />;
}