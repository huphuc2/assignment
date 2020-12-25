import Vue from 'vue'
import App from './App.vue'
import listForm from './vueComponents/listForm.vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import { store } from './store/store'
import Vuelidate from 'vuelidate'


// Install BootstrapVue
Vue.use(BootstrapVue)
    // Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(VueRouter)

Vue.use(Vuelidate)
const router = new VueRouter({
    mode: 'history',
    routes
});

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})