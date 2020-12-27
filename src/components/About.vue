<template>
<div>
  <p>About</p>
  <input type="text">
</div>
</template>

<script>
export default {
destroyed() {
  console.log("削除されました")
}
}
</script>

<style>

</style>