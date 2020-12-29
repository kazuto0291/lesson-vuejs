<template>
  <div>
    <h2>ユーザーのプロフィール</h2>
      <button @click="increment">+1</button>
      <button @click="decrement">-1</button>
  </div>
  
</template>

<script>
export default {
  methods: {
    increment(){
      this.$store.dispatch('increment', 2);
    },
    decrement() {
      this.$store.dispathc('decrement', 2);
    }
  }
}
</script>

<style>

</style>