import { BrandsPageView } from "pages-sections/vendor-dashboard/brands/page-view"; 
// API FUNCTIONS

import api from "utils/__api__/dashboard";
export const metadata = {
  title: "Brands",
  description: `E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  // authors: [{
  //   name: "UI-LIB",
  //   url: "https://ui-lib.com"
  // }],
  // 
};
export default async function Brands() {
  const brands = await api.brands();
  return <BrandsPageView brands={brands} />;
}