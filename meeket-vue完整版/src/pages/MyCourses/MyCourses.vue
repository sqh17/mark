<template>
  <div class="my-course ">
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
        <!-- <div class="course-lis">
          <div class="left">
            <img src="../../../static/img/icon-banner.png" alt="">
          </div>
          <div class="middle title">
            <h3>手机调制LOMO效果照片</h3>
            <h5>3.24 12:00 开始</h5>
            <p> 
              <span>#设计</span>   
              <span>#Adobe</span>  
            </p>
          </div>
          <div class="right title">
            <p class="timing">
              即将开始 01:55:00
            </p>
            <div class="enter-btn now-enter-btn">签到进入</div>
          </div>
        </div>
        <div class="course-lis">
          <div class="left">
            <img src="../../../static/img/icon-banner.png" alt="">
          </div>
          <div class="middle title">
            <h3>如何设计图标</h3>
            <h5>4.6 09:00 - 5.6 12:00</h5>
            <p> 
              <span>#设计</span>   
              <span>#Adobe</span>  
            </p>
          </div>
          <div class="right title">
            <p class="timing" v-if="false">
              即将开始 01:55:00
            </p>
            <div class="enter-btn">签到进入</div>
          </div>
        </div> -->
        <div class="course-lis" v-for="(data,index) in mycourseData" :key="index">
          <div class="left">
            <img :src="data.imgUrl">
          </div>
          <div class="middle title">
            <h3>{{data.title}}</h3>
            <h5>{{data.time}}</h5>
            <p class="classfiy-css">
              <span v-for="(item,id) in data.classfiy" :key="id">{{item}}</span>   
            </p>
          </div>
          <div class="right title" v-if="data.status === 1">
            <p class="timing">
              即将开始<br>
              {{hour}}:{{minute}}:{{second}}
              <!-- {{data.nowTime}} -->
            </p>
            <div class="enter-btn now-enter-btn" v-on:click="go('CourseIntroduce')">签到进入</div>
          </div>
          <div class="right title" v-else>
            <div class="enter-btn"  v-on:click="go('CourseIntroduce')">签到进入</div>
          </div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <div class="course-lis" v-for="(data,index) in mycourseData2" :key="index">
          <div class="left">
            <img :src="data.imgUrl">
            <img class="icon" src="../../../static/img/icon-vip.png" v-if="data.showIcon">
          </div>
          <div class="middle title">
            <h3>{{data.title}}</h3>
            <h5>{{data.time}}</h5>
            <p class="classfiy-css">
              <span v-for="(item,id) in data.classfiy" :key="id">{{item}}</span>   
            </p>
          </div>
          <div class="right title" v-if="data.status === 1">
            <div class="enter-btn">立即进入</div>
          </div>
          <div class="right title" v-else>
            <div class="enter-btn">查看回放</div>
          </div>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
  export default {
    name: "MyCourse",
  
    data() {
      return {
        selected: "1",
        value: "",
        result: [{
            title: "js",
            value: "12"
          },
          {
            title: "jquery",
            value: "10"
          }
        ],
        navArr: [{
            title: "全部",
            id: "0"
          },
          {
            title: "Adobe",
            id: "1"
          },
          {
            title: "微软",
            id: "2"
          },
          {
            title: "会计",
            id: "3"
          },
          {
            title: "绘画",
            id: "4"
          }
        ],
        qw: "0",
        // 根据传来的数据进行页面的渲染
        mycourseData: [{
            id: 1,
            imgUrl: "../../static/img/icon-banner.png",
            title: '手机调制LOMO效果照片',
            time: '3.24 12:00 开始',
            classfiy: ['#设计', '#Adobe'],
            status: 1,
            nowTime:'即将开始 01:55:00'
          },
          {
            id: 2,
            imgUrl: "../../static/img/icon-banner.png",
            title: '如何设计图标',
            time: '4.6 09:00 - 5.6 12:00',
            classfiy: ['#设计', '#Adobe'],
            status: 2,
            nowTime:'即将开始 01:55:00'
          },
          {
            id: 3,
            imgUrl: "../../static/img/icon-banner.png",
            title: '相机光圈的秘密系列课',
            time: '5.8 10:00 开始',
            classfiy: ['#摄影','#器材','#技巧'],
            status: 2,
            nowTime:'即将开始 01:55:00'
          },
          {
            id: 4,
            imgUrl: "../../static/img/icon-banner.png",
            title: '手机调制LOMO效果照片',
            time: '3.24 12:00 开始',
            classfiy: ['#设计', '#Adobe'],
            status: 1,
            nowTime:'即将开始 01:55:00'
          },
          {
            id: 5,
            imgUrl: "../../static/img/icon-banner.png",
            title: '如何设计图标',
            time: '4.6 09:00 - 5.6 12:00',
            classfiy: ['#设计', '#Adobe'],
            status: 2,
            nowTime:'即将开始 01:55:00'
          },
          {
            id: 6,
            imgUrl: "../../static/img/icon-banner.png",
            title: '相机光圈的秘密系列课1',
            time: '5.8 10:00 开始',
            classfiy: ['#摄影','#器材','#技巧'],
            status: 2,
            nowTime:'即将开始 01:55:00'
          },
        ],
        mycourseData2: [{
            id: 1,
            imgUrl: "../../static/img/icon-banner.png",
            title: '手机调制LOMO效果照片',
            time: '3.24 12:00 开始',
            classfiy: ['#设计', '#Adobe'],
            status: 1,
            nowTime:'即将开始 01:55:00',
            showIcon:false,
            startTime:'2018-05-23 15:00'
          },
          {
            id: 2,
            imgUrl: "../../static/img/icon-banner.png",
            title: '如何设计图标',
            time: '4.6 09:00 - 5.6 12:00',
            classfiy: ['#设计', '#Adobe'],
            status: 2,
            nowTime:'即将开始 01:55:00',
            showIcon:false,
          },
          {
            id: 3,
            imgUrl: "../../static/img/icon-banner.png",
            title: '相机光圈的秘密系列课',
            time: '5.8 10:00 开始',
            classfiy: ['#摄影','#器材','#技巧'],
            status: 2,
            nowTime:'即将开始 01:55:00',
            showIcon:false,
          },{
            id: 4,
            imgUrl: "../../static/img/icon-banner.png",
            title: '手机调制LOMO效果照片',
            time: '3.24 12:00 开始',
            classfiy: ['#设计', '#Adobe'],
            status: 2,
            nowTime:'即将开始 01:55:00',
            showIcon:true,
          },
          {
            id: 5,
            imgUrl: "../../static/img/icon-banner.png",
            title: '如何设计图标',
            time: '4.6 09:00 - 5.6 12:00',
            classfiy: ['#设计', '#Adobe'],
            status: 2,
            nowTime:'即将开始 01:55:00',
            showIcon:false,
          },
          {
            id: 6,
            imgUrl: "../../static/img/icon-banner.png",
            title: '相机光圈的秘密系列课',
            time: '5.8 10:00 开始',
            classfiy: ['#摄影','#器材','#技巧'],
            status: 2,
            nowTime:'即将开始 01:55:00',
            showIcon:false,
          },{
            id: 7,
            imgUrl: "../../static/img/icon-banner.png",
            title: '手机调制LOMO效果照片',
            time: '3.24 12:00 开始',
            classfiy: ['#设计', '#Adobe'],
            status: 1,
            nowTime:'即将开始 01:55:00',
            showIcon:false,
          }
        ],
        hours:0,
        minutes: 1,
        seconds: 5,
      };
    },
    methods: {
      // 倒计时
      num: function (n) {
        return n < 10 ? '0' + n : '' + n
      },
      startTime: function () {
        var _this = this
        var time = window.setInterval(function () {
          if(_this.hours !== 0 && _this.minutes === 0 && _this.seconds === 0){
            _this.minutes = 59
            _this.seconds = 59
            _this.hours -= 1
          } else if (_this.seconds === 0 && _this.minutes !== 0) {
            _this.seconds = 59
            _this.minutes -= 1
          } else if (_this.minutes === 0 && _this.seconds === 0 && _this.hours === 0) {
            _this.seconds = 0
            window.clearInterval(time)
          } else {
            _this.seconds -= 1
          }
        }, 1000)
      },
      // 切换tabs
      addClassFun(index) {
        this.qw = index
      },
      //路由跳转
      go (urlName) {
        this.$router.push({name:urlName})
        window.pageYOffset = 0
        document.documentElement.scrollTop = 0
        document.body.scrollTop = 0
      }
    },
    mounted () {
      this.startTime()
    },
    computed: {
      hour(){
        return this.num(this.hours)
      },
      second() {
        return this.num(this.seconds)
      },
      minute() {
        return this.num(this.minutes)
      }
    }
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
    content: "";
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
    padding: .2rem;
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
      padding-left: .2rem;
      h3 {
        font-size: .28rem;
        font-weight: 700;
      }
      h5 {
        font-size: .24rem;
        font-weight: 100;
        color: #95918f;
        margin-top: .1rem;
      }
      .green {
        color: #68af48;
      }
      .red {
        color: #ff5e3a !important;
      }
      p {
        font-size: .2rem;
        color: #95918f;
        margin-top: .15rem;
      }
      .word-select {
        height: .9rem;
        font-size: .36rem;
        line-height: 3.7;
        color: #68af48;
      }
    }
    .right {
      flex: 1;
      padding: 0;
      text-align: center;
      .timing{
        color:#ff5e3a;
        font-size: .26rem;
        margin-top: 0.1rem;
      }
      .enter-btn{
        width:1.4rem;
        height:.52rem;
        border:1px solid #ff5e3a;
        border-radius: .4rem;
        text-align: center;
        line-height: .52rem;
        color:#ff5e3a;
        margin: calc(50% - .53rem/2) 0 0 .1rem;
      }
      .now-enter-btn{
        background:#ff5e3a;
        color:#fff;
        margin: .1rem 0 0 .1rem;
      }
    }
  }
  
  .mint-tab-container-item {
    height: calc(100vh - .92rem - .68rem - .1rem - .98rem - 1.1rem);
    overflow-y: auto;
  }
  .classfiy-css{
    span{
      margin-left: .05rem;
      &:first-child{
        margin-left: 0;
      }
    }
  }
</style>
<style lang="scss">
.my-course{
  .page-search{
    .mint-search {
      height: 100%;
    }
    .mint-searchbar-inner{
      height: .6rem;
      background-color: #eff0f0;
      border-radius:.2rem;
    }
    .mint-searchbar {
      background:transparent;
    }
    .mint-searchbar-core{
      background-color: #eff0f0;
      color:#c0c3c9;
    }
    .mint-searchbar-cancel{
      color:#ff5e3a;
    }
  }
}

  
</style>


