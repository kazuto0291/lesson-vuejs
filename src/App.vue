<template>
  <div>
  <LikeHeader></LikeHeader>
  <h2>{{ number }}</h2>
  <!-- 子コンポーネントにデータを渡す送り口 -->
  <LikeNumber v-bind:totalNumber="number" ></LikeNumber>
  <!-- 子コンポーネントからデータをもらう受け口 v-on:自分で作ったemit名 = $event(データ)-->
  <LikeNumber :totalNumber="number" v-on:my-click="number = $event"></LikeNumber>
  </div>
</template>

<script>
import LikeHeader from  "./components/LikeHeader.vue"

  export default {
    data() {
      return {
        number:10
      }
    },
    components: {
      LikeHeader: LikeHeader
    }

  }
</script>

<style scoped>
  div {
    border: 1px solid blue;
  }
</style>
