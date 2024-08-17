import { PackagePaymentPageView } from "pages-sections/vendor-dashboard/package-payments/page-view"; 
// API FUNCTIONS

import api from "utils/__api__/dashboard";
export const metadata = {
  title: "Package Payments",
  description: `SEO friendly Online store, delivery app and Multi vendor store`,
  
  
};
export default async function PackagePayments() {
  const payments = await api.packagePayments();
  return <PackagePaymentPageView payments={payments} />;
}