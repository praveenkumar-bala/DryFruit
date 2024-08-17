import IndexPageView from "pages-sections/landing/page-view";
import MarketOnePageView from "pages-sections/market-1/page-view";
import ShopLayout1 from "components/layouts/shop-layout-1";
function Layout1({ children }) {
  return <ShopLayout1>{children}</ShopLayout1>;
}
export const metadata = {
  title: "Bazaar - Next.js E-commerce Template",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [
    {
      name: "UI-LIB",
      url: "https://ui-lib.com",
    },
  ],
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"],
};
export default function IndexPage() {
  // return <IndexPageView />;
  return (
    <Layout1>
      <MarketOnePageView />
    </Layout1>
  );
}
