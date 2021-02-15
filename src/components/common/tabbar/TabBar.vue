<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "tabbar"
  }
</script>

<style scoped>

  #tab-bar{
    z-index: 4;
    display: flex;
    height: 49px;
    background-color: #F6C6CE;
    box-shadow: 0 -3px 1px rgba(0,0,0,0.1);

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
  }

</style>
