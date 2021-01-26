import { createRouter, createWebHistory } from "vue-router";

// import Home from "../views/Home.vue";
// import Brazil from "../views/Brazil.vue";
// import Hawaii from "../views/Hawaii.vue";
// import Jamaica from "../views/Jamaica.vue";
// import Panama from "../views/Panama.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/*webpackChunkName: "HomePage"*/ '../views/Home.vue'),
  },
  {
    path: '/brazil',
    name: 'brazil',
    component: () => import(/*webpackChunkName: "Brazil"*/ '../views/Brazil.vue'),
  },
  {
    path: '/hawaii',
    name: 'hawaii',
    component: () => import(/*webpackChunkName: "Hawaii"*/ '../views/Hawaii.vue'),
  },
  {
    path: '/jamaica',
    name: 'jamaica',
    component: () => import(/*webpackChunkName: "Jamaica"*/ '../views/Jamaica.vue'),
  },
  {
    path: '/panama',
    name: 'panama',
    component: () => import(/*webpackChunkName: "Panama"*/ '../views/Panama.vue'),
  },
  {
    path: '/details',
    name: 'DestintaionDetails',
    component: () =>
      import(/*webpackChunkName: "DestintaionDetails"*/ '../views/DestintaionDetails.vue'),
  },
]

const router = createRouter({
  linkExactActiveClass: "vue_router_active",
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
