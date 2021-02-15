<template>
  <div class="nav">
    <div class="nav-bar">
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "nav-bar"
  }
</script>

<style scoped>
  .nav{
    height: 44px;
  }
  .nav-bar{
    /*position: relative;*/
    z-index: 99;
    width: 100%;
    display: flex;
    line-height: 44px;
    height: 44px;
    text-align: center;
  }
  .left, .right{
    width: 60px;
  }
  .center{
    flex: 1;
  }

</style>
