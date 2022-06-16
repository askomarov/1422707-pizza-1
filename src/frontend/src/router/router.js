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
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/popup",
    name: "popup",
    component: popup,
  },
  {
    path: "/orders",
    name: "Orders",
    component: Orders,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
];

export default routes;
