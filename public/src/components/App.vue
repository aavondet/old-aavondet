<template>
  <div id='app'>
    <div class='container'>
      <Header></Header>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Home from './Home.vue'
import Header from './Header.vue'

export default {
  components: { Header, Home }
}
</script>