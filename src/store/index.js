import Vue from 'vue'
import Vuex from 'vuex'

import mutations from "@/store/mutations";
import actions from "@/store/actions";
import getters from "@/store/getters";

Vue.use(Vuex);

const state = {
  cartList: []
}

const store =  new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  //modules还没用到，用到了再进行细分
  modules: {
  }
})

export default store;
