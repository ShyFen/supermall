<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <cart-list-item v-for="(item,index) in cartLists" :key="index" :product="item"></cart-list-item>
    </scroll>
  </div>
</template>

<script>

  import CartListItem from "views/cart/childComps/CartListItem";

  import Scroll from "components/common/scroll/Scroll";

  import { mapGetters } from 'vuex'

  export default {
    name: "CartList",
    components: {
      Scroll,
      CartListItem
    },
    computed: {
      ...mapGetters(['cartLists'])
    },
    //由于不断的添加数据，所以要刷新才能知道滚动的高度，所以这里调用刷新
    activated() {
      this.$refs.scroll.refresh()
    }
  }
</script>

<style scoped>
.cart-list{
  height: 100vh;
}
.content{
  height: calc(100% - 44px - 49px - 40px);
  overflow: hidden;
}
</style>
