import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from '@/App.vue';
import PageHome from '@/components/PageHome.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: PageHome,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const forumApp = createApp(App);

// adding simple component
// forumApp.component(name: 'Button', component: {});

// using plugins
// forumApp.use(SomePlugin);

forumApp.use(router);
forumApp.mount('#app');

// You can declare multiple apps in  one project
/*
const anotherApp = createApp(App);
anotherApp.use(AnotherPlugin);
anotherApp.mount(rootContainer: '#anotherapp');
*/
