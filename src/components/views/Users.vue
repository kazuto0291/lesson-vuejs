<template>
  <div>
    <h3>Users</h3>
    <router-link to="/users/1">ユーザー１</router-link>
    <router-link to="/users/2">ユーザー２</router-link>
    <hr>
    <h1>User NO. {{ id }}</h1>
    <!-- route ナビゲーションの今の状況の情報が入っている -->
    <router-link :to="'/users/' + (Number(id) + 1) + '/profile' ">次のユーザー</router-link>
    <router-link :to="{ name: 'user-id-posts', params: {id: Number(id) + 1}, query: { lang: 'ja', page: 2} , hash: '#next-user' }">次のユーザー</router-link>
    <router-view></router-view>
    <div style="height: 700px;"></div>
    <router-link id="next-user" :to="{ name: 'user-id-posts', params: {id: Number(id) + 1}, query: { lang: 'ja', page: 2}}">次のユーザー</router-link>
    <div style="height: 1400px;"></div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  beforeRouteEnter(to, from, next) {
    console.log('beforeRouteEnter')
    // コンポーネントが表示されるときに実行される
    // thisは使えないがnextの中で使える
    next(vm => {
      // vueインスタンスでアクセスできるようになったときに実行する
      // 非同期的な処理になる
      console.log(vm.id)
    })
  },
  beforeRouteUpdate(to, from, next) {
    console.log('beforeRouteUpdate');
    next()
  },
  beforeRouteLeave(to, from, next) {
    console.log('beforeRouteLeave');
    const isLeave = window.confirm("本当にこのページを離れますか？")
    if (isLeave) {
      next();
    } else {
      next(false);
    }
  },
  watch: {
    $route(to, from) {
      console.log(to);
      console.log(from);
      console.log('$routeが変わった')
    }
  }
}
</script>

<style>

</style>