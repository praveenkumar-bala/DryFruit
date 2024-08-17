import { notFound } from "next/navigation"; 
// API FUNCTIONS

import api from "utils/__api__/shop"; 
// PAGE VIEW COMPONENT

import { ShopDetailsPageView } from "pages-sections/shops/page-view";
export const metadata = {
  title: "Shop Details",
  description: `SEO friendly Online store, delivery app and Multi vendor store`,
  
  
};
export default async function ShopDetails({
  params
}) {
  try {
    const shop = await api.getProductsBySlug(String(params.slug));
    return <ShopDetailsPageView shop={shop} />;
  } catch (error) {
    notFound();
  }
}