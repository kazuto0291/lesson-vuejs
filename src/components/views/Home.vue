<template>
  <div>
    <h3>Home</h3>
    <button @click="toUsers">Usersページに行く</button>
  </div>
</template>

<script>
export default {
  methods: {
    toUsers() {
      // this.$router.push('users');
      this.$router.push({ path: "users" })
      // routerはURlを切り替えるもの.ナビゲーションのそのもの
    }
  }
}
</script>

<style>

</style>