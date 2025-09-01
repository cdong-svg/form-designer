import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { useAuthStore } from "@/store/auth";

const routes: RouteRecordRaw[] = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login.vue"),
  },
  {
    path: "/",
    component: () => import("@/views/Layout.vue"),
    children: [
      { path: "", redirect: "/editor" },
      {
        path: "editor",
        name: "Editor",
        component: () => import("@/views/Editor.vue"),
        meta: { requiresAuth: true },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _from, next) => {
  const auth = useAuthStore();
  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    next({ path: "/login", query: { redirect: to.fullPath } });
  } else if (to.path === "/login" && auth.isAuthenticated) {
    next({ path: "/editor" });
  } else {
    next();
  }
});

export default router;
