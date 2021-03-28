import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router/';

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
