import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store( {
  state: {
    count: 2
  },
  getters: {
    doubleCount: state => state.count * 2,
    tripleCount: state => state.count * 3
  },
  // 同期的な処理しかかけない
  mutations: {
    // mutationsの中でのみstateの値を変更する
    increment(state, number) {
      state.count += number;
    },
    decrement(state, number) {
      state.count -= number;
    }
  },
  // 非同期的な処理がかける
  actions: {
    increment({ commit }, number) {
        commit('increment', number);
    },
    decrement({ commit }, number) {
        commit('decrement', number)
    }
  }
});