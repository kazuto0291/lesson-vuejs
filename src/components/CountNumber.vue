<template>
  <div>
    <h2>{{ title | upperCase}}</h2>
    <p>{{ subTitle | upperCase }}</p>
    <h2>{{ title | lowerCase}}</h2>
    <p>{{ subTitle | lowerCase }}</p>
    <h2>{{ title | lowerCase | upperCase}}</h2>
    <p>{{ subTitle | upperCase |lowerCase }}</p>
    <h2>{{ number }}</h2>
    <button @click="number++">+1</button>
  </div>
</template>

<script>
import { tokyoNumber } from "@/tokyoNumber"

export default {
  mixins: [tokyoNumber],
}
</script>

<style>

</style>