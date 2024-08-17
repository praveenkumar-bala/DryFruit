import { WishListPageView } from "pages-sections/customer-dashboard/wish-list"; 
// API FUNCTIONS

import { getWishListProducts } from "utils/__api__/wish-list";
export const metadata = {
  title: "Wish List",
  description: `SEO friendly Online store, delivery app and Multi vendor store`,
  
  
};
export default async function WishList({
  searchParams
}) {
  const {
    products,
    totalProducts
  } = await getWishListProducts(searchParams.page);
  return <WishListPageView products={products} totalProducts={totalProducts} />;
}