import Vue from 'vue';
import VueRouter from 'vue-router';

const LoadLogin = require('../pages/Login.vue');
const Login = (resolve) => {
  require.ensure(['../pages/Login.vue'], () => {
    resolve(LoadLogin);
  });
};
Vue.use(VueRouter);
const router = new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/login',
      name: 'LoadLogin',
      component: Login,
    },
  ]
})
export default router;
