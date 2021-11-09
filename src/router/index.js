import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import('views/home/Home');
const Category  = () => import('views/category/Category');
const Cart = () => import('views/cart/Cart');
const Profile = () => import('views/profile/Profile');
const Layout = () => import('components/content/layout/Layout');

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: "/home",
        name: "Home",
        component: Home,
      },
      {
        path: "/cart",
        name: "Cart",
        component: Cart,
      },
      {
        path: '/category',
        name: 'Category',
        component: Category,
      },
      {
        path: '/profile',
        name: 'Profile',
        component: Profile,
      }
    ]
  },

];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
