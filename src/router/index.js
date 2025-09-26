import { createWebHashHistory, createRouter } from "vue-router";

import MainContainer from "../components/MainContainer.vue";
import MainComponents from "../components/main/MainComponents.vue";
import ProjectMain from "../components/subs/projects/ProjectMain.vue";
import PostMain from "../components/subs/posts/PostMain.vue";

const routes = [
  {
    path: "/",
    component: MainContainer,
    children: [
      {
        path: "",
        component: MainComponents,
      },
      {
        path: "projects",
        component: ProjectMain,
      },
      {
        path: "posts",
        component: PostMain,
      },
    ],
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
