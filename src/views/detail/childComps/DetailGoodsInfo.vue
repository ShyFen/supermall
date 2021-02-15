<template>
  <div class="goods-info" v-if="Object.keys(detailInfo).length !== 0">
    <div class="info-desc clear-fix">
      <div class="line"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="line"></div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img v-for="(item, index) in detailInfo.detailImage[0].list" :key="index" :src="item" alt="" @load="imgLoad">
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailGoodsInfo",
    data() {
      return {
        counter: 0,
        imageLength: 0
      }
    },
    props: {
      detailInfo: Object
    },
    methods: {
      imgLoad(){
        //所有图片加载完，再进行回调
        if(++this.counter === this.imageLength){
          this.$emit('imageLoad')
        }
      }
    },
    watch: {
      detailInfo() {
        //获取图片个数
        this.imageLength = this.detailInfo.detailImage[0].list.length
      }
    }
  }
</script>

<style scoped>
.goods-info {
  font-size: 0.68rem;
}
.info-desc {
  font-size: 0.6rem;
  padding: 0.42rem 0.34rem;
}
.line {
  width: 3.5rem;
  height: 0.04rem;
  background-color: gray;
  position: relative;
}
.desc {
  padding: 0.85rem 0;
  color: gray;
}
.info-key {
  padding: 0.42rem 0.34rem;
}
.info-list img {
  width: 100%;
}

</style>
