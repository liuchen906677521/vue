import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters.js';
import mutations from './mutations.js';
Vue.use(Vuex);
const state = {
  collect:JSON.parse(localStorage.getItem('collects'))||[] //存放所有的商品
};
export default new Vuex.Store({
  state,//所有的状态
  getters,
  mutations
});
