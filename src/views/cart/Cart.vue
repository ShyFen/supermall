<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>
    <cart-list></cart-list>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>

  import NavBar from "components/common/navbar/NavBar";
  import CartList from "views/cart/childComps/CartList";
  import CartBottomBar from "views/cart/childComps/CartBottomBar";

  //mapGetters仅仅是store中getters的辅助函数
  import { mapGetters } from 'vuex'

  export default {
    name: "cart",
    components: {
      NavBar,
      CartList,
      CartBottomBar
    },
    computed: {
      //第一种写法
      // ...mapGetters(['cartLength','cartLists])
      // 第二种写法,给cartLength起个别名length,然后在上面使用length,这里没用到cartLists就不写了
      ...mapGetters({
        length: 'cartLength',
        // cartL: 'cartLists'
      })
    }
  }
</script>

<style scoped>
.nav-bar{
  background-color: var(--color-tint);
  color: var(--color-background);
}
</style>
