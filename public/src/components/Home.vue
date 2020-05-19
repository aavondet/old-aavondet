<template>
  <div>
    <section class='text'>
      <div class="wrapper">
        <span class="hello" v-anime="{ duration: 1500, easing: 'linear', opacity: 1 }">Hello,</span>
        <span class="name" v-anime="{ delay: 1600, duration: 1000, easing: 'linear', opacity: 1 }">I am</span>
        <span v-anime="{ delay: 3000, duration: 1500, easing: 'linear', color: '#8cd565' }" class="arnaud">Arnaud</span>
      </div>
    </section>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
section.text {
  display: inline-block;
  width: 100%;
  text-align: center;
}
.wrapper {
  display: inline-grid;
  margin-left: auto;
  margin-right: auto;
  margin-top:5%;
}
span {
  display: inline-block;
  text-align: left;
  font-family: "Arial";
  line-height:0.9;
  text-transform:uppercase;
  letter-spacing:0px;
  font-size: 9rem;
  color: rgba(140, 213, 101, 0.93);
}
.hello {
  color: #bbb;
  opacity: 0;
}
.name {
  color: #bbb;
  opacity: 0;
}
.arnaud {
  color: rgba(140, 213, 101, 0.93);
}

</style>