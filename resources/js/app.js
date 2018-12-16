

require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

import App from './App.vue';
Vue.use(VueAxios, axios);


import VueSwal from 'vue-swal'
Vue.use(VueSwal)


const example = Vue.component('example-component', require('./components/ExampleComponent.vue'));
import HomeComponent from './components/HomeC';
import CreateComponent from './components/CreateC';
import IndexComponent from './components/IndexC';
import EditComponent from './components/EditC';
import ErrorComponent from './components/ErrorC';

const routes = [
    {
        name: 'home',
        path: '/',
        component: HomeComponent
    },
    {
        name: 'example',
        path: '/ex',
        component: example
    },
    {
        name: 'create',
        path: '/create',
        component: CreateComponent
    },
    {
        name: 'posts',
        path: '/posts',
        component: IndexComponent
    },
    {
        name: 'edit',
        path: '/edit/:id',
        component: EditComponent
    },
    {
        name: 'error',
        path: '*',
        redirect: '/'
    }
];

const router = new VueRouter({ mode: 'history', routes: routes});
const app = new Vue(Vue.util.extend({ router },App)).$mount('#app');

/*const app = new Vue({
    el: '#app',
    router:router,
    components:example
});*/

