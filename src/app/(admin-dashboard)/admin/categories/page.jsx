import { CategoriesPageView } from "pages-sections/vendor-dashboard/categories/page-view"; 
// API FUNCTIONS

import api from "utils/__api__/dashboard";
export const metadata = {
  title: "Categories",
  description: `E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  // authors: [{
  //   name: "UI-LIB",
  //   url: "https://ui-lib.com"
  // }],
  // 
};
export default async function Categories() {
  const categories = await api.category();
  return <CategoriesPageView categories={categories} />;
}