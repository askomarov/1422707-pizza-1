import Index from "../views/Index.vue";
import Cart from "../views/Cart.vue";
import Login from "../views/Login.vue";
import Orders from "../views/Orders.vue";
import Profile from "../views/Profile.vue";
import popup from "../views/popup.vue";

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
    meta: { layout: "AppLayoutDefault" },
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
    meta: { layout: "AppLayoutDefault" },
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
    meta: { layout: "AppLayoutDefault" },
  },
  {
    path: "/popup",
    name: "popup",
    component: popup,
    meta: { layout: "AppLayoutDefault" },
  },
  {
    path: "/orders",
    name: "Orders",
    component: Orders,
    meta: { layout: "AppLayoutDefault" },
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: { layout: "AppLayoutDefault" },
  },
];

export default routes;
