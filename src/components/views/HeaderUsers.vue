<template>
  <nav>
    <h2>USERS@@@@@</h2>
    <p>{{ count }}</p>
      <router-link
        to="/home"
        class="link"
        active-class="link--active"
        exact
        >Home</router-link>
      <router-link to="/users" class="link" active-class="link--active" exact>Users</router-link>
    </nav>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count
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