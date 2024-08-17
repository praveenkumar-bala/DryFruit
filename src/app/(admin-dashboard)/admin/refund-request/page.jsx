import { RefundRequestPageView } from "pages-sections/vendor-dashboard/refund-request/page-view"; 
// API FUNCTIONS

import api from "utils/__api__/dashboard";
export const metadata = {
  title: "Refund Request",
  description: `SEO friendly Online store, delivery app and Multi vendor store`,
  
  
};
export default async function RefundRequest() {
  const requests = await api.refundRequests();
  return <RefundRequestPageView requests={requests} />;
}