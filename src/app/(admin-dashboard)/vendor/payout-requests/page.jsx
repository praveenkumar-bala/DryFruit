import { VendorPayoutRequestsPageView } from "pages-sections/vendor-dashboard/v-payout-request/page-view"; 
// API FUNCTIONS

import api from "utils/__api__/vendor";
export const metadata = {
  title: "Payout Requests",
  description: `SEO friendly Online store, delivery app and Multi vendor store`,
  
  
};
export default async function PayoutRequests() {
  const requests = await api.getAllPayoutRequests();
  return <VendorPayoutRequestsPageView payoutRequests={requests} />;
}