<template>
	<div class="s-router">
		<ul style="overflow: hidden">
			<li v-for="item in navs" :key="item.id" @click="jump(item.link)" :class="{activecheck: isRouterMatch(item.id),noactivecheck:!isRouterMatch(item.id)}">
				<i class="icon iconfont" :class="item.iname"></i>
				<img v-if="isRouterMatch(item.id)" class="" v-bind:src="item.inameact" alt="">
				<img v-else class="" v-bind:src="item.iname" alt="">
				<span>{{item.name}}</span>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
  data() {
    return {
      navs: [
        {
          name: "首页",
          iname: "../../static/img/home.png",
          inameact: "../../static/img/home_act.png",
          link: "/",
          id: "01"
        },
        {
          name: "全部课程",
          iname: "../../static/img/course.png",
          inameact: "../../static/img/course_act.png",
          link: "/allCourse",
          id: "02"
        },
        {
          name: "我的课程",
          iname: "../../static/img/all.png",
          inameact: "../../static/img/all_act.png",
          link: "/mycourses",
          id: "03"
        },
        {
          name: "个人中心",
          iname: "../../static/img/per.png",
          inameact: "../../static/img/per_act.png",
          link: "/courseIntroduce",
          id: "04"
        }
      ],
      selected: false
    };
  },
  methods: {
    // 是否匹配当前路由
    isRouterMatch(id) {
      return this.$route.meta.menuId === id;
    },
    // 跳转
    jump(link) {
      this.selected = !this.selected;
      this.$router.push(link);
      window.pageYOffset = 0;
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  }
};
</script>
<style lang="scss">
.m-tabbar {
  background: #f8f8f8 !important;
  height: 1.1rem !important;
  i {
    display: block;
    font-size: 0.4rem;
  }
  i.phone {
    display: block;
    font-size: 0.43rem;
    margin-top: -0.02rem;
  }
}
.s-router {
  height: 1.1rem !important;
  position: fixed;
  bottom: 0;
  background: #f6f6f6;
  width: 100%;
  z-index: 999;
  li {
    float: left;
    width: 25%;
    line-height: 0.55rem;
    text-align: center;
    padding-top: 0.08rem;
    i {
      display: block;
      font-size: 0.5rem;
    }
    span {
      margin-top: -0.05rem;
      display: block;
      font-size: 0.26rem;
    }
    span:nth-child(2n + 1) {
      margin-top: 0.05rem;
    }
    img {
      height: 0.5rem;
    }
  }
  li:nth-child(3) {
    i {
      /*font-size: 0.57rem;
				margin-bottom: 0.05rem*/
    }
  }
}
.activecheck {
  color: #ff5e3a;
}
.noactivecheck {
  color: #6d6d6d;
}
i.icon-global:before {
  display: block;
  margin-top: -0.05rem;
}
</style>