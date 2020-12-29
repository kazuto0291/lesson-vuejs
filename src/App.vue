<template>
  <div>
    <router-view name="header"></router-view>
    <transition name="fade" mode="out-in" @before-enter="beforeEnter">
      <router-view></router-view>
    </transition>
    <div class="main">
      <button @click="myAnimation = 'slide'">Slide</button>
      <button @click="myAnimation = 'fade'">Fade</button>
      <p>{{ myAnimation }}</p>
      <hr>
      <button @click="add">追加</button>
        <ul style="width:200px; margin: auto;">
          <transition-group name="fade" tag="div">
          <li
            v-for="(number, index) in numbers"
            :key="number"
            @click="remove(index)"
            style="cursor:pointer;"
            >{{ number }}</li>
          </transition-group>
        </ul>
      <hr>
      <button @click="show = !show">切り替え</button>
      <hr>
      <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @enter-cancelled="enterCancelled"

      @before-leave="beforeLeave"
      @leave="Leave"
      @after-leave="afterLeave"
      @leave-cancelled="leaveCancelled"
      >
        <div class="circle" v-if="show"></div>
      </transition>
      <hr>
      <button @click="myComponent = 'ComponentA'">ComponentA</button>
      <button @click="myComponent = 'ComponentB'">ComponentB</button>
      <transition name="fade" mode="out-in">
        <component :is="myComponent"></component>
      </transition>
      <transition name="fade" mode="out-in">
        <p v-if="show" key="bye">さよなら</p>
        <p v-if="!show" key="hello">こんにちは</p>
      </transition>
      <transition
        name="fade"
        enter-class=""
        enter-active-class="animate__animated animate__bounce"
        enter-to-class=""
        leave-class=""
        leave-active-class=""
        leave-to-class=""
        >
        <p v-if="show">hello</p>
      </transition>
      <transition :name="myAnimation"  appear>
        <p v-if="show">bye</p>
      </transition>
    </div>
    <hr>
    <div>
      <h2>イベントのフォーム</h2>
      <EventTitle v-model="eventData.title"></EventTitle>
      <!-- <EventTitle
        :value="eventData.title"
        @input="eventData.title = $event"
      ></EventTitle> -->
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
      <hr>
      <p>開催場所</p>
      <select v-model="eventData.lacation" multiple>
        <option v-for="location in locations" :key="location">{{ location }}</option>
      </select>
      <p>{{ eventData.location}}</p>
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
import EventTitle from "./components/EventTitle.vue";
import ComponentA from "./components/ComponentA.vue";
import ComponentB from "./components/ComponentB.vue";


  export default {
    data() {
      return {
        numbers:[0, 1, 2],
        nextNumber:3,
        myComponent:"ComponentA",
        show: true,
        myAnimation: "slide",
        number:10,
        currentComponent: "Home",
        locations: ["東京","神奈川", "大阪", "北海道", "奈良", "京都", "名古屋"],
        eventData: {
          title: "タイトル",
          maxNumber: 0,
          host:"主催者名",
          detail: "detail",
          isPrivate: false,
          target: [],
          price: "無料",
          location:[],
        },
        eventLazy: {
          title: "タイトル"
        }
      }
    },
    components: {
      LikeHeader: LikeHeader,
      About: About,
      Home: Home,
      EventTitle: EventTitle,
      ComponentA: ComponentA,
      ComponentB: ComponentB,
    },
    methods: {
      randomIndex() {
        return Math.floor(Math.random() * this.numbers.length)
      },
      add() {
        this.numbers.splice(this.randomIndex(), 0, this.nextNumber);
        this.nextNumber += 1;
      },
      remove(index) {
        this.numbers.splice(index, 1)
      },
      beforeEnter(el) {
        // 現れる前に実行
        el.style.transform = `scale(0)`;
        // thisはApp.vue
        // this.$root→App.vueのnew Vueインスタンスを指す。
        this.$root.$emit('triggerScroll');
      },
      enter(el, done) {
        // 現れる時に実行
        let scale = 0;
        const interval = setInterval(() => {
          el.style.transform = `scale(${scale})`;
          scale += 0.1;
          if (scale > 1) {
            clearInterval(interval);
            done();
          }
        }, 200)
      },
      afterEnter(el) {
        // 現れた後に実行
      },
      enterCancelled(el) {
        // 現れるアニメーションがキャンセルされた時に実行
      },
      beforeLeave(el) {
        // 消える前に実行
      },
      leave(el, done) {
        // 消える時に実行
        let scale = 1;
        const interval = setInterval(() => {
          el.style.transform = `scale(${scale})`;
          scale -= 0.1;
          if (scale < 0) {
            clearInterval(interval);
            done();
          }
        }, 200);
      },
      afterLeave(el) {
        // 消えた後に実行
      },
      leaveCancelled(el) {
        // 消えるアニメーションがキャンセルされた時に実行
      }
    }

  }
</script>

<style scoped>
.circle {
  width: 200px;
  height: 200px;
  margin: auto;
  border-radius: 100px;
  background-color: deeppink;
}

  .fade-move {
    /* transtion-groupの時使う */
    transition: transform 1s;
  }

  .fade-enter {
  /* 現れるときの最初の状態 */
  opacity: 0;
  }
  .fade-enter-active {
  /* 現れるときのトランジションの状態 */
  transition: opacity 5s;
  }
  .fade-enter-to {
  /* 現れるときの最後の状態 */
  opacity: 1;
  }
  .fade-leave {
  /* 消えるときの最後の状態 */
  opacity: 1;
  }
  .fade-leave-active {
  /* 消えるときのトランジションの状態 */
  transition: opacity 5s;
  position: absolute;
  width: 200px;
  }
  .fade-leave-to {
  /* 消えるときの最後の状態 */
  opacity: 0;
  }


  .slide-enter {
    opacity: 0;
  }
  .slide-enter-active {
    animation: slide-in 0.5s;
    transition: opacity 5s;
  }
  .slide-enter-to {

  }
  .slide-leave {

  }
  .slide-leave-active {
    animation: slide-in 0.5s reverse;
    transition: opacity 5s;
  }
  .slide-leave-to {
    opacity: 0;
  }

  @keyframes slide-in {
    from {
      transform: translateX(100px);
    }
    to {
      transform: translateX(0);
    }
  }

  div {
    border: 1px solid blue;
  }

  .main {
    width: 70%;
    margin: auto;
    padding-top: 5rem;
    text-align: center;
  }
</style>
