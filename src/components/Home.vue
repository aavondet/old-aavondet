<template>
  <div class="container">
    <section class='text'>
      <div class="wrapper">
        <span class="hello" v-anime="{ duration: 1500, easing: 'linear', opacity: 1 }">Hello,</span>
        <span class="name" v-anime="{ delay: 1600, duration: 1000, easing: 'linear', opacity: 1 }">I am</span>
        <span v-anime="{ delay: 3000, duration: 1500, easing: 'linear', opacity: 1 }" class="arnaud">Arnaud</span>
      </div>
      <div class="about">
        <div id="title"><b>About Me</b></div>
        <p>
          I am an undergraduate student at Carnegie Mellon University majoring in Mathematical Sciences with a double major in Computer Science. 
          My interest lie in number thoery, cryptography, web developement, and distributed ledger technology.
          I believe strongly in promoting math education as it is vital in diving deeper in virtually any field in STEM, yet its reputation is quite bad among students of all levels.
          I also hold leadership positions in both the CMU Japanese Student Association as well as the CMU Blockchain Group.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.container {
  scroll-behavior: smooth;
}
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
  100%{color: rgba(140, 213, 101, 0.93)}
}

@keyframes changename {
  0%{color:rgba(140, 213, 101, 0.93)}
  45%{color:rgba(140, 213, 101, 0.93)}
  55%{color:#bbb}
  100%{color: #bbb}
}
#title {
  text-align: center;
  margin-bottom: 40px;
  color: rgba(140, 213, 101, 0.93);
  font-size: 64px;
}
.about {
  width: 700px;
  margin: auto;
  margin-bottom: 50px;
  margin-top: 50px;
}
.about p {
  font-size: 25px;
  color: #bbb
}
</style>