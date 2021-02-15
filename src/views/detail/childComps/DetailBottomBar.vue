<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon iconfont icon-kefu"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon iconfont icon-dianpu"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon iconfont icon-shoucang_huaban1"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
<!--        <i class="icon iconfont icon-icon"></i>-->
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "DetailBottomBar",
    methods: {
      addToCart(){
        // console.log('kkk');
        this.$emit('addCart')
      }
    }
  }
</script>

<style scoped>
.bottom-bar{
  height: 49px;
  display: flex;
  text-align: center;
}
.bar-item{
  background-color: #fff;
  height: 49px;
  position: relative;

  flex: 1;
  display: flex;
}
.bar-item > div{
  flex: 1;
}
.text{
  font-size: 12px;
}
.icon{
  display: block;
  width: 22px;
  height: 22px;
  margin: 5px auto 2px;
}
.cart{
  background-color: pink;
}
.buy{
  background-color: #DD4A68;
}
.bar-right{
  line-height: 49px;
}
</style>
