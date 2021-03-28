import { createRouter, createWebHistory } from 'vue-router';
import PageHome from '@/components/PageHome.vue';
import PageThreadShow from '@/components/PageThreadShow.vue';
import PageNotFound from '@/components/PageNotFound.vue';
import sourceData from '@/data.json';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: PageHome,
  },
  {
    path: '/thread/:id',
    name: 'ThreadShow',
    component: PageThreadShow,
    props: true,
    beforeRouteEnter(to, from, next) {
      // check if thread exists
      const threadExists = sourceData.threads.find((thread) => thread.id === to.params.id);
      if (threadExists) {
        // if exists continues
        return next();
      }
      // if doesnt exist redirect to not found
      return next({ name: 'NotFound' });
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: PageNotFound,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
