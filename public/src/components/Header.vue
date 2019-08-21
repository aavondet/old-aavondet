<template>
	<header>
		<Sidebar></Sidebar>
		<ul>
			<li><i src="../../favicon.ico"></i></li>
			<li>Header</li>
		</ul>
	</header>
</template>
    
<script>
import Sidebar from './Sidebar.vue'

export default {
  components: { Sidebar }
    
}
</script>

<style scoped>
header {
	background-color: greenyellow;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	height: 80px;
	display: flex;
	align-items: center;
	box-shadow: 0 0 25px 0 black;
}
header * {
  display: inline;
}
header li {
    margin: 20px;
}
</style>