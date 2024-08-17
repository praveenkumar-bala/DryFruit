import { OrdersPageView } from "pages-sections/customer-dashboard/orders/page-view"; 
// API FUNCTIONS

import api from "utils/__api__/orders";
export const metadata = {
  title: "Orders",
  description: `SEO friendly Online store, delivery app and Multi vendor store`,
  
  
};
export default async function Orders() {
  const orders = await api.getOrders();
  return <OrdersPageView orders={orders} />;
}