<template>
  <div id="app">
<!--防止被销毁,但是排除Detail，这样每次请求的数据都不一样-->
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>

  import MainTabBar from './components/content/maintabbar/MainTabBar'

  export default {
    name: 'app',
    components: {
      MainTabBar
    }
  }

</script>

<style>
  @import "assets/css/base.css";
</style>
