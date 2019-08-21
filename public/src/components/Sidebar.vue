<template>
  <div id="sidebar">
		<i @click="active=!active" class="material-icons">menu</i>
    <vs-sidebar parent="body" default-index="1"  color="primary" class="sidebarx" spacer v-model="active">

      <div class="header-sidebar" slot="header">
        <vs-avatar  size="70px" src="../../profile.jpg"/>

        <h4>
          Arnaud Avondet
        </h4>

      </div>

      <vs-sidebar-item index="1">
        <i class="material-icons">home</i>
				Home
      </vs-sidebar-item>

      <vs-sidebar-item index="2">
        <i class="material-icons">work</i>
				Experiences
      </vs-sidebar-item>

      <vs-sidebar-item index="3">
				<i class="material-icons">web</i>
        Coding
      </vs-sidebar-item>

      <vs-sidebar-item index="4">
				<i class="material-icons">collections</i>
				Designs
      </vs-sidebar-item>

    </vs-sidebar>
  </div>
</template>

<script>
export default {
	data() {
		return {
			active: false
		}
	}
}
</script>

<style scoped>
.header-sidebar {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
}
.header-sidebar h4 {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
}
.header-sidebar h4 button {
	margin-left: 10px;
}
i {
	margin: 20px;
}
i:hover {
	color: white;
	cursor: pointer;
}
div *:hover {
	color: white;
	cursor: pointer;
}
</style>