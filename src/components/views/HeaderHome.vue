<template>
  <nav>
    <h2>HOME@@@@@@</h2>
      <router-link
        to="/home"
        class="link"
        active-class="link--active"
        exact
        >Home</router-link>
      <router-link to="/users" class="link" active-class="link--active" exact>Users</router-link>
      <button @click="increment">+1</button>
      <button @click="decrement">-1</button>
    </nav>
</template>

<script>
export default {
  methods: {
    increment() {
      this.$store.commit('increment',2);
    },
    decrement() {
      this.$store.commit('decrement', 2)
    }
}
}
</script>

<style>
.link {
    margin-right: 10px;
  }

  .link--active {
    font-size: 20px;
  }
</style>