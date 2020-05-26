<template>
  <section class="container">
    <div id="title"><b>Past Projects</b></div>
    <div class="entry" v-for="project in projects" :key="project.id">
      <div class="image">
        <a :href="project.link"><img :src="project.image"></a>
      </div>
      <div class="info">
          <strong>{{project.title}}</strong>
          <p>{{project.description}}</p>
      </div>
    </div>
    
  </section>
</template>

<script>
import projects from '../projects.json'

export default {
  data () {
    return {
      projects
    }
  }
}
</script>

<style scoped>
.container {
  text-align: center;
  padding-top: 5%;
  padding-bottom: 5%;
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
    height: 350px;
    opacity: 1;
    margin-top: 20px;
  }
}
@media (min-width: 1075px) {
  .entry > .info {
    vertical-align: top;
    display: inline-block;
    text-align: left;
    margin-bottom: 0px;
    overflow: hidden;
    width: 450px;
    height: 270px;
    margin: 20px;
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
  transition-duration: 0.8s;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 350px;
  display: inline-block;
}
.image:hover {
  cursor: pointer;
  transition-duration: 0.8s;
}
strong {
  font-size: 30px;
  display: block;
}
</style>