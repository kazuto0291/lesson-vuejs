<template>
  <div>
    <div>
      <h2>イベントのフォーム</h2>
      <label for="title">タイトル</label>
      <input type="text" id="title" v-model="eventData.title">
      <pre>{{ eventData.title }}</pre>
      <hr>
      <h2>Lazyのフォーム２</h2>
      <label for="title2">タイトル２</label>
      <input type="text" id="title2" v-model.lazy="eventLazy.title">
      <p>{{ eventLazy.title }}</p>
      <hr>
      <h2>.numberフォーム</h2>
      <label for="maxNumber">最大人数</label>
      <input type="number" id="maxNumber" v-model.number ="eventData.maxNumber">
      <p>{{ typeof eventData.maxNumber }}</p>
      <hr>
      <h2>trimフォーム</h2>
      <label for="host">主催者</label>
      <input type="text" id="host" v-model.trim ="eventData.host">
      <pre>{{ eventData.host }}</pre>
      <hr>
      <label for="detail">イベントの内容</label>
      <textarea name="" id="detail" cols="30" rows="10" v-model="eventData.detail"></textarea>
      <p style="white-space: pre;">{{ eventData.detail }}</p>
      <hr>
      <input type="checkbox" id="isPrivate" v-model="eventData.isPrivate">
      <label for="isPrivate">非公開</label>
      <p>{{ eventData.isPrivate }}</p>
      <hr>
      <p>参加条件</p>
      <input type="checkbox" id="10" value="10代" v-model="eventData.target">
      <label for="10">10代</label>
      <input type="checkbox" id="20" value="20代" v-model="eventData.target">
      <label for="20">20代</label>
      <input type="checkbox" id="30" value="30代" v-model="eventData.target">
      <label for="30">30代</label>
      <input type="checkbox" id="40" value="40代" v-model="eventData.target">
      <label for="40">40代</label>
      <p>{{ eventData.target }}</p>
      <hr>
      <p>参加費</p>
      <input type="radio" id="free" value="無料" v-model="eventData.price">
      <label for="free">無料</label>
      <input type="radio" id="paid" value="有料" v-model="eventData.price">
      <label for="paid">有料</label>
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
          maxNumber: 0,
          host:"主催者名",
          detail: "detail",
          isPrivate: false,
          target: [],
          price: "無料"
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
