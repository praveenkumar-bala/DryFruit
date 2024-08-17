import { VendorPayoutsPageView } from "pages-sections/vendor-dashboard/v-payouts/page-view"; 
// API FUNCTIONS

import api from "utils/__api__/dashboard";
export const metadata = {
  title: "Vendor Payouts",
  description: `SEO friendly Online store, delivery app and Multi vendor store`,
  
  
};
export default async function VendorPayouts() {
  const payouts = await api.payouts();
  return <VendorPayoutsPageView payouts={payouts} />;
}