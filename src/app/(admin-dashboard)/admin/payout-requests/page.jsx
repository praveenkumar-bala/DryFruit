import { PayoutRequestsPageView } from "pages-sections/vendor-dashboard/payout-requests/page-view"; 
// API FUNCTIONS

import api from "utils/__api__/dashboard";
export const metadata = {
  title: "Payout Requests",
  description: `SEO friendly Online store, delivery app and Multi vendor store`,
  
  
};
export default async function PayoutRequests() {
  const requests = await api.payoutRequests();
  return <PayoutRequestsPageView requests={requests} />;
}