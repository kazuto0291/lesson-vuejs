import Vue from 'vue';
import Vuex from 'vuex';
import { count } from './modules/count';

Vue.use(Vuex);

export default new Vuex.Store( {
  state: {
    message: ""
  },
  getters: {

    message: state => state.message
  },
  // 同期的な処理しかかけない
  mutations: {
    // mutationsの中でのみstateの値を変更する
    updateMessage(state, newMessage) {
      state.message = newMessage;
    }
  },
  // 非同期的な処理がかける
  actions: {
    updateMessage({commit}, newMessage) {
      commit("updateMessage", newMessage);
    }
  },
  modules: {
    count: count
  }
});