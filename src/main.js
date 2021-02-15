import Vue from 'vue'
import App from './App.vue'
import MintUi from 'mint-ui'
import router from './router'
import store from "@/store";
import './font_2360006_arw0agz867/iconfont.css'

//使用toast，自己定义的插件，在components/common/toast/index中使用install，就可以使用了
import toast from 'components/common/toast/index'

//图片懒加载
import VueLazyload from "vue-lazyload";

Vue.config.productionTip = false

//原型设置总线，实时监听 GoodsListItem和Home之间的数据传递
Vue.prototype.$bus = new Vue()

Vue.use(MintUi)
Vue.use(toast)
Vue.use(VueLazyload)//然后将 img中的:src改成v-lazy，我这里只下载没使用

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
