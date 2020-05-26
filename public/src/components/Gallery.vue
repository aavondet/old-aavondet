<template>
  <div class="gallery">
    <div id="title"><b>Logos by Me</b></div>
    <stack id="stack" :column-min-width="450" :gutter-width="15" :gutter-height="15" :monitor-images-loaded="true">
      <stack-item v-for="(photo, i) in photos" :key="i">
        <img :src="thumbUrl(photo.filename)">
      </stack-item>
    </stack>
  </div>
</template>

<script>
import photos from '../photos.json'
import { Stack, StackItem } from 'vue-stack-grid'

export default {
  name: 'Gallery',
  data() {
    return {
      photos,
    };
  },
  methods: {
    thumbUrl(filename) {
      return require(`../gallery/${filename}`);
    },
  },
  components: {
    Stack, StackItem
  }
};
</script>

<style>
img:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2),0 6px 10px 0 rgba(0,0,0,0.19);
  border-radius: 5%;
  transition: 0.8s;
  margin: auto;
  z-index: 2;
  cursor: pointer;
}
#title {
  text-align: center;
  margin-bottom: 80px;
  color: rgba(140, 213, 101, 0.93);
  font-size: 64px;
}
@media (max-width: 1075px) {
    #stack {
      margin-top: 80px;
      margin-bottom: 80px;
      width: 465px;
      margin-left: auto;
      margin-right: auto;
    }
}
@media (min-width: 1075px) {
    #stack {
      margin-top: 80px;
      margin-bottom: 80px;
      width: 915px;
      margin-left: auto;
      margin-right: auto;
    }
}
</style>