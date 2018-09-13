
import Vue from 'vue'
import App from './App'
import router from './router'

//引入自己写的css
import './assets/css/normaliz.css';
import './assets/css/iconfont.css';

//引入mint-ui
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';


//注册mint
Vue.use(Mint);


/* eslint-disable no-new */

new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: {
		App
	}
})