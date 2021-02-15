<template>
  <div class="wrapper" ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>

  import BScroll from 'better-scroll'

  export default {
    name: "Scroll",
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data(){
      return {
        scroll: null,
      }
    },
    mounted() {
    //  1、创建BScroll对象
      this.scroll = new BScroll(this.$refs.wrapper,{
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad,
        click: true
      });
    // /2、实时监听滚动的位置,来个判断当等于2或者3时，才去监听，当然也可以不写判断
      if(this.probeType === 2 || this.probeType === 3){
        this.scroll.on('scroll',position => {
          this.$emit('scroll',position)
        })
      }

    // /3、监听scroll滚到底部，上拉加载更多
      if(this.pullUpLoad){
        this.scroll.on('pullingUp',() => {
          this.$emit('pullingUp')
        })
      }
    },
    methods: {
      scrollTo(x,y,time=300){
        this.scroll && this.scroll.scrollTo(x, y, time)
      },
      refresh() {
        // console.log('----');
        this.scroll && this.scroll.refresh()
      },
      finishPullUp() {
        this.scroll && this.scroll.finishPullUp()
      }
    }
  }
</script>

<style scoped>

</style>
