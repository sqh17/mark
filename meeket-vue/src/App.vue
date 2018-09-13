<template>
	<div id="app">
		<router-view></router-view>
		<m-footer></m-footer>
	</div>
</template>

<script>
import mFooter from "./components/footer";
export default {
  name: "app",
  components: {},
  mounted() {
    let html = document.getElementById("html");
    let h =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight; //height
    html.style.height = h + "px";
  }
};
</script>
<style>
html {
  position: relative;
}
</style>


