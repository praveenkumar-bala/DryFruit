import { notFound } from "next/navigation";
import { OrderDetailsPageView } from "pages-sections/customer-dashboard/orders/page-view"; 
// API FUNCTIONS

import api from "utils/__api__/orders"; 
// CUSTOM DATA MODEL

export const metadata = {
  title: "Order Details - Bazaar Next.js E-commerce Template",
  description: `SEO friendly Online store, delivery app and Multi vendor store`,
  
  
};
export default async function OrderDetails({
  params
}) {
  try {
    const order = await api.getOrder(String(params.id));
    return <OrderDetailsPageView order={order} />;
  } catch (error) {
    notFound();
  }
}