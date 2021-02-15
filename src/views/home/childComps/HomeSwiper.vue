<template>
  <div>
    <mt-swipe class="swipe" :auto="3000" :show-indicators="true">
      <mt-swipe-item v-for="item in banners">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imageLoad">
        </a>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui'
export default {
  name: "HomeSwiper",
  props: {
    banners: Array
  },
  data() {
    return {
      isLoad: false
    }
  },
  components: {
    SwipeItem,
    Swipe
  },
  methods: {
    imageLoad() {
      //加一个if判断，是为了这里只加载一次，而不是四次
      if(!this.isLoad){
        this.$emit('swiperImageLoad')
        this.isLoad = true
      }

    }
  }
}
</script>

<style scoped>
@import '~mint-ui/lib/style.css';
.swipe{
  height: 166px;
  width: 100%;
  /*overflow: hidden;*/
}
img{
  width: 100%;
}
</style>
