<template>
	<div :id="id" :style="{bottom:bottom}" class="mescroll"> <slot></slot></div>
</template>
<script>
import MeScroll from "mescroll";
export default {
  props: ["id", "bottom"],
  /* data(){
	  return {
		  id:this.props.id
	  }
  }, */
  mounted() {
    var self = this;
    self.mescroll = new MeScroll(this.id, {
      down: {
        use: false
      },
      up: {
        use: false,
        isBounce: false //此处禁止ios回弹,解析(务必认真阅读,特别是最后一点): http://www.mescroll.com/qa.html#q10
      }
    });
  }
};
</script>
<style>
.mescroll {
  position: absolute;
  top: 0;
  bottom: 1.1rem;
  left: 0;
  right: 0;
  height: auto;
  overflow-y: auto;
}
</style>

