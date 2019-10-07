import Vue from 'vue';
import VueRouter from 'vue-router'
import App from './components/App.vue'
import Home from './components/Home.vue'
import Experience from './components/Experience.vue'
import Coding from './components/Coding.vue'
import Design from './components/Design.vue'
import VueAnime from 'vue-animejs';
import Images from './components/Images.vue';

Vue.use(VueAnime);
Vue.use(VueRouter);

const routes = [
	{
		path: '',
		component: Home,
		meta: {
			title: 'Home'
		}
	},
	{
		path: '/experience',
		component: Experience,
		meta: {
			title: 'Experience'
		}
	},
	{
		path: '/coding',
		component: Coding,
		meta: {
			title: 'Coding'
		}
	},
	{
		path: '/design',
		component: Design,
		meta: {
			title: 'Design'
		}
	},
	{
		path: '/images/:id',
		component: Images
	  },
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