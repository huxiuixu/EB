<template>
<a-layout id="components-layout-demo-top-side-2">
    <a-layout-header class="header" style="background:#3568b7;border-bottom: 1px solid #e6e6e6;color: #fff;">
      <div class="logo"><img src="../static/imgs/eb.png" alt=""></div>
      <a-menu
        theme="dark"
        mode="horizontal"
        :defaultSelectedKeys="['2']"
        :style="{ lineHeight: '63px',background:'#3568b7'}"
      >
        <a-menu-item key="1">自助取数系统</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="242" style="background: #fff;height: calc(100vh - 64px);">
        <a-menu
          mode="inline"
          :defaultSelectedKeys="['1']"
          :defaultOpenKeys="['sub1']"
          :style="{ height: '100%', borderRight: 0,background:'#3568b7' }"
        >
          <a-sub-menu key="sub1" style="background:#3568b7">
              <span slot="title"><a-icon type="user" />自助取数</span>
              <a-menu-item style="background:#3568b7" key="1"><router-link to="/newTask">新建取数任务</router-link></a-menu-item>
              <a-menu-item key="2"><router-link to="/taskLists">取数任务列表</router-link></a-menu-item>
              <a-menu-item key="3"><router-link to="/logMonitoring">取数日志监控</router-link></a-menu-item>
              <a-menu-item key="4"><router-link to="/reviewList">取数审核列表</router-link></a-menu-item>
              <a-menu-item key="5"><router-link to="/SQLtemplate">SQL模板取数</router-link></a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <span slot="title"><a-icon type="laptop" />subnav 2</span>
            <a-menu-item key="5">option5</a-menu-item>
            <a-menu-item key="6">option6</a-menu-item>
            <a-menu-item key="7">option7</a-menu-item>
            <a-menu-item key="8">option8</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub3">
            <span slot="title"><a-icon type="notification" />subnav 3</span>
            <a-menu-item key="9">option9</a-menu-item>
            <a-menu-item key="10">option10</a-menu-item>
            <a-menu-item key="11">option11</a-menu-item>
            <a-menu-item key="12">option12</a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding:30px">
        <a-layout-content
          :style="{ background: '#fff', margin: 0, minHeight: '844px' }"
        >
          <router-view>Content</router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script>
  export default {
    data() {
      return {
        collapsed: false,
      };
    },
  };
</script>
<style>
#components-layout-demo-top-side-2 .logo {
    width: 120px;
    height: 31px;
    /* background: rgba(255, 255, 255, 0.2); */
    margin: 16px 28px 16px 0;
    float: left;
  }
  #components-layout-demo-top-side-2 .logo img {
    position: absolute;
    left: 25px;
    top: -15px;
    z-index: 1000;
    height: 100px;
  }
  .ant-menu-submenu > .ant-menu {
    background: #3568b7;
  }
  .ant-layout-header {
    height: 70px;
  }
  .ant-menu{
    color: #ffffff;
    font-size: 20px;
  }
  .ant-menu-inline .ant-menu-submenu-title{
    font-size: 16px;
  }
</style>
