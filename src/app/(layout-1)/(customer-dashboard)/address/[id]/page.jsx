import { notFound } from "next/navigation";
import { AddressDetailsPageView } from "pages-sections/customer-dashboard/address/page-view"; 
// API FUNCTIONS

import api from "utils/__api__/address"; 
// CUSTOM DATA MODEL

export const metadata = {
  title: "Address",
  description: `SEO friendly Online store, delivery app and Multi vendor store`,
  
  
};
export default async function Address({
  params
}) {
  try {
    const address = await api.getAddress(params.id);
    return <AddressDetailsPageView address={address} />;
  } catch (error) {
    notFound();
  }
}