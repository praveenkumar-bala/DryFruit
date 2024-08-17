import { notFound } from "next/navigation"; 
// PAGE VIEW COMPONENT

import { ProductDetailsPageView } from "pages-sections/product-details/page-view"; 
// API FUNCTIONS

import api from "utils/__api__/products";
import { getFrequentlyBought, getRelatedProducts } from "utils/__api__/related-products";
export const metadata = {
  title: "Product Details",
  // description: `SEO friendly Online store, delivery app and Multi vendor store`,
  // authors: [{
  //   name: "UI-LIB",
  //   url: "https://ui-lib.com"
  // }],
  // 
};
export default async function ProductDetails({
  params
}) {
  try {
    const product = await api.getProduct(params.slug);
    const relatedProducts = await getRelatedProducts();
    const frequentlyBought = await getFrequentlyBought();
    return <ProductDetailsPageView product={product} relatedProducts={relatedProducts} frequentlyBought={frequentlyBought} />;
  } catch (error) {
    notFound();
  }
}