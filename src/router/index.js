import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import newTask from '@/views/newTask'
import taskLists from '@/views/taskLists'
import logMonitoring from '@/views/logMonitoring'
import reviewList from '@/views/reviewList'
import SQLtemplate from '@/views/SQLtemplate'
Vue.use(Router)

export default new Router({
  // routes: [
  //   {
  //     path: '/',
  //     name: 'HelloWorld',
  //     component: HelloWorld
  //   }
  // ]
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect: 'directory'
    },
    {
      path: '/newTask',
      name: 'newTask',
      component: newTask
      // children: [{
      //   path: 'templateManage',
      //   name: 'templateManageLink',
      //   component: TemplateManage
      // }]
    },
    {
      path: '/taskLists',
      name: 'taskLists',
      // components: {
      //   default: () => import('@/views/datapre'),
      //   asider: () => import('@/components/Asider')
      // }
      component: taskLists
    },
    {
      path: '/logMonitoring',
      name: 'logMonitoring',
      // components: {
      //   default: () => import('@/views/manage'),
      //   asider: () => import('@/components/Asider')
      // }
      component: logMonitoring
    },
    {
      path: '/reviewList',
      name: 'reviewList',
      component: reviewList
    },
    {
      path: '/SQLtemplate',
      name: 'SQLtemplate',
      component: SQLtemplate
    }
  ]
})
