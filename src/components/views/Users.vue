<template>
  <div>
    <h3>Users</h3>
    <router-link to="/users/1">ユーザー１</router-link>
    <router-link to="/users/2">ユーザー２</router-link>
    <hr>
    <h1>User NO. {{ id }}</h1>
    <!-- route ナビゲーションの今の状況の情報が入っている -->
    <router-link :to="'/users/' + (Number(id) + 1) + '/profile' ">次のユーザー</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  props: ["id"],
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