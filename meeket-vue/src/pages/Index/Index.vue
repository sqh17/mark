<template>
<div class="mescroll">
          
        
	<div  id="dataList" class="index">
		<m-contain class="s-index-contain">
			<div>
				<div class="video-wrap" ref="ele">
					<div class="model" v-if="videoPlay">
						<div class="play" v-on:click="hideModel"></div>
					</div>
					<span class="share"><i class="icon-share"></i>分享</span>
				</div>
				<mt-navbar v-model="selected">
					<mt-tab-item id="1">简介</mt-tab-item>
					<mt-tab-item id="2">直播</mt-tab-item>
					<mt-tab-item id="3">问答</mt-tab-item>
					<mt-tab-item id="4">优惠</mt-tab-item>
				</mt-navbar>
			</div>
			<div class="div_bottom">
				<mt-tab-container v-model="selected" class="nav-content">
					<mt-tab-container-item id="1">
            <mecorll :id="id3">

                  <p class="informations">
                      主讲人信息，学历，教学经历，优秀直播老师，专业专心专注为您服务优秀是一种习惯，也是一种信仰。主讲人信息，学历，教学经历，优秀直播老师，
                    专业专心专注为您服务优秀是一种习惯，也是一种信仰。主讲人信息，学历，教学经历，优秀是一种习惯，也是一种信仰。学历，教学经历，优秀直播老师，
                    专业专心专注为您服务优秀是一种习惯，也是一种信仰。主讲人信息，学历，教学经历，优秀是一种习惯，也是一种信仰。学历，教学经历，优秀直播老师，
                    专业专心专注为
                    </p>
            </mecorll>

							
					</mt-tab-container-item>
					<mt-tab-container-item id="2">
            <mecorll :id="id4">
						  <img class="zhibo_img" v-bind:src="require('../../../static/img/zhibo.png')" alt="">
            </mecorll>
					</mt-tab-container-item>
					<!--问答区域-->
					<mt-tab-container-item id="3" style="paddingBottom:1.2rem;paddingTop:0.4rem;">
            <mecorll :id="id1" :bottom="bottom">
                <div style="height:auto">
                  <!--老师回复-->
                  <div class="dialog">
                    <div class="user">{{dialog[0].teacherName}}</div>
                    <div class="dia-content">
                      <p>{{dialog[0].studentName}}</p>
                        <p class="student">{{dialog[0].question}}</p>
                      <p class="teacher">{{dialog[0].answer}}</p>
                      <p class="time">{{dialog[0].time}}</p>
                      </div>
                  </div>
                  <!--学生提问-->
                  <div class="dialog s_dialog">
                    <div class="user">{{studentQuestion[0].studentName}}</div>
                    <div class="dia-content">
                      <p>{{studentQuestion[0].question}}</p>
                      <p class="time">{{studentQuestion[0].time}}</p>
                    </div>
                  </div>
                  <!--学生回复-->
                  <div class="dialog">
                    <div class="user">{{studentQuestionLast[0].studentName}}</div>
                    <div class="dia-content">
                      <p>{{studentQuestionLast[0].question}}</p>
                      <p class="time">{{studentQuestion[0].time}}</p>
                    </div>
                  </div>
                </div>
            
            </mecorll>
            
						
						<div class="ask">
							<input type="text" placeholder="提问"/>
							<p class="btn" id="money"></p>
							<p class="btn" id="thumbsUp"></p>
							<p class="btn" id="send"></p>
						</div>
					</mt-tab-container-item>
					<mt-tab-container-item id="4">
            <mecorll :id="id2">
              <div style="padding:.3rem">
                 <div class="item_box">
                  <div class="item_top">
                    <div class="item_left"><p></p> TOP <mt-badge size="small" color="#888">官方</mt-badge></div>
                    <div class="item_right">2018/02/08</div>
                  </div>
                  <div class="item_bottom">10:00</div>
                </div>
                <img class="zhibo_img" style="marginTop:.1rem" v-bind:src="require('../../../static/img/zhibo.png')" alt="">
              </div>
            </mecorll>
           
					</mt-tab-container-item>
				</mt-tab-container>
			</div>
				

		</m-contain>
		<m-footer></m-footer>
	</div>
</div>
</template>

<script>
//import IScroll from "./../../../static/iscroll.js";
import mContain from "../../components/container";
import mFooter from "../../components/footer";
import mecorll from "../../components/mescorll";
export default {
  name: "index",
  data() {
    return {
      mescroll: null,
      videoPlay: true, //video的确认按钮
      selected: "3", // tab选项卡默认选中状态
      id1: "mescroll",
      id2: "mescroll2",
      id3: "mescroll3",
      id4: "mescroll4",
      bottom: "2rem",
      dialog: [
        {
          id: "3",
          teacherName: "老师B",
          studentName: "学生A",
          question: "听老师讲课收获特别多,老师有相关的书记推荐吗？",
          answer: "稍后会在学习群里面介绍，请注意",
          time: "2:23PM"
        }
      ],
      studentQuestion: [
        {
          id: "1",
          studentName: "学生B",
          question: "稍后会在学习群里面介绍，请注意",
          time: "2:23PM"
        }
      ],
      studentQuestionLast: [
        {
          id: "1",
          studentName: "学生B",
          question: "稍后会在学习群里面介绍，请注意",
          time: "2:23PM"
        }
      ]
    };
  },
  components: {
    mContain,
    mFooter,
    mecorll
  },
  methods: {
    hideModel() {
      this.videoPlay = !this.videoPlay;
    }
  },
  mounted() {
    let ele = this.$refs.ele.offsetHeight;
  }
};
</script>
<style lang="scss">
.item_box {
  display: flex;
  flex-direction: column;
  .item_top {
    display: flex;
    justify-content: space-between;
    .item_right {
      color: #999;
      font-size: 10px;
    }
    .item_left {
      position: relative;
      padding-left: 5px;
      p {
        position: absolute;
        left: 0;
        top: 5%;
        border-left: 2px solid #ff5232;
        height: 80%;
      }
    }
  }
  .item_bottom {
    color: #333;
    font-size: 10px;
  }
}
/*修正全剧样式*/
.contain {
  margin: 0 0 !important;
}
.mint-badge.is-size-small {
  padding: 1px 6px;
  font-size: 10px;
}
.index {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.informations {
  padding: 0.4rem;
}
.zhibo_img {
  width: 100%;
  margin-top: 0.5rem;
}
.mint-tab-container-wrap {
  height: 100%;
}
.s-index-header {
  width: 100%;
  height: 0.94rem !important;
  line-height: 0.94rem !important;
  background: -webkit-linear-gradient(top, #02429b, #297ae8);
  color: #fff;
  font-size: 0.33rem;
  position: fixed;
  top: 0;
  z-index: 999;
  img {
    height: 0.6rem;
    width: 0.6rem;
    float: left;
    margin: 0.16rem;
  }
  h3 {
    line-height: 0.94rem;
    text-align: center;
    margin-right: 0.8rem;
    font-weight: normal;
  }
}
.s-index-contain {
  color: #8a8684;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  .div_bottom {
    flex: auto;
    overflow-y: auto;
    padding-bottom: 1.1rem;
    position: relative;
  }
  .video-wrap {
    width: 7.5rem;
    height: 5rem;
    background: rgba(0, 0, 0, 0.1);
    position: relative;
    .model {
      width: 7.5rem;
      height: 5rem;
      position: absolute;
      left: 0;
      top: 0;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      .play {
        width: 0.65rem;
        height: 0.65rem;
        background: url("../../../static/img/play.png") no-repeat center center;
        background-size: contain;
      }
    }
    .share {
      display: inline-block;
      /*width: 1.08rem;*/
      padding: 0 0.2rem;
      height: 0.6rem;
      background: #ff5333;
      line-height: 0.6rem;
      color: #fff;
      border-radius: 0.25rem;
      position: absolute;
      z-index: 10;
      right: 0.2rem;
      bottom: 0.2rem;
      text-align: center;
      .icon-share {
        display: inline-block;
        width: 0.28rem;
        height: 0.28rem;
        background: url("../../../static/img/share.png") no-repeat;
        background-size: contain;
      }
    }
  }

  .mint-navbar {
    box-shadow: 0 3px 3px rgba(255, 83, 51, 0.1);
  }
  .mint-tab-container {
    /*max-height: 4.5rem;*/
    overflow: scroll;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  .mint-tab-item {
    margin: 0 0.5rem;
    color: #8a8684;
  }
  .mint-navbar .mint-tab-item.is-selected {
    color: #191111;
    font-weight: bold;
    margin-bottom: 0;
    border-bottom: 3px solid #ff5232;
  }
  .nav-content {
    /*问答区域*/
    .dialog {
      padding: 0.2rem 0;
      display: flex;
      justify-content: flex-start;
      .user {
        margin: 0.2rem;
      }
      .dia-content {
        max-width: 4.7rem;
        padding: 0.2rem;
        line-height: 0.4rem;
        background: #eeeff1;
        border-radius: 0.2rem;
        color: #322c2c;
        .student {
          border-bottom: 1px dashed #dadadb;
          padding-bottom: 0.1rem;
        }
        .teacher {
          padding-top: 0.1rem;
        }
        .time {
          font-size: 0.22rem;
          text-align: right;
          padding-top: 0.07rem;
        }
      }
    }
    .s_dialog {
      flex-direction: row-reverse;
      .user {
      }
      .dia-content {
        background: #0096e5;
        color: #fff;
      }
    }
    .ask {
      width: 7.5rem;
      background: #fff;
      border-top: 1px solid #f8f8f9;
      /*height: 0.88rem;*/
      position: fixed;
      bottom: 1.1rem;
      padding-top: 0.1rem;
      padding-bottom: 0.1rem;
      input {
        width: 4.44rem;
        height: 0.68rem;
        border-radius: 0.2rem;
        background: #f8f8f9;
        border: none;
        outline: none;
        margin-left: 0.2rem;
        padding-left: 0.2rem;
      }
      z-index: 999;
      display: flex;
      justify-content: space-around;
      .btn {
        width: 0.6rem;
        height: 0.6rem;
        border-radius: 50%;
      }
      #money {
        background: url("../../../static/img/money.png") no-repeat;
        background-size: contain;
      }
      #thumbsUp {
        background: url("../../../static/img/thumb.png") no-repeat;
        background-size: contain;
      }
      #send {
        background: url("../../../static/img/send.png") no-repeat;
        background-size: contain;
      }
    }
  }
}
</style>
