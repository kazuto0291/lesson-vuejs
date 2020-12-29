<template>
  <div>
    <h3>Home</h3>
    <button @click="toUsers">Usersページに行く</button>
    <p>{{ count }}</p>
    <p>{{ doubleCount }}</p>
    <p>{{ tripleCount }}</p>

  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    count() {
      return this.$store.state.count
    },
    doubleCount() {
      return this.$store.getters.doubleCount;
    },
    tripleCount() {
      return this.$store.getters.tripleCount
    }
  },
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