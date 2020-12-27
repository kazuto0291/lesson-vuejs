import Vue from 'vue'
import App from './App.vue'
import LikeNumber from "./components/LikeNumber.vue"

Vue.config.productionTip = false
Vue.component('LikeNumber', LikeNumber);
// Vue.directive("border", {
//   bind(el, binding, vnode) {
//     // ディレクティブが初めて対象の要素に紐付いた時(最初の一回)
//   },
//   inserted(el, binding, vnode) {
//     // 親Nodeに挿入された時(実際のDOMに挿入された時)
//   },
//   update(el, binding, vnode, oldVnode) {
//     // コンポーネントのv-nodeの情報が少しでも更新されるたび。子コンポーネントv-nodeが更新される前
//   },
//   componentUpdated(el, binding, vnode, oldVnode) {
//     // コンポーネントが更新されるたび。子コンポーネントが更新された後
//   },
//   unbind(el, binding, vnode) {
//     // ディレクティブが紐付いている要素から取り除かれた時
//   }
// });

Vue.directive("border", function(el, binding) {
  // この関数の中がbindとupdateの両方に適用される
});

new Vue({
  render: h => h(App),
}).$mount('#app')


