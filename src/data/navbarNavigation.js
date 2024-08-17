import categoriesMegaMenu from "./categoriesMegaMenu";
// MEGA-MENU DATA

const megaMenus = [
  [
    {
      title: "Nuts",
      child: [
        {
          title: "Walnuts",
          url: "/products/search/walnuts",
        },
        {
          title: "Almonds",
          url: "/products/search/almonds",
        },
        {
          title: "Cashew",
          url: "/products/search/cashew",
        },
        {
          title: "Pistachio",
          url: "/products/search/pista",
        },
        {
          title: "Carn Nuts ",
          url: "/products/search/carnnuts",
        },
      ],
    },
    {
      title: "Dried Fruits",
      child: [
        {
          title: "Raisins",
          url: "/products/search/raisins",
        },
        {
          title: "Dried Figs",
          url: "/products/search/figs",
        },
        {
          title: "Dried Gooseberry",
          url: "/products/search/gooseberry",
        },
        {
          title: "Dried Apricots",
          url: "/products/search/apricots",
        },
        {
          title: "Dried Prunes ",
          url: "/products/search/prunes",
        },
      ],
    },
  ],
  [
    {
      title: "Dates",
      child: [
        {
          title: "Wet Dates",
          url: "/products/search/wetdates",
        },
        {
          title: "Dry Dates",
          url: "/products/search/drydates",
        },
      ],
    },
    {
      title: "Seeds",
      child: [
        {
          title: "Chia Seeds",
          url: "/products/search/chiaseeds",
        },
        {
          title: "Cucumber Seeds",
          url: "/products/search/cucumberseeds",
        },
        {
          title: "Flax Seeds",
          url: "/products/search/flax",
        },
        {
          title: "Musk Melon Seeds",
          url: "/products/search/musk",
        },
        {
          title: "Pumpkin Seeds",
          url: "/products/search/pumpkin",
        },
        {
          title: "Quinoa Seeds",
          url: "/products/search/quinoa",
        },
      ],
    },
  ],
  [
    {
      title: "Berries",
      child: [
        {
          title: "Blueberries",
          url: "/products/search/blueberries",
        },
        {
          title: "Cranberries",
          url: "/products/search/cranberries",
        },
      ],
    },
    {
      title: "Mixes",
      child: [
        {
          title: "Trail Mix",
          url: "/products/search/trailmix",
        },
        {
          title: "Nut Mix",
          url: "/admin/products/nutmix",
        },
        {
          title: "Berries Mix",
          url: "/admin/products/berriesmix",
        },
        {
          title: "Seeds Mix",
          url: "/admin/products/seedsmix",
        },
      ],
    },
  ],
  [
    {
      title: "Brand",
      child: [
        {
          title: "Brand 1",
          url: "/admin/products/brand1",
        },
        {
          title: "Brand 2",
          url: "/admin/products/brand2",
        },
      ],
    },
  ],
];
// MAIN NAVIGATION DATA

const navbarNavigation = [
  {
    title: "Home",
    megaMenu: false,
    megaMenuWithSub: false,
    child: [
      {
        title: "Home",
        url: "/",
      },
    ],
  },
  {
    megaMenu: true,
    megaMenuWithSub: false,
    title: "Shop",
    child: megaMenus,
  },
  {
    megaMenu: false,
    megaMenuWithSub: false,
    title: "Pages",
    child: [
      {
        title: "Shop",
        child: [
          {
            title: "Search product",
            url: "/products/search/blue berries",
          },
          {
            title: "Single product",
            url: "/products/lord-2019",
          },
          {
            title: "Cart",
            url: "/cart",
          },
          {
            title: "Checkout",
            url: "/checkout-alternative",
          },
          {
            title: "Order confirmation",
            url: "/order-confirmation",
          },
        ],
      },
      {
        title: "Auth",
        child: [
          {
            title: "Login",
            url: "/login",
          },
          {
            title: "Register",
            url: "/register",
          },
        ],
      },
    ],
  },
  {
    megaMenu: false,
    megaMenuWithSub: false,
    title: "User Account Pages",
    child: [
      {
        title: "Orders",
        child: [
          {
            title: "Order List",
            url: "/orders",
          },
          {
            title: "Order Details",
            url: "/orders/f0ba538b-c8f3-45ce-b6c1-209cf07ba5f8",
          },
        ],
      },
      {
        title: "Profile",
        child: [
          {
            title: "View Profile",
            url: "/profile",
          },
          {
            title: "Edit Profile",
            url: "/profile/e42e28ea-528f-4bc8-81fb-97f658d67d75",
          },
        ],
      },
      {
        title: "Address",
        child: [
          {
            title: "Address List",
            url: "/address",
          },
          {
            title: "Add Address",
            url: "/address/d27d0e28-c35e-4085-af1e-f9f1b1bd9c34",
          },
        ],
      },
      {
        title: "Wishlist",
        url: "/wish-list",
      },
    ],
  },
];
export default navbarNavigation;
