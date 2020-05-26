import Vue from 'vue';
import VueRouter from 'vue-router'
import App from './components/App.vue'
import Home from './components/Home.vue'
import VueAnime from 'vue-animejs';

Vue.use(VueAnime);
Vue.use(VueRouter);

const routes = [
	{
		path: '',
		component: Home,
		meta: {
			title: 'Home'
		}
	}
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  el: 'app',
  render: h => h(App)
})
.$mount('#app');