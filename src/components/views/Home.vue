<template>
  <div>
    <h3>Home</h3>
    <button @click="toUsers">Usersページに行く</button>
    <p>{{ count }}</p>
    <p>{{ doubleCount }}</p>
    <p>{{ tripleCount }}</p>
    <input type="text" v-model="message">
    <p>{{message}}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("count",["doubleCount", "tripleCount"]),
  
    doubleCount() {
      // getters.count/doubleCount--スラッシュが使えないので[]を使って表現する。
      return this.$store.getters["count/doubleCount"];
    },
    tripleCount() {
      return this.$store.getters["count/tripleCount"];
    },
    // message() {
    //   return this.$store.getters.message;
    // }
    message: {
      // setter的な考え
      get() {
        return this.$store.getters.message;
      },
      set(value) {
        this.$store.dispath("updateMessage", value);
      }
    }
  },

  // computed: mapGetters({
  //   // 名前が変えられる。
  //   myComponentDoubleCount: "doubleCount"
  // }),

  // computed: {
  //   count() {
  //     return this.$store.state.count
  //   },
  //   doubleCount() {
  //     return this.$store.getters.doubleCount;
  //   },
  //   tripleCount() {
  //     return this.$store.getters.tripleCount
  //   }
  // },
  methods: {
    toUsers() {
      this.message = "hello"
      // this.$router.push('users');
      this.$router.push({ path: "users" })
      // routerはURlを切り替えるもの.ナビゲーションのそのもの
    }
  }
}
</script>

<style>

</style>