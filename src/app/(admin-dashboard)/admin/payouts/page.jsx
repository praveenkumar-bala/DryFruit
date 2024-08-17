import { PayoutsPageView } from "pages-sections/vendor-dashboard/payouts/page-view"; 
// API FUNCTIONS

import api from "utils/__api__/dashboard";
export const metadata = {
  title: "Payouts",
  description: `SEO friendly Online store, delivery app and Multi vendor store`,
  
  
};
export default async function Payouts() {
  const payouts = await api.payouts();
  return <PayoutsPageView payouts={payouts} />;
}