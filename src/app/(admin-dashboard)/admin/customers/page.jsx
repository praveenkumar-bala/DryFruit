import { CustomersPageView } from "pages-sections/vendor-dashboard/customers/page-view"; 
// API FUNCTIONS

import api from "utils/__api__/dashboard";
export const metadata = {
  title: "Customers",
  description: `Build SEO friendly Online store, delivery app and Multi vendor store`,
  
  
};
export default async function Customers() {
  const customers = await api.customers();
  return <CustomersPageView customers={customers} />;
}