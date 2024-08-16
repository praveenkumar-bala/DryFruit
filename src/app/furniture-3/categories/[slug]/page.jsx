
// PAGE VIEW COMPONENT
import { FurnitureThreeCategoriesPageView } from "pages-sections/furniture-3/page-view"; 
// CUSTOM DATA MODEL

export const metadata = {
  title: "Furniture Products - Bazaar Next.js E-commerce Template",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [{
    name: "UI-LIB",
    url: "https://ui-lib.com"
  }],
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"]
};
export default function FurnitureThreeCategories({
  params
}) {
  return <FurnitureThreeCategoriesPageView slug={params.slug} />;
}