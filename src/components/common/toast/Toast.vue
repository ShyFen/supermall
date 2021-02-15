<template>
  <div class="toast">
    <div v-show="isShow" class="toast-content">{{message}}</div>
  </div>
</template>

<script>
  export default {
    name: "Toast",
    data() {
      return {
        message: '',
        isShow: false
      }
    },
    methods: {
      show(message = '添加成功', time = 2000) {
        this.isShow = true
        this.message = message

        setTimeout(() => {
          this.isShow = false
          this.message = ''
        }, time)
      }
    }
  }
</script>

<style scoped>
.toast{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0,0,0, .7);
  z-index: 999;
  color: #fff;
}
.toast-content{
  margin: 5px 10px;
}
</style>
