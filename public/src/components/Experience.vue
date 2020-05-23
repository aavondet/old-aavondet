<template>
  <section class="container">
    <div id="title"><b>Past Jobs I've Had</b></div>
    <div class="entry" v-for="job in jobs" :key="job.id">
      <div class="image">
        <a :href="job.link"><img :src="job.image"></a>
      </div>
      <div class="info">
          <strong>{{job.position}}</strong>
          <i>{{job.company}} ({{job.location}})</i>
          <p>{{job.description}}</p>
      </div>
    </div>
  </section>
</template>

<script>
import jobs from '../jobs.json'

export default {
  data() {
    return {
      jobs
    }
  }
}
</script>

<style scoped>
.container {
  text-align: center;
  padding-top: 10%;
  padding-bottom: 10%;
  width:100%
}
#title {
  text-align: center;
  margin-bottom: 80px;
  color: rgba(140, 213, 101, 0.93);
  font-size: 64px;
}
@media (max-width: 1075px) {
  .entry > .info {
    display: block;
    text-align: left;
    margin: auto;
    overflow: hidden;
    visibility: visible; 
    width: 350px;
    height:350px;
    opacity: 1;
    margin-top: 20px;
  }
}
@media (min-width: 1075px) {
  .entry > .info {
    vertical-align: top;
    display: inline-block;
    animation: rreveal 0.8s forwards ease-in;
    text-align: left;
    margin-bottom: 0px;
    overflow: hidden;
  }
  .entry:hover > .info {
    animation: reveal 1.2s forwards ease-out;
  }
}
.entry {
  display: block;
}
img {
  width: 350px;
  height: 250px;
  border-radius: 10%
}
.image {
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
  border-radius: 10%;
  transition: 0.8s;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 350px;
  display: inline-block;
}
.image:hover {
    box-shadow: 0 0px 0px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    cursor: pointer;
  }
strong {
  font-size: 36px;
  display: block;
}
i {
  font-size: 24px;
  display: block;
}
@keyframes reveal {
  0% {visibility: hidden; width: 0px;height:0px;opacity: 0;margin: 0px;}
  45% {visibility: hidden; width: 450px;height:270px;opacity: 0;margin-top: 20px;margin-left: 20px;margin-right: 20px;}
  55% {visibility: hidden; width: 450px;height:270px;opacity: 0;margin-top: 20px;margin-left: 20px;margin-right: 20px;}
  100% {visibility: visible; width: 450px;height:270px;opacity: 1;margin-top: 20px;margin-left: 20px;margin-right: 20px;}
}
@keyframes rreveal {
  0% {visibility: visible; width: 450px;height:270px;opacity: 1;margin-top: 20px;margin-left: 20px;margin-right: 20px;}
  45% {visibility: hidden; width: 450px;height:270px;opacity: 0;margin-top: 20px;margin-left: 20px;margin-right: 20px;}
  55% {visibility: hidden; width: 450px;height:270px;opacity: 0;margin-top: 20px;margin-left: 20px;margin-right: 20px;}
  100% {visibility: hidden; width: 0px;height:0px;opacity: 0;margin-top: 0px;margin-left: 0px;margin-right: 0px;}
}
</style>