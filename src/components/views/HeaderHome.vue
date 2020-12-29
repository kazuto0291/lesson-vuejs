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
      <button @click="increment(2)">+1</button>
      <button @click="decrement(2)">-1</button>
    </nav>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  methods: {
    ...mapMutations(['increment', 'decrement'])
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