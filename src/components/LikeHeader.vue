<template>
  <div>
    <slot name="title"></slot>
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
  props: ["headerText"]
}
</script>

<style>

</style>