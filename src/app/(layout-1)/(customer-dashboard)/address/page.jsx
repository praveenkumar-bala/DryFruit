import { AddressPageView } from "pages-sections/customer-dashboard/address/page-view"; 
// API FUNCTIONS

import api from "utils/__api__/address";
export const metadata = {
  title: "Address",
  description: `SEO friendly Online store, delivery app and Multi vendor store`,
  
  
};
export default async function Address() {
  const addressList = await api.getAddressList();
  return <AddressPageView addressList={addressList} />;
}