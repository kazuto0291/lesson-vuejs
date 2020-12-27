<template>
  <div>
  <LikeHeader >
    <h2>皆さん</h2>
    <template v-slot:title="slotProps">
      <h2>こんにちは</h2>
      <h2>{{slotProps.user.firstName}}</h2>
    </template>
    <h3>はじめまして</h3>
    <p>よろしくお願いいたします。</p>
    <template v-slot:number>
      <h1>トータルのいいね数</h1>
      <h2>{{ number }}</h2>
    </template>
  </LikeHeader>
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
