// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'   //异步请求数据
import Assets from './common/css/reset.css'
import Common from './common/css/common.css'
import Icon from './common/css/icon.css'
import Store from './common/js/store.js'
import './common/js/common.js'
import direct from '@/common/js/vScroll' // 轮播滚动
import 'babel-polyfill'
import store from './vuex/vuex.js' //vuex

Vue.use(direct);

Vue.config.productionTip = false
Vue.prototype.$http= axios
//Vue.prototype.$vuex= vuex
window.Assets =Assets
window.Common =Common
window.Store =Store
window.Icon =Icon
/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: { App }
})