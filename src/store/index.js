import Vue from 'vue';
import Vuex from 'vuex';
import { count } from './modules/count';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store( {
  state: {
    message: ""
  },
  getters,
  // 同期的な処理しかかけない
  mutations,
    // mutationsの中でのみstateの値を変更する
  // 非同期的な処理がかける
  actions,
  modules: {
    count: count
  }
});