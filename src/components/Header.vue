<template>
	<header>
			<img src="../assets/AA.svg">
			<nav>
				<ul>
					<li><a class="link" @click="$emit('home')">Home</a></li>
					<li><a class="link" @click="$emit('experience')">Experience</a></li>
					<li><a class="link" @click="$emit('coding')">Projects</a></li>
					<li><a class="link" @click="$emit('design')">Design</a></li>
					<li><a class="link" href="../assets/ARNAUD_AVONDET_RESUME.pdf">Resume</a></li>
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
	margin: 20px;
	text-align: center;
	text-transform: uppercase;
	font-size: 1.2rem;
	position: sticky;
    top: 0;
	height: 120px;
	z-index: 3;
}
img {
	height: 50px;
}
.link {
	cursor: pointer;
	color: #bbb;
	font-size: 100%;
	text-decoration: none;
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