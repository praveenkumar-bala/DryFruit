import { OrdersPageView } from "pages-sections/vendor-dashboard/orders/page-view"; 
// API FUNCTIONS

import api from "utils/__api__/dashboard";
export const metadata = {
  title: "Orders",
  description: `SEO friendly Online store, delivery app and Multi vendor store`,
  
  
};
export default async function Orders() {
  const orders = await api.orders();
  return <OrdersPageView orders={orders} />;
}