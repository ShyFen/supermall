<template>
  <div class="check-button" :class="{check: isChecked}">
    <i class="icon iconfont icon-selected"></i>
  </div>
</template>

<script>
  export default {
    name: "CheckButton",
    props: {
      isChecked: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped>
.check-button{
  color: #cccccc;
}
.icon{
  font-size: 24px;
}
.check{
  color: red;
}
</style>
