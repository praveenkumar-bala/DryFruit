import { notFound } from "next/navigation"; 
// API FUNCTIONS

import api from "utils/__api__/shop"; 
// PAGE VIEW COMPONENT

import { ShopsPageView } from "pages-sections/shops/page-view";
export const metadata = {
  title: "Shops - Bazaar Next.js E-commerce Template",
  description: `SEO friendly Online store, delivery app and Multi vendor store`,
  
  
};
export default async function Shops() {
  try {
    const shops = await api.getShopList();
    return <ShopsPageView shops={shops} />;
  } catch (error) {
    notFound();
  }
}