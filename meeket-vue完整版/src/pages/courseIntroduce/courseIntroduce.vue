<template>
	<div class="courseIntroduce">
		<m-header title="课程介绍">
            <i class="mintui mintui-back ml20" slot="left"></i>
        </m-header>
		<m-contain class="warp">
			<div class="images"></div>
			<div class="mian-con">
				<h3>主讲人</h3>
				<div class="s-contain">
					<div class="s-contain-title clearfix">
						<mt-navbar v-model="selected" class="tabs">
							<div class="top-tabs" v-for="item in tabsData" :key="item.id" :class="{isSelected:active==item.id}" @click="tabsClick(item.id)" :ref="item.id">{{item.name}}</div>
						</mt-navbar>
					</div>
					<!-- tab-container -->
					<mt-tab-container v-model="selected">
						<mt-tab-container-item id="introduction">
							<p class="informations">
								主讲人信息，学历，教学经历，优秀直播老师，专业专心专注为您服务优秀是一种习惯，也是一种信仰。主讲人信息，学历，教学经历，优秀直播老师，
							专业专心专注为您服务优秀是一种习惯，也是一种信仰。主讲人信息，学历，教学经历，优秀是一种习惯，也是一种信仰。学历，教学经历，优秀直播老师，
							专业专心专注为您服务优秀是一种习惯，也是一种信仰。主讲人信息，学历，教学经历，优秀是一种习惯，也是一种信仰。学历，教学经历，优秀直播老师，
							专业专心专注为
							</p>

						</mt-tab-container-item>
						<mt-tab-container-item id="catalogue">
							2
						</mt-tab-container-item>
					</mt-tab-container>
					<!--<div class="add"></div>-->
				</div>
			</div>
			<div class="bot-fixed">
				<p>
					333 人&nbsp;已签入
				</p>
				<p @click="dialog">
					签入
				</p>
			</div>
		</m-contain>
		<m-footer></m-footer>
		<mt-popup
			v-model="popupVisible"
			popup-transition="popup-fade">
			<div class="tel-dialog">
				<div class="img_bg"></div>
				<div class="title_lg">您未报名</div>
				<div class="title_sm">补全报名信息签入</div>
				<mt-field label="姓名" placeholder="" v-model="username"></mt-field>
				<mt-field label="单位" placeholder="" v-model="unitname"></mt-field>
				<mt-field label="职位" placeholder="" v-model="wordname"></mt-field>
				<mt-field label="手机" placeholder="" v-model="phone"></mt-field>
				<mt-field label="验证码" placeholder="" v-model="code"><div class="code_btn" @click="codeBtn">发送验证码 <span v-if="mycode<60">{{mycode}}</span></div></mt-field>
				<mt-field label="验证码" v-if="isCodeOk>=3"  placeholder="" v-model="codeOk"><div class="code_btn">验证码</div></mt-field>
				<p @click="dialog1">确认</p>

			</div>
		</mt-popup>
		<mt-popup
			v-model="popupVisible1"
			popup-transition="popup-fade">
			<div class="tel-dialog">
				<div class="img_bg"></div>
				<div class="title_lg">签到</div>
				<mt-field label="手机" placeholder="" v-model="phone"></mt-field>
        <mt-field label="验证码" placeholder="" v-model="code1"><div class="code_btn" @click="codeBtn1">发送验证码 <span v-if="mycode1<60">{{mycode1}}</span></div></mt-field>
				<p @click="dialog">
					签入
				</p>

			</div>
		</mt-popup>
	</div>
</template>

<script>
import mHeader from "../../components/header";
import mContain from "../../components/container";
import mFooter from "../../components/footer";
import { Toast } from "mint-ui";
window.isCode = true;
window.isCodeNum = 60;
window.isCodeTime = null;
window.isCode1 = true;
window.isCodeNum1= 60;
window.isCodeTime1 = null;
export default {
  name: "CourseIntroduce",
  data() {
    return {
      selected: "introduction",
      tabsData: [
        { id: "introduction", name: "介绍" },
        { id: "catalogue", name: "目录" }
      ],
      active: "introduction",
      total: 0,
      popupVisible: false,
      popupVisible1: false,
      isCodeOk: 0,
      username: "",
      phone: "",
      unitname: "",
      code: "",
      code1: "",
      codeOk: "",
      wordname: "",
      mycode: 60,
      mycode1: 60,
    };
  },
  components: {
    mHeader,
    mContain,
    mFooter
  },
  created() {
    // 如果目录只有一节课，则隐藏tabs
    if (this.total == 0) {
      this.tabsData.length = 0;
    }
  },
  methods: {
    // tabs切换
    tabsClick(id) {
      this.active = id;
      this.selected = id;
    },
    // 手机号弹窗
    dialog() {
      this.popupVisible = true;
    },
    // 手机号弹窗
    dialog1() {
      this.popupVisible = false;
      this.popupVisible1 = true;
      let instance = null;
      var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
      instance = Toast("请输入姓名");
      if (this.username == "") {
        instance = Toast("请输入姓名");
      } else if (this.wordname == "") {
        instance = Toast("请输入单位名");
      } else if (this.phone == "") {
        instance = Toast("请输入手机号");
      } else if (this.code == "") {
        instance = Toast("请输入手机号验证码");
      } else if (isCodeOk>=3&&this.codeOk == "") {
        instance = Toast("请输入图形验证码");
      } else {
        if (!reg.test(this.phone)) {
          instance = Toast("手机格式不正确");
        } else {
          alert("ok");
          this.isCodeOk += 1;
          this.popupVisible = false;
          this.popupVisible1 = true;
        }
      }
      if (instance) {
        setTimeout(() => {
          instance.close();
        }, 2000);
      }
    },
    codeBtn() {
      let that = this;
      let instance = null;
      var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
      if (this.phone == "") {
        instance = Toast("请输入手机号");
      } else if (!reg.test(this.phone)) {
        instance = Toast("手机格式不正确");
      } else {
        if (window.isCode) {
          window.isCode = false;
          instance = Toast("发送成功请注意查看");
          window.isCodeTime = setInterval(function() {
            window.isCodeNum -= 1;
            console.log(window.isCodeNum);
            that.mycode = window.isCodeNum;
            if (window.isCodeNum <= 0) {
              window.isCodeNum = 60;
              that.mycode = window.isCodeNum;
              window.isCode = true;
              clearInterval(window.isCodeTime);
              window.isCodeTime = null;
            }
          }, 1000);
        }
      }
    },
    codeBtn1() {
      let that = this;
      let instance = null;
      var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
      if (this.phone == "") {
        instance = Toast("请输入手机号");
      } else if (!reg.test(this.phone)) {
        instance = Toast("手机格式不正确");
      } else {
        if (window.isCode1) {
          window.isCode1 = false;
          instance = Toast("发送成功请注意查看");
          window.isCodeTime1 = setInterval(function() {
            window.isCodeNum1 -= 1;
            that.mycode1 = window.isCodeNum1;
            if (window.isCodeNum1 <= 0) {
              window.isCodeNum1 = 60;
              that.mycode1 = window.isCodeNum1;
              window.isCode1 = true;
              clearInterval(window.isCodeTime1);
              window.isCodeTime1 = null;
            }
          }, 1000);
        }
      }
    }
  }
};
</script>

<style lang="scss">
.images {
  height: 5.64rem;
  background: red;
}
.mian-con {
  padding: 0.4rem;
  margin-bottom: 1.6rem;
  h3 {
    line-height: 0.3rem;
    font-size: 0.32rem;
    height: 0.3rem;
  }
  /*tabs*/
  .s-contain {
    background: #ffffff;
    .s-contain-title {
      .tabs {
        width: 2.64rem;
        margin: 0 auto;
      }
      .top-tabs {
        border: 1px solid #95918f;
        width: 1.32rem;
        text-align: center;
        height: 0.55rem;
        color: #1b0f0f;
        line-height: 0.55rem;
        &:first-child {
          border-right: none;
          border-bottom-left-radius: 0.05rem;
          border-top-left-radius: 0.05rem;
        }
        &:last-child {
          border-bottom-right-radius: 0.05rem;
          border-top-right-radius: 0.05rem;
        }
        &.isSelected {
          background: #95918f;
          color: #fff;
        }
      }
    }
  }
  .informations {
    padding-top: 0.1rem;
    font-size: 0.26rem;
    color: #aaaeb6;
  }
}
.warp {
  position: relative;
}
.bot-fixed {
  position: fixed;
  bottom: 1.1rem;
  height: 0.9rem;
  width: 100%;
  border-top: 1px solid #f3f3f4;
  line-height: 0.9rem;
  padding: 0 0.45rem;
  background: pink;
  color: #3b4655;
  p {
    display: inline-block;
    height: 0.9rem;
    &:first-child {
      float: left;
    }
    &:last-child {
      float: right;
      margin: 0.2rem 0;
      height: 0.5rem;
      width: 0.9rem;
      background: #ff5e3a;
      color: #fff;
      text-align: center;
      line-height: 0.5rem;
      border-radius: 0.5rem;
      font-size: 0.26rem;
    }
  }
}
.mint-popup {
  border-radius: 8px;
  overflow: hidden;
}
.tel-dialog {
  width: 5.5rem;
  background: #fff;
  padding: 0.6rem 0.2rem;
  div {
    text-align: center;
  }
  .img_bg {
	  height: 0.5rem;

    background: url("../../../static/img/dao.png") no-repeat center center;
    background-size: contain;
  }
  .title_lg {
	font-size: 0.3rem;
	padding-top: .1rem
  }
  .title_sm {
    color: #666;
    padding: 10px;
  }
  .mint-cell-title {
    width: 55px !important;
  }
  .code_btn {
    background: #ff5e3a;
    border-radius: 5px;
    padding: 5px 15px;
    color: #fff;
    font-size: 10px;
  }
  p {
    padding: 5px;
    background: #ff5e3a;
    color: #fff;
    text-align: center;
    border-radius: 50px;
    margin-top: 0.2rem;
  }
}
</style>
