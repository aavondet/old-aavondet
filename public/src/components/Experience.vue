<template>
  <div class="container">
    <section class="entry" v-for="job in jobs" v-bind:key="job.id">
      <div class="image">
        <img v-bind:src="job.image" >
      </div>
      <div class="info">
          <strong>{{job.position}}</strong>
          <i>{{job.company}}</i>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs : [
        {id: 1, company: "PLAID, Inc.", location: "Tokyo, Japan", position: "Developer Intern", image: "../../plaid.png"},
        {id: 2, company: "Expii", location: "Pittsburgh, PA", position: "Intern", image: "../../expii.png"}
      ]
    }
  },
  methods: {
 
  },
  computed: {

  }
}
</script>

<style scoped>
.container {
  text-align: center;
  padding-top: 10%; 
}
section {
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
}
.entry:hover > .info {
  animation: reveal 1.2s forwards ease-out;
}
strong {
  font-size: 24px;
}
i {
  font-size: 18px;
}
@keyframes reveal {
  0% {visibility: hidden; width: 0px;opacity: 0;margin-top: 0px;margin-left: 0px;margin-right: 0px;}
  45% {visibility: hidden; width: 400px;opacity: 0;margin-top: 20px;margin-left: 20px;margin-right: 20px;}
  55% {visibility: hidden; width: 400px;opacity: 0;margin-top: 20px;margin-left: 20px;margin-right: 20px;}
  100% {visibility: visible; width: 400px;opacity: 1;margin-top: 20px;margin-left: 20px;margin-right: 20px;}
}
@keyframes rreveal {
  0% {visibility: visible; width: 400px;opacity: 1;margin-top: 20px;margin-left: 20px;margin-right: 20px;}
  45% {visibility: hidden; width: 400px;opacity: 0;margin-top: 20px;margin-left: 20px;margin-right: 20px;}
  55% {visibility: hidden; width: 400px;opacity: 0;margin-top: 20px;margin-left: 20px;margin-right: 20px;}
  100% {visibility: hidden; width: 0px;opacity: 0;margin-top: 0px;margin-left: 0px;margin-right: 0px;}
}
</style>