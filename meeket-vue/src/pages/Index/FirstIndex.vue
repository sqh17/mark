<template>
    <div class="FirstIndex">
        <div class="swipe-wrapper">
            <mt-swipe :auto="4000" :show-indicators="false">
                <mt-swipe-item v-for="(bannerUrl,index) in bannerUrlArr" :key="index">
                    <img width="100%" :src="bannerUrl.bannerUrl" alt="">
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <div class="qualityCourseWrap clearfix">
            <div class="qualityCourseTitle">
                <span class="titleLeft"></span>
                <span>精品课程</span>
            </div>
            <div class="qualityCourseContentWarp clearfix">
                <div class="qualityCourseContent" v-for="(item,index) in qualityCourseUrlArr" :key="index">
                    <img width="100%" :src="item.imgUrl" alt="">
                    <div class="icon" :class="{isShow: item.isShow}">
                        <img width="100%" :src="item.iconUrl" alt="">
                    </div>
                </div>
            </div>
            <div class="qualityCourseIntrodouceWarp clearfix">
                <div class="qualityCourseIntrodouce" v-for="(introdouce,index) in qualityCourseArr" :key="index">
                    <p class="bold">{{introdouce.title}}</p>
                    <p class="gray">{{introdouce.introduce}}</p>
                </div>
            </div>
        </div>
        <div class="qualityCourseWrap clearfix">
            <div class="qualityCourseTitle">
                <span class="titleLeft"></span>
                <span>热度直播</span>
            </div>
            <div class="qualityCourseContentWarp clearfix">
                <div class="qualityCourseContent" v-for="(item,index) in hotLiveUrlArr" :key="index">
                    <img width="100%" :src="item.imgUrl" alt="">
                    <div class="icon" :class="{isShow: item.isShow}">
                        <img width="100%" :src="item.iconUrl" alt="">
                    </div>
                </div>
            </div>
            <div class="qualityCourseIntrodouceWarp clearfix">
                <div class="qualityCourseIntrodouce" v-for="(introdouce,index) in hotLiveArr" :key="index">
                    <p class="bold">{{introdouce.title}}</p>
                    <p class="gray">{{introdouce.introduce}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      bannerUrlArr: [
        { bannerUrl: "../../static/img/icon-banner.png", inner: 1 },
        { bannerUrl: "../../static/img/icon-banner.png", inner: 2 },
        { bannerUrl: "../../static/img/icon-banner.png", inner: 3 }
      ],
      qualityCourseUrlArr: [
        {
          imgUrl: "../../static/img/icon-banner.png",
          iconUrl: "../../static/img/icon-free.png",
          isShow: true
        },
        {
          imgUrl: "../../static/img/icon-banner.png",
          iconUrl: "../../static/img/icon-vip.png",
          isShow: true
        }
      ],
      qualityCourseArr: [
        {
          title: "前端开发介绍",
          introduce: "#设计 #Adobe"
        },
        {
          title: "前端开发介绍",
          introduce: "#Adobe"
        }
      ],
      hotLiveUrlArr: [
        {
          imgUrl: "../../static/img/icon-banner.png",
          iconUrl: "../../static/img/icon-shop.png",
          isShow: true
        },
        {
          imgUrl: "../../static/img/icon-banner.png",
          iconUrl: "../../static/img/icon-vip.png",
          isShow: false
        }
      ],
      hotLiveArr: [
        {
          title: "前端开发介绍",
          introduce: "#设计 #Adobe"
        },
        {
          title: "前端开发介绍",
          introduce: "#Adobe"
        }
      ]
    };
  },
  components: {}
};
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}
.clearfix:after {
  display: block;
  clear: both;
  content: "";
  visibility: hidden;
  height: 0;
}
.clearfix {
  zoom: 1;
}
.swipe-wrapper {
  width: 100%;
  height: 4.19rem;
  margin-bottom: 0.2rem;
}
.swip-item-1 {
  background: red;
}
.swip-item-2 {
  background: blue;
}
.swip-item-3 {
  background: green;
}
.item {
  text-align: center;
  font-size: 40px;
  color: white;
}

.qualityCourseWrap {
  width: 100%;
  padding: 0.1rem 0.2rem;
  margin-bottom: 0.25rem;
  color: #1b0f0f;
  .qualityCourseTitle {
    width: 100%;
    height: 0.4rem;
    font-weight: bold;
    line-height: 0.4rem;
    .titleLeft {
      padding: 0.13rem 0.05rem;
      background: #ff5e3a;
      display: inline-block;
      margin-top: 0.1rem;
    }
  }
  .qualityCourseContentWarp {
    margin-top: 0.2rem;
  }
  .qualityCourseContent {
    float: left;
    width: 48.5%;
    height: 1.97rem;
    background-color: #000;
    position: relative;
  }
  .icon {
    position: absolute;
    right: 0;
    top: 0.2rem;
    width: 0.93rem;
    height: 0.3rem;
    display: none;
  }
  .qualityCourseContent:nth-child(1) {
    margin-right: 3%;
  }
  .qualityCourseIntrodouce {
    margin-top: 0.2rem;
    width: 48.5%;
    height: 0.76rem;
    float: left;
  }
  .qualityCourseIntrodouce:nth-child(1) {
    margin-right: 3%;
  }
  .bold {
    font-weight: bold;
    font-size: 0.3rem;
  }
  .gray {
      color: #b2afae;
  }
  .isShow {
    display: block;
  }
}
</style>
