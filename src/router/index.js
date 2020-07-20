import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './../components/Home';
import About from './../components/About';
import Repo from './../components/Repo';
import Blog from './../components/Blog';
import goTo from 'vuetify/es5/services/goto'

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/blog', component: Blog },
    { path: '/repo/:name', component: Repo }
  ]
  
export default new VueRouter({
    routes,
    scrollBehavior: (to, from, savedPosition) => {
      let scrollTo = 0
  
      if (to.hash) {
        scrollTo = to.hash
      } else if (savedPosition) {
        scrollTo = savedPosition.y
      }
  
      return goTo(scrollTo)
    },
})