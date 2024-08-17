import { TicketsPageView } from "pages-sections/customer-dashboard/support-tickets/page-view"; 
// API FUNCTIONS

import api from "utils/__api__/ticket";
export const metadata = {
  title: "Support Tickets",
  description: `SEO friendly Online store, delivery app and Multi vendor store`,
  
  
};
export default async function SupportTickets() {
  const tickets = await api.getTicketList();
  return <TicketsPageView tickets={tickets} />;
}