<template>
  <div class="container">
    <span class="title">Design</span>
    <Gallery></Gallery>
  </div>
</template>

<script>
import Gallery from './Gallery.vue';

export default {
  components: { Gallery }
}
</script>

<style scoped>
.container {
  text-align: center;
  padding-top: 10%; 
}
.title {
  font-family: "Arial";
  line-height:0.8;
  text-transform: uppercase;
  letter-spacing: 0px;
  font-size: 80px;
  color: greenyellow;
  text-align: center;
  display: block;
}
</style>