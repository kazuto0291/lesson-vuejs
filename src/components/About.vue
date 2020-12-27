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
},
deactivated() {
  console.log("deactivated")
},
activated() {
  console.log("actibated")
}
}
</script>

<style>

</style>