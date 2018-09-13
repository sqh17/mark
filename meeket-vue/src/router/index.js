import Vue from 'vue'
import Router from 'vue-router'


// 首页
import Index from '../pages/Index/Index'
//引入头部组件
import Title from '../components/header'
//引入底部组件
import Footer from '../components/footer'
// 引入主体内容组件
import Container from '../components/container'



// 课程介绍
import FirstIndex from '../pages/Index/FirstIndex.vue'
import AllCourse from '../pages/AllCourses/AllCourse.vue'
import CourseIntroduce from '../pages/courseIntroduce/courseIntroduce.vue'
import Personal from '../pages/Personal/Personal.vue'

// 我的课程
import MyCourse from '../pages/MyCourses/MyCourses.vue'

//注册全局组件
Vue.component('m-header', Title);
Vue.component('m-footer', Footer);
Vue.component('m-contain', Container);

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'FirstIndex',
      component: FirstIndex,
      meta: {
        keepAlive: false,
        menuId: '01'
      }
    },
    //全部课程
    {
      path: '/allCourse',
      name: 'AllCourse',
      component: AllCourse,
      meta: {
        keepAlive: false,
        menuId: '02'
      }
    },
    // 我的课程
    {
      path: '/mycourses',
      name: 'MyCourse',
      component: MyCourse,
      meta: {
        keepAlive: false,
        menuId: '03'
      }
    },
    // 签到进入
    {
      path: '/courseIntroduce',
      name: 'CourseIntroduce',
      component: CourseIntroduce,
      // meta: {
      //   keepAlive: false,
      //   menuId: '03'
      // }
    },
    //个人中心
    {
      path: '/personal',
      name: 'Personal',
      component: Personal,
      meta: {
        keepAlive: false,
        menuId: '04'
      }
    },
    {
      path: '*',
      redirect: '/'
    },
  ]
})