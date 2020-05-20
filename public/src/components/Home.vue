<template>
  <div>
    <section class='text'>
      <div class="wrapper">
        <span class="hello" v-anime="{ duration: 1500, easing: 'linear', opacity: 1 }">Hello,</span>
        <span class="name" v-anime="{ delay: 1600, duration: 1000, easing: 'linear', opacity: 1 }">I am</span>
        <span v-anime="{ delay: 3000, duration: 1500, easing: 'linear', opacity: 1 }" class="arnaud">Arnaud</span>
      </div>
    </section>
    <hr>
    <Experience></Experience>
  </div>
</template>

<script>
import Experience from "./Experience.vue"
export default {
  components: {
    Experience
  }
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
  margin-bottom:15%
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
  animation: changetext 15s ease-in-out infinite alternate;
}
.name {
  color: #bbb;
  opacity: 0;
  animation: changetext 15s ease-in-out infinite alternate;
}
.arnaud {
  color: rgba(140, 213, 101, 0.93);
  opacity: 0;
  animation: changename 15s ease-in-out infinite alternate;
}

@keyframes changetext {
  0%{color:#bbb}
  45%{color:#bbb}
  55%{color: rgba(140, 213, 101, 0.93)}
}

@keyframes changename {
  0%{color:rgba(140, 213, 101, 0.93)}
  45%{color:rgba(140, 213, 101, 0.93)}
  55%{color: #bbb}
}
hr {
  border-top: 2px solid rgba(140, 213, 101, 0.93);
  width: 80%
}
</style>