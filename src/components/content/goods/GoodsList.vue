<template>
  <div class="goods">
    <goods-list-item v-for="item in goods" :goodsItem="item"></goods-list-item>
  </div>
</template>

<script>

import GoodsListItem from "components/content/goods/GoodsListItem";

export default {
  name: "GoodsList",
  props: {
    goods: Array
  },
  components: {
    GoodsListItem
  }
}
</script>

<style scoped>
.goods{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
