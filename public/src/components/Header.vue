<template>
	<header>
			<img src="../../AA.svg">
			<nav>
				<ul>
					<li><router-link class="link" to="/">Home</router-link></li>
					<li><router-link class="link" to="/experience">Experience</router-link></li>
					<li><router-link class="link" to="/coding">Coding</router-link></li>
					<li><router-link class="link" to="/design">Design</router-link></li>
					<li><a class="link" href="../../ARNAUD_AVONDET_RESUME.pdf">Resume</a></li>
				</ul>
			</nav>
	</header>
</template>
    
<script>

export default {
    
}
</script>

<style scoped>
header {
	background-color: white;
	margin: 1em;
	text-align: center;
	text-transform: uppercase;
	font-size: 1.5rem;
}
img {
	height: 5%;
	margin-left: 60px;
}
.link {
	cursor: pointer;
	color: #bbb;
	font-size: 100%;
	text-decoration: none;
	border-radius: 5%;
	transition: 0.5s;
}
.link:hover,
.link:focus {
	color: rgba(140, 213, 101, 0.93);
	margin: 8px;
}
nav ul {
	margin: 0;
	padding: 0;
	list-style: none;
}
nav li {
	display: inline-block;
	margin: 1em;
}

</style>