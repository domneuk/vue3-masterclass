import { createApp } from 'vue';
import App from './App.vue';

const forumApp = createApp(App);

// adding simple component
// forumApp.component(name: 'Button', component: {});

// using plugins
// forumApp.use(SomePlugin);

forumApp.mount('#app');

// You can declare multiple apps in  one project
/*
const anotherApp = createApp(App);
anotherApp.use(AnotherPlugin);
anotherApp.mount(rootContainer: '#anotherapp');
*/
