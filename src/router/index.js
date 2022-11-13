import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

// Functions and data
import { Capitalize } from "../functions/utils";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    },
    {
      path: "/recipes",
      name: "recipes",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/RecipesView.vue"),
    },
    {
      path: "/recipes/:id",
      name: "recipesDetails",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/RecipeDetailView.vue"),
    },
    {
      path: "/recipes/category/:name",
      name: "recipesCategories",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(
          /* webpackChunkName: "about" */ "../views/RecipeCategoryView.vue"
        ),
    },
    {
      path: "/download",
      name: "download",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/DownloadView.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/ContactView.vue"),
    },
    {
      path: "/:catchAll(.*)",
      name: "404 - Page Not Found",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/404View.vue"),
      props: true,
    },
  ],
  scrollBehavior() {
    // Always scroll to top
    return { top: 0 };
  },
});

router.beforeEach((to, from, next) => {
  // console.log(to);

  switch (to.name) {
    case "recipesDetails":
      const routerParamsId = to.params.id;
      const routerParamsArr = routerParamsId.split("-");

      document.title = `${Capitalize(
        routerParamsArr.slice(0, routerParamsArr.length - 1).join(" ")
      )} Recipe - Foodmood`;

      break;
    case "recipesCategories":
      document.title = `${Capitalize(
        to.params.name
      )} Recipe Category - Foodmood`;

      break;

    default:
      document.title = `${Capitalize(to.name)} - Foodmood`;
      break;
  }

  next();
});

export default router;
