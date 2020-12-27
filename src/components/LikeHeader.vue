<template>
  <div>
    <slot name="title" v-bind:user="user" text="text"></slot>
    <hr>
    <slot></slot>
    <!--propsはデータやstringが送れる slotはhtmlのテンプレート自体をすべて送れる -->
    <hr>
    <p>いいね数</p>
    <slot name="number"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        firstName: "Jack",
        lastName: "Donald"
      }
    }
  }
}
</script>

<style>

</style>