import { PaymentMethodsPageView } from "pages-sections/customer-dashboard/payment-methods/page-view";
export const metadata = {
  title: "Payment Methods",
  description: `SEO friendly Online store, delivery app and Multi vendor store`,
  
  
};
export default async function PaymentMethods() {
  return <PaymentMethodsPageView />;
}