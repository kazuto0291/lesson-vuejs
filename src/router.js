import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/views/Home.vue';
import Users from './components/views/Users.vue';
import UsersPosts from './components/views/UsersPosts.vue';
import UsersProfile from './components/views/UsersProfile.vue';
import HeaderHome from './components/views/HeaderHome.vue';
import HeaderUsers from './components/views/HeaderUsers.vue';


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
  {path: '/home', components: {
    default: Home,
    header: HeaderHome
  }},
  {path: '/users/:id',
    components: {
      default: Users,
      header: HeaderUsers
    },
    props: {
      default: true,
      header: false
    },
    children: [
      { path: "posts", component: UsersPosts, name: "user-id-posts"},
      { path: "profile", componet: UsersProfile}
    ]
  },
  {
    path: "*", redirect: {path: "/home"}
  }
]
});