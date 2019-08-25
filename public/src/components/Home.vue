<template>
  <div class="container">
    <div class="wrapper">
      <span class="hello" v-anime="{ duration: 1500, easing: 'linear', opacity: 1 }">Hello,</span>
      <span class="name" v-anime="{ delay: 1600, duration: 1000, easing: 'linear', opacity: 1 }">my name is <span 
      v-anime="{ delay: 3000, duration: 1500, easing: 'linear', color: '#ADFF2F' }" class="arnaud">Arnaud</span></span>
    </div>
    <span class="dot dot1" v-anime="{ duration: 1500, easing: 'linear', opacity: 1 }"></span>
    <span class="dot dot2" v-anime="{ duration: 1500, easing: 'linear', opacity: 1 }"></span>
    <span class="dot dot3" v-anime="{ duration: 1500, easing: 'linear', opacity: 1 }"></span>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.container {
  margin-top: 80px;
  height:90%;
  width: 100%;
}
.wrapper {
  width:270px;
  margin:50px auto;
  position:Relative;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 50%;
  height: 30%;
  margin: auto;
}
span {
  display:block;
  text-align:justify;
  font-family: "Arial";
  line-height:0.8;
  text-transform:uppercase;
  letter-spacing:0px;
  font-size: 80px;
  color: greenyellow;
}
.dot {
  background-color: #bbb;
  border-radius: 50%;
  display: absolute;
  opacity: 0;
}
.dot:hover {
  background-color: greenyellow;
  -webkit-transition: backbround-color 1s; 
  transition: background-color 1s;
}
.dot1 {
  height: 320px;
  width: 320px;
  left: 0;
  transform: translate(-20%, 0);
}
.dot2 {
  height: 200px;
  width: 200px;
  left: 0;
  top: 0;
  transform: translate(300%, 50%);
}
.dot3 {
  height: 550px;
  width: 550px;
  transform: translate(200%, -150%);
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
  color: greenyellow;
}
</style>