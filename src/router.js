import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/views/Home.vue';
import Users from './components/views/Users.vue';


// use-プラグイン（Router）を適用する
// プラグインって何-グローバルな機能を提供するもの
// vue.js全体に影響を与えるようなものを一般的にプラグインという
// 要するにvue.jsが提供している形であるプラグインを使うのがvue.useになる
// vue.use(プラグイン名)で使用する.
// プラグインであるRouterをつかう宣言になる。
Vue.use(Router);

export default new Router ({
  mode: "history",
  routes: [
  {path: '/home', component: Home},
  {path: '/users/:id', component: Users, props: true}
]
});