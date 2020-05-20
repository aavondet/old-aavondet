<template>
  <div id='app'>
    <div class='container'>
      <Header @home="scrollTo('home')" @experience="scrollTo('experience')" @design="scrollTo('design')"></Header>
      <Home id='home'></Home>
      <Experience id='experience'></Experience>
      <Gallery id='design'></Gallery>
    </div>
  </div>
</template>

<script>
import Home from './Home.vue'
import Experience from "./Experience.vue"
import Header from './Header.vue'
import Gallery from './Gallery.vue'

export default {
  components: { Header, Home, Experience, Gallery },
  methods: {
    scrollTo (elm) {
      let target = document.getElementById(elm);
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }
}
</script>
