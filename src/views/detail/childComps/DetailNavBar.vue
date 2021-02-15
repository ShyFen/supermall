<template>
  <div>
    <nav-bar>
      <div slot="left"><span class="left iconfont icon-xiangzuo" @click="backClick"></span></div>
      <div class="title" slot="center">
        <div v-for="(item,index) in titles"
             class="title-item"
             @click="titleClick(index)"
             :class="{active: index === currentIndex}">
          {{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>

  import NavBar from "components/common/navbar/NavBar";

  export default {
    name: "DetailNavBar",
    components: {
      NavBar
    },
    data() {
      return {
        titles: ['商品','参数','评论','推荐'],
        currentIndex: 0
      }
    },
    methods: {
      titleClick(index) {
        this.currentIndex = index;
        this.$emit('titleClick', index)
      },
      backClick() {
        //或者 this.$router.go(-1)
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
.title{
  display: flex;
  font-size: 14px;
}
.title-item{
  flex: 1;
}
.active{
  color: var(--color-high-text);
}
.left{
  font-size: 32px;
}
</style>
