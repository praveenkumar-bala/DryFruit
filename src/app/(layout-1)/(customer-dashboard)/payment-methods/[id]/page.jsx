import { PaymentDetailsPageView } from "pages-sections/customer-dashboard/payment-methods/page-view";
export const metadata = {
  title: "Payment Details",
  description: `SEO friendly Online store, delivery app and Multi vendor store`,
  
  
};
export default async function PaymentMethodDetails() {
  return <PaymentDetailsPageView />;
}