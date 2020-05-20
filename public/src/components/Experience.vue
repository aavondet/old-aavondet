<template>
  <section class="container">
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
export default {
  data() {
    return {
      jobs : [
        {id: 1, company: "Expii", location: "Pittsburgh, PA", position: "Intern", image: "../../expii.png", link: "https://www.expii.com", 
        description: "Worked on the \"Daily Challenge with Po-Shen Loh\" team, using LaTeX to write problems in different fields of Mathematics, such as Number Theory and Probability, that were used to evaluate students on their proficiency in these topics. Additionally, editted videos of Professor Po-Shen Loh using DaVinci Resolve and helped with filming as well."},
        {id: 2, company: "PLAID, Inc.", location: "Tokyo, Japan", position: "Developer Intern", image: "../../plaid.png", link: "https://www.plaid.co.jp",
        description: "Developed the frontend code of several new pages, giving design input about industry standards and UX writing, coding them in JavaScript using the Vue framework, and writing e2e tests in CoffeeScript using Selenium. Contributed with frontend code refactoring and long-term development planning to prepare the CX platform Karte for its initial overseas release as part of the i18n team."}
      ]
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
  45% {visibility: hidden; width: 400px;height:270px;opacity: 0;margin-top: 20px;margin-left: 20px;margin-right: 20px;}
  55% {visibility: hidden; width: 400px;height:270px;opacity: 0;margin-top: 20px;margin-left: 20px;margin-right: 20px;}
  100% {visibility: visible; width: 400px;height:270px;opacity: 1;margin-top: 20px;margin-left: 20px;margin-right: 20px;}
}
@keyframes rreveal {
  0% {visibility: visible; width: 400px;height:270px;opacity: 1;margin-top: 20px;margin-left: 20px;margin-right: 20px;}
  45% {visibility: hidden; width: 400px;height:270px;opacity: 0;margin-top: 20px;margin-left: 20px;margin-right: 20px;}
  55% {visibility: hidden; width: 400px;height:270px;opacity: 0;margin-top: 20px;margin-left: 20px;margin-right: 20px;}
  100% {visibility: hidden; width: 0px;height:0px;opacity: 0;margin-top: 0px;margin-left: 0px;margin-right: 0px;}
}
</style>