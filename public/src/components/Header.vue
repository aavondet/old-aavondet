<template>
	<header>
			<img src="../../favicon.png">
			<nav>
				<router-link class="link" to="/">Home</router-link>
				<router-link class="link" to="/experience">Experience</router-link>
				<router-link class="link" to="/coding">Coding</router-link>
				<router-link class="link" to="/design">Design</router-link>
				<a class="link" href="../../ARNAUD_AVONDET_RESUME.pdf">Resume</a>
			</nav>
	</header>
</template>
    
<script>

export default {
    
}
</script>

<style scoped>
header {
	font: Arial;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	height: 10%;
	display: flex;
	align-items: center;
	text-align: center;
	z-index: 2;
}
header .link {
  margin: 20px;
}
img {
	height: 50%;
	margin-left: 60px;
}
.link {
	cursor: pointer;
	color: #bbb;
	font-size: 100%;
	text-decoration: none;
}
.link:hover {
	color: greenyellow;
	-webkit-transition: color 0.5s; 
  transition: color 0.5s;
}
nav {
	display: inline-block;
	float: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>