<template>
  <div class="page-navbar allCourse">
    <div class="page-search">
      <mt-search v-model="value"></mt-search>
    </div>
    <!-- navbar -->
    <mt-navbar class="page-part" v-model="selected">
      <mt-tab-item id="1">
        <span>即将开始</span>
      </mt-tab-item>
      <mt-tab-item id="2">
        <span>精彩回顾</span>
      </mt-tab-item>
    </mt-navbar>
    <div class="gradient"></div>
    <div class="nav_wrap">
      <ul class="nav_mine clearfix">
        <li class="nav_item" v-for='(data,index) in navArr' :key="index" @click="addClassFun(index)" :class="{selected:index == qw}">{{data.title}}</li>
      </ul>
      <div class="icon_arrow_down">
        <img width="100%" src="../../../static/img/icon-arrow-down.png" alt="">
      </div>
    </div>
  
    <!-- tabcontainer -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <div class="course-lis">
                  <div class="left">
                    <img src="../../../static/img/icon-banner.png" alt="">
                    <img  class="icon" src="../../../static/img/icon-vip.png" alt="">
                  </div>
                  <div class="middle title">
                    <h3>虚拟现实介绍与环境</h3>
                    <h5>直播中</h5>
                    <p> 
                      <span>#设计</span>   
                      <span>#Adobe</span>  
                    </p>
                  </div>
                  <div class="right title">
                    <h5>
                      <h3>¥200</h3>
                      <span>原价</span>
                      <s>¥300</s>
                    </h5>
                    <p>   
                      <span>1800人在看</span>  
                    </p>
                  </div>
              </div>
        <div class="course-lis">
                  <div class="left">
                    <img src="../../../static/img/icon-banner.png" alt="">
                    <img  class="icon" src="../../../static/img/icon-vip.png" alt="">
                  </div>
                  <div class="middle title">
                    <h3>了解入门人物摄影知识</h3>
                    <h5>01:50:30 即将开始</h5>
                    <p> 
                      <span>#设计</span>   
                      <span>#Adobe</span>  
                    </p>
                  </div>
                  <div class="right title">
                    <p class="word-select">已购</p>
                    <p>   
                      <span>4444人在看</span>  
                    </p>
                  </div>
              </div>
        <div class="course-lis" v-for="(data,index) in courseData" :key="index">
          <div class="left">
            <img :src="data.imgUrl" alt="">
            <img class="icon" src="../../../static/img/icon-vip.png" v-if="data.status === 1">
            <!-- <img  class="icon" src="../../../static/img/icon-shop.png" v-else-if="data.status === 2"> -->
            <!-- <img  class="icon" src="../../../static/img/icon-free.png" v-else> -->
          </div>
          <div class="middle title">
            <h3>{{data.title}}</h3>
            <h5 :class="{green:data.time == '直播中'}">{{data.time}}</h5>
            <p class="classfiy-css">
              <span v-for="(item,id) in data.classfiy" :key="id">{{item}}</span>
            </p>
          </div>
          <div class="right title">
            <h5 v-if="data.status === 1">
              <h3>¥&nbsp;{{data.nowPrice}}</h3>
              <span>原价</span>
              <s>¥&nbsp;{{data.previousPrice}}</s>
            </h5>
            <p class="word-select" v-else-if="data.status === 4" :class="{red:data.status === 4}">¥&nbsp;{{data.nowPrice}}</p>
            <p class="word-select" v-else>{{data.statusWord}}</p>
            <p>
              <span>{{data.numbers}}人在看</span>
            </p>
          </div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell v-for="n in 100" :key="n" :title="'测试 ' + n" />
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
export default {
  name: 'page-navbar',

  data() {
    return {
      selected: '1',
      value: '',
      result: [
        {
          title: 'js',
          value: '12',
        },
        {
          title: 'jquery',
          value: '10',
        },
      ],
      navArr: [
        {
          title: '全部',
          id: '0',
        },
        {
          title: 'Adobe',
          id: '1',
        },
        {
          title: '微软',
          id: '2',
        },
        {
          title: '会计',
          id: '3',
        },
        {
          title: '绘画',
          id: '4',
        },
      ],
      qw: '0',
      // 根据传来的数据进行页面的渲染，status代表1=>未购（详细价格），2=>已购，3=>免费,4=>未购（简略价格）
      courseData: [
        {
          id: 1,
          imgUrl: '../../static/img/icon-banner.png',
          iconUrl: '../../static/img/icon-vip.png',
          isShow: true,
          title: '手机调制LOMO效果照片',
          time: '直播中',
          classfiy: ['#设计', '#Adobe'],
          nowPrice: 200,
          previousPrice: 300,
          status: 1,
          statusWord: '未购',
          numbers: 1444,
        },
        {
          id: 2,
          imgUrl: '../../static/img/icon-banner.png',
          // iconUrl: "../../static/img/icon-vip.png",
          // isShow: true,
          title: '了解入门人物摄影知识',
          time: '01:50:30 即将开始',
          classfiy: ['#设计', '#Adobe'],
          nowPrice: 200,
          previousPrice: 300,
          status: 2,
          statusWord: '已购',
          numbers: 4444,
        },
        {
          id: 3,
          imgUrl: '../../static/img/icon-banner.png',
          // iconUrl: "../../static/img/icon-vip.png",
          // isShow: true,
          title: '前端开发介绍',
          time: '4.2 14:00-4.4 16:00',
          classfiy: ['#设计', '#Adobe'],
          nowPrice: 200,
          previousPrice: 300,
          status: 3,
          statusWord: '免费',
          numbers: 4444,
        },
        {
          id: 3,
          imgUrl: '../../static/img/icon-banner.png',
          // iconUrl: "../../static/img/icon-vip.png",
          // isShow: true,
          title: '手机调制LOMO效果照片',
          time: '4.2 14:00-4.4 16:00',
          classfiy: ['#设计', '#Adobe'],
          nowPrice: 200,
          previousPrice: 300,
          status: 3,
          statusWord: '免费',
          numbers: 4444,
        },
        {
          id: 3,
          imgUrl: '../../static/img/icon-banner.png',
          // iconUrl: "../../static/img/icon-vip.png",
          // isShow: true,
          title: '前端开发介绍',
          time: '4.2 14:00-4.4 16:00',
          classfiy: ['#设计', '#Adobe'],
          nowPrice: 200,
          previousPrice: 300,
          status: 3,
          statusWord: '免费',
          numbers: 4444,
        },
        {
          id: 3,
          imgUrl: '../../static/img/icon-banner.png',
          // iconUrl: "../../static/img/icon-vip.png",
          // isShow: true,
          title: '前端开发介绍',
          time: '4.2 14:00-4.4 16:00',
          classfiy: ['#设计', '#Adobe'],
          nowPrice: 50,
          previousPrice: 300,
          status: 4,
          statusWord: '免费',
          numbers: 4444,
        },
        {
          id: 3,
          imgUrl: '../../static/img/icon-banner.png',
          // iconUrl: "../../static/img/icon-vip.png",
          // isShow: true,
          title: '前端开发介绍1',
          time: '4.2 14:00-4.4 16:00',
          classfiy: ['#设计', '#Adobe'],
          nowPrice: 60,
          previousPrice: 300,
          status: 4,
          statusWord: '免费',
          numbers: 4444,
        },
      ],
    };
  },
  methods: {
    addClassFun(index) {
      console.log(index);
      this.qw = index;
    },
  },
};
</script>

<style lang="scss" scoped>
.gradient {
  width: 100%;
  height: 0.1rem;
  background: -webkit-linear-gradient(#f3a998, rgba(243, 169, 152, 0.1));
  background: -o-linear-gradient(#f3a998, rgba(243, 169, 152, 0.1));
  background: -moz-linear-gradient(#f3a998, rgba(243, 169, 152, 0.1));
  background: -mos-linear-gradient(#f3a998, rgba(243, 169, 152, 0.1));
  background: linear-gradient(#f3a998, rgba(243, 169, 152, 0.1));
}

.mint-navbar {
  a {
    color: #cecccc;
    font-size: 0.28rem;
    .mint-tab-item-label {
      font-size: 0.28rem;
    }
    span {
      font-size: 0.28rem;
    }
  }
  a.is-selected {
    span {
      display: inline-block;
      padding-bottom: 0.1rem;
      border-bottom: 0.1rem solid #ff5e3a;
      font-size: 0.32rem;
      font-weight: bold;
    }
    color: #1b0f0f;
    font-size: 0.26rem;
    border: none;
    .mint-tab-item-label {
      font-size: 0.28rem;
    }
  }
  .mint-tab-item {
    padding: 8px 0px 3px 0px;
  }
}

.mint-search-list {
  z-index: 10;
}

.clearfix:after {
  display: block;
  clear: both;
  content: '';
  visibility: hidden;
  height: 0;
}

.clearfix {
  zoom: 1;
}

.nav_mine {
  width: 100%;
  padding: 0.15rem 0.2rem;
  border-bottom: 1px solid #aca9a7;
  .nav_item {
    float: left;
    border: 1px solid #aca9a7;
    padding: 0.1rem 0.25rem;
    border-radius: 0.4rem;
    color: #aca9a7;
    margin-right: 0.15rem;
    // margin-bottom: 0.2rem;
    // cursor: pointer;
  }
  .selected {
    color: #fff;
    background-color: #95918f;
  }
}

.nav_wrap {
  position: relative;
  z-index: 10;
  .icon_arrow_down {
    width: 0.2rem;
    height: 0.4rem;
    position: absolute;
    right: 0.3rem;
    top: 0.3rem;
  }
}

.course-lis {
  height: 2.02rem;
  border-bottom: 1px solid #eae9e9;
  box-sizing: border-box;
  padding: 0.2rem;
  display: flex;
  .left {
    flex: 1;
    position: relative;
    img {
      width: 2.15rem;
      height: 1.6rem;
    }
    .icon {
      position: absolute;
      right: 0;
      top: 0.2rem;
      width: 0.93rem;
      height: 0.3rem;
    }
  }
  .title {
    flex: 2;
    padding-left: 0.2rem;
    h3 {
      font-size: 0.28rem;
      font-weight: 700;
    }
    h5 {
      font-size: 0.24rem;
      font-weight: 100;
      color: #95918f;
      margin-top: 0.1rem;
    }
    .green {
      color: #68af48;
    }
    .red {
      color: #ff5e3a !important;
    }
    p {
      font-size: 0.2rem;
      color: #95918f;
      margin-top: 0.15rem;
    }
    .word-select {
      height: 0.9rem;
      font-size: 0.36rem;
      line-height: 3.7;
      color: #68af48;
      // text-align: center;
    }
  }
  .right {
    flex: 1;
    padding: 0;
    text-align: center;
    h3 {
      color: #ff5e3a;
      font-size: 0.36rem;
      line-height: 1.3;
      margin-top: 0.22rem;
    }
    h5 {
      font-size: 0.1958rem;
      color: #95918f;
    }
    p {
      color: #a8a5a3;
    }
  }
}

.mint-tab-container-item {
  height: calc(100vh - 0.92rem - 0.68rem - 0.1rem - 0.98rem - 1.1rem);
  overflow-y: auto;
}
.classfiy-css {
  span {
    margin-left: 0.05rem;
    &:first-child {
      margin-left: 0;
    }
  }
}
</style>
<style lang="scss">
.allCourse {
  .page-search {
    .mint-search {
      height: 100%;
    }
    .mint-searchbar-inner {
      height: 0.6rem;
      background-color: #eff0f0;
      border-radius: 0.2rem;
    }
    .mint-searchbar {
      background: transparent;
    }
    .mint-searchbar-core {
      background-color: #eff0f0;
      color: #c0c3c9;
    }
    .mint-searchbar-cancel {
      color: #ff5e3a;
    }
  }
}
</style>


