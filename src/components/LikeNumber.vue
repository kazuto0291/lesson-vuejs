<template>
<div>
  <P>いいね({{ halfNumber}}) </P>
  <button @click="increment">+1</button>
</div>
</template>

<script>
export default {
  data() {
    return {
      // totalNumber: 5
    };
  },
  // 親から子コンポーネントのデータの受け口
  props: {
    totalNumber: {
      type: Number,
      required: true,
      default: function() {
        return {
          number: 5
        }
      }
    },
    testProps: {
      type: String
    }
  },
  computed: {
    halfNumber() {
      return this.totalNumber / 2
    }
  },
  methods: {
    increment() {
      // 親コンポーネントデータを渡す送り口
      this.$emit("my-click",this.totalNumber + 1);//$emit("emitの名前", データを入れる)
      // $emit・・・子コンポーネントの好きなタイミングで親コンポーネントのメソッドを発火できる。引数が一つでも成り立つ。
      // つまり、$emit はカスタムイベントを作るもの
      // データは親から子の単一方向のながれ
      // 子コンポーネントが親のデータを変えることはない
      // 親は子供のデータに依存して変わるものはない
      // emitは 親のコンポーネントにデータを渡しているが、データを変えていない
      // データを変えるのはあくまでも親コンポーネント自身が変えている
      // emitの名前はケバブケースを使う（カスタムイベントはjs内で使わないから）
    }
  }
};
</script>

<style scoped>
  div {
    border: 1px solid red;
  }
</style>