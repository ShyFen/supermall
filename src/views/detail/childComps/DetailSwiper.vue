<template>
  <div>
    <mt-swipe class="swipe" :auto="3000" :show-indicators="true">
      <mt-swipe-item v-for="item in topImages">
        <img :src="item" alt="">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>

  import { Swipe, SwipeItem } from 'mint-ui'

  export default {
    name: "DetailSwiper",
    components: {
      Swipe,
      SwipeItem
    },
    props: {
      topImages: Array
    },
  }
</script>

<style scoped>
  @import '~mint-ui/lib/style.css';
  .swipe{
    height: 300px;
    width: 100%;
    /*overflow: hidden;*/
  }
  .swipe img{
    width: 100%;
  }
</style>
