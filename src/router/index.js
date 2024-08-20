import { createRouter, createWebHistory } from "vue-router";
// import HomeView from '../views/HomeView.vue'
import ListeLivre from "@/components/Livres/ListeLivre.vue";
import ListeMembre from "@/components/Membres/ListeMembre.vue";
import ListePret from "@/components/Prets/ListePret.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/Livres",
      name: "Livres",
      component: ListeLivre,
    },
    {
      path: "/Membres",
      name: "Membre",
      component: ListeMembre,
    },
    {
      path: "/Prets",
      name: "Prets",
      component: ListePret,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   // component: () => import('../views/AboutView.vue')
    // },
  ],
});

export default router;
