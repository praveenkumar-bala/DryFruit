import { uniq } from "lodash";
import products from "data/product-database";
import bazaarReactDatabase from "data/bazaar-react-database";
import { products as gift } from "../gift/data";
import { products as gadget1 } from "../gadget-1/data";
import { products as gadget2 } from "../gadget-2/data";
import { products as gadget3 } from "../gadget-3/data";
import { products as market1 } from "../market-1/data";
import { products as market2 } from "../market-2/data";
import { products as fashion1 } from "../fashion-1/data";
import { products as fashion2 } from "../fashion-2/data";
import { products as fashion3 } from "../fashion-3/data";
import { products as grocery1 } from "../grocery-1/data";
import { products as grocery2 } from "../grocery-2/data";
import { products as grocery3 } from "../grocery-3/data";
import { products as grocery4 } from "../grocery-4/data";
import { products as furniture } from "../furniture-1/data";
import { products as furniture2 } from "../furniture-2/data";
import { products as furniture3 } from "../furniture-3/data";
import { products as healthBeauty } from "../health-beauty/data";
import { products as medical } from "../medical/data";
import { relatedProducts, frequentlyBoughtData } from "../related-products/data";
const dbProducts = [...bazaarReactDatabase, ...products]; 
// all used products in the bazaar template

const productList = [...products]; 
// get unique products from product list

const uniqueProducts = productList; 
// get the all slugs

const slugs = uniqueProducts.map(item => ({
  params: {
    slug: item?.slug
  }
})); 
// get product names for search

const search = uniqueProducts.slice(0, 6).map(item => item?.title);
export { uniqueProducts, slugs, search };