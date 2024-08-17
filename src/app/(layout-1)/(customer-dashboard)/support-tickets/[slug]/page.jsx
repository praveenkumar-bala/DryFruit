import { notFound } from "next/navigation";
import { TicketDetailsPageView } from "pages-sections/customer-dashboard/support-tickets/page-view"; 
// API FUNCTIONS

import api from "utils/__api__/ticket"; 
// CUSTOM DATA MODEL

export const metadata = {
  title: "Order Details",
  description: `SEO friendly Online store, delivery app and Multi vendor store`,
  
  
};
export default async function SupportTicketDetails({
  params
}) {
  try {
    const ticket = await api.getTicket(String(params.slug));
    return <TicketDetailsPageView ticket={ticket} />;
  } catch (error) {
    notFound();
  }
}