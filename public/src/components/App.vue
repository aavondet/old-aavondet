<template>
  <div id='app'>
    <div class='container'>
      <Header></Header>
      <Main></Main>
    </div>
  </div>
</template>

<script>
import Main from './Main.vue'
import Header from './Header.vue'

export default {
  components: { Header, Main }
}
</script>
