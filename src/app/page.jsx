import IndexPageView from "pages-sections/landing/page-view";
import MarketOnePageView from "pages-sections/market-1/page-view";
import ShopLayout1 from "components/layouts/shop-layout-1";
function Layout1({ children }) {
  return <ShopLayout1>{children}</ShopLayout1>;
}
export const metadata = {
  title: "Home",
  description: `E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  // authors: [
  //   {
  //     name: "UI-LIB",
  //     url: "https://ui-lib.com",
  //   },
  // ],
  // ,
};
export default function IndexPage() {
  // return <IndexPageView />;
  return (
    <Layout1>
      <MarketOnePageView />
    </Layout1>
  );
}
