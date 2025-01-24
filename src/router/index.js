import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import JobsView from "@/views/JobsView.vue";
import AddJobView from "@/views/AddJobView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import JobView from "@/views/JobView.vue";

const navRoutes = [
  {
    path: "/",
    name: "home",
    displayName: "Home",
    component: HomeView,
  },
  {
    path: "/jobs",
    name: "jobs",
    displayName: "Jobs",
    component: JobsView,
  },
  {
    path: "/jobs/add",
    name: "add-job",
    displayName: "Add Job",
    component: AddJobView,
  },
];

const routes = [
  ...navRoutes,
  {
    path: "/jobs/:id",
    name: "job-details",
    component: JobView
  },
  {
    path: "/:catchAll(.*)",
    name:"not-found",
    component: NotFoundView
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export const ROUTES = navRoutes.map(({ name, path, displayName }) => ({
  name,
  path,
  displayName,
}));
export default router;
