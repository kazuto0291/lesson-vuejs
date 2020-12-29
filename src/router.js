import Vue from 'vue';
import Router from 'vue-router';

// import Home from './components/views/Home.vue';
// import Users from './components/views/Users.vue';
// import UsersPosts from './components/views/UsersPosts.vue';
// import UsersProfile from './components/views/UsersProfile.vue';
// import HeaderHome from './components/views/HeaderHome.vue';
// import HeaderUsers from './components/views/HeaderUsers.vue';


// 動的import
// webpack公式に書いてある
// 必要なときだけ持ってくる
const Home = () => import(/* webpackChunkName: "Home" */ './components/views/Home.vue');
const Users = () => import(/* webpackChunkName: "Users" */ './components/views/Users.vue');
const UsersPosts = () => import( /* webpackChunkName: "UsersPosts" */ './components/views/UsersPosts.vue');
const UsersProfile = () => import( /* webpackChunkName: "UsersProfile" */'./components/views/UsersProfile.vue');
const HeaderHome = () => import( /* webpackChunkName: "HeaderHome" */ './components/views/HeaderHome.vue');
const HeaderUsers = () => import( /* webpackChunkName: "HeaderUsers" */ './components/views/HeaderUsers.vue');



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
  {path: '/home',
    components: {
      default: Home,
      header: HeaderHome
    },
    beforeEnter(to, from, next) {
      next(false);
    }
  },
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
],
  scrollBehavior(to, from, savedPosition) {
    // return new Promise(resolve => {
    //   // thisは、new Routerで生成したインスタンスを指す。
    //   // this.appはapp.vueのnew Vueに挿入されたVueインスタンスを指す。
    //   this.app.$root.$once('triggerScroll', () => {
    //     // $once の中の処理が終わったらなくなる
    //     let position = ({x:0, y:100});
    //     if (savedPosition) {
    //       position = savedPosition;
    //     }
    //     if (to.hash) {
    //       position = {
    //         selector: to.hash
    //       };
    //     }
    //     resolve(position);
    //   })
    // })

    if (savedPosition) {
      return savedPosition;
    }
    console.log(to, "@@@@")
    console.log(savedPosition, "savedPosition")
    if (to.hash) {
      return {
        selector: "#next-user",
        offset: {x:0, y: 100}
      };
    }

    return {x: 0, y:0};
  }
});