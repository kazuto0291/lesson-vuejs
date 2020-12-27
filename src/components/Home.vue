<template>
  <div>
    <p v-border:dottex d.round.shadow="{width: '5px', color: 'red'}">Home</p>
    <h2>{{ title | upperCase}}</h2>
    <p>{{ subTitle | upperCase }}</p>
    <h2>{{ title | lowerCase}}</h2>
    <p>{{ subTitle | lowerCase }}</p>
    <h2>{{ title | lowerCase | upperCase}}</h2>
    <p>{{ subTitle | upperCase |lowerCase }}</p>
    <h2>{{ number }}</h2>
    <button @click="number++">+1</button>
    <hr>
    <CountNumber></CountNumber>
  </div>
</template>

<script>
import CountNumber from "./CountNumber.vue";
import { tokyoNumber } from "@/tokyoNumber"


export default {
  mixins: [tokyoNumber],
  data() {
    return {
      temData: "hello"
    }
  },
  components: {
    CountNumber
  },
  directives: {
    border(el, binding) {
        // この関数の中がbindとupdateの両方に適用される
      el.style.border = "solid black 2px";
      el.style.borderWidth =binding.value.width;
      el.style.borderColor = binding.value.color;
      el.style.borderStyle = binding.arg;
      if (binding.modifiers.round) {
        el.style.borderRadius ="0.5rem"
      }
      if (binding.modifiers.shadow) {
        el.style.boxShadow = "0 2px 5px rgba(0,0,0,0.50)"
      }
    }
  },
}
</script>

<style>

</style>