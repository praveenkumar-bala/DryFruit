
// FOLLOWING CODES ARE MOCK SERVER IMPLEMENTATION

// YOU NEED TO BUILD YOUR OWN SERVER

// IF YOU NEED HELP ABOUT SERVER SIDE IMPLEMENTATION

// CONTACT US AT support@ui-lib.com
// import { frequentlyBoughtData, relatedProducts } from "./data";
import products from "data/product-database";
export const RelatedProductsEndpoints = Mock => {
  Mock.onGet("/api/frequently-bought-products").reply(async () => {
    try {
      return [200, products];
    } catch (err) {
      console.error(err);
      return [500, {
        message: "Internal server error"
      }];
    }
  });
  Mock.onGet("/api/related-products").reply(async () => {
    try {
      return [200, products];
    } catch (err) {
      console.error(err);
      return [500, {
        message: "Internal server error"
      }];
    }
  });
};