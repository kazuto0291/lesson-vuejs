<template>
  <div>
      <div>
    <h2>イベントのフォーム</h2>
    <label for="title">タイトル</label>
    <input type="text" id="title" v-model="eventData.title">
    <p>{{ eventData.title }}</p>
    <h2>Lazyのフォーム２</h2>
    <label for="title2">タイトル２</label>
    <input type="text" id="title2" v-model.lazy="eventLazy.title">
    <p>{{ eventLazy.title }}</p>
    <h2>.numberフォーム</h2>
    <label for="maxNumber">最大人数</label>
    <input type="number" id="maxNumber" v-model.number ="eventData.maxNumber">
    <p>{{ typeof eventData.maxNumber }}</p>
  </div>
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
    <!-- <template v-slot:[title]></template> -->
  </LikeHeader>
  <!-- 子コンポーネントにデータを渡す送り口 -->
  <LikeNumber v-bind:totalNumber="number" ></LikeNumber>
  <!-- 子コンポーネントからデータをもらう受け口 v-on:自分で作ったemit名 = $event(データ)-->
  <LikeNumber :totalNumber="number" v-on:my-click="number = $event"></LikeNumber>
  <button @click="currentComponent = 'Home'">Home</button>
  <button @click="currentComponent = 'About'">About</button>
  <keep-alive>
    <component v-bind:is="currentComponent"></component>
  </keep-alive>

  </div>
</template>

<script>
import LikeHeader from  "./components/LikeHeader.vue";
import About from "./components/About.vue";
import Home from "./components/Home.vue";


  export default {
    data() {
      return {
        number:10,
        currentComponent: "Home",
        eventData: {
          title: "タイトル",
          maxNumber: 0
        },
        eventLazy: {
          title: "タイトル"
        }
      }
    },
    components: {
      LikeHeader: LikeHeader,
      About: About,
      Home: Home
    }

  }
</script>

<style scoped>
  div {
    border: 1px solid blue;
  }
</style>
