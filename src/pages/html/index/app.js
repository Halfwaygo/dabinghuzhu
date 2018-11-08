import App from './app.vue';
import Vue from 'vue';
import router from './router';
import vTap from 'v-tap';
Vue.use(vTap); //添加vue tap事件


window.apiready = function() {
    new Vue({
        el: '#app',
        router,
        render: h => h(App)
    })
}
