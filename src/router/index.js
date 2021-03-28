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
    beforeEnter(to, from, next) {
      console.info('Entering "beforeRouteEnter" of "ThreadShow"');
      // check if thread exists
      const threadExists = sourceData.threads.find((thread) => thread.id === to.params.id);
      if (threadExists) {
        console.info(`Thread (${to.params.id}) does exist, fowarding to PageThreadShow`);
        // if exists continues
        return next();
      }
      console.warn(`Thread (${to.params.id}) not found, redirecting to NotFound`);
      // if doesnt exist redirect to not found
      return next({
        name: 'NotFound',
        params: { pathMatch: to.path.substring(1).split('/') },
        // preserve existing query and hash
        query: to.query,
        hash: to.hash,
      });
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
