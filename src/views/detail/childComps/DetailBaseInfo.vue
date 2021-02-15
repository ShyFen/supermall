<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span class="discount" v-if="goods.discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length - 1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="item in goods.services.length-1" :key="item">
        <img :src="goods.services[item -1].icon" alt="">
        <span>{{goods.services[item-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBaseInfo",
    props: {
      goods: Object
    }
  }
</script>

<style scoped>
.base-info{
  margin-top: 15px;
  color: #999999;
  border-bottom: 5px solid #f2f5f8;
}
.info-title{
  color: #222222;
}
.info-price{
  margin-top: 10px;
}
.info-price .n-price{
  color: var(--color-high-text);
  font-size: 20px;
}
.info-price .o-price{
  font-size: 13px;
  margin-left: 5px;
  text-decoration: line-through;
}
.info-price .discount{
  font-size: 12px;
  padding: 2px 5px;
  color: #fff;
  background-color: var(--color-high-text);
  border-radius: 8px;
  margin-left: 5px;

  position: relative;
  top: -8px;
}

.info-other{
  margin-top: 15px;
  line-height: 30px;
  display: flex;
  font-size: 13px;
  border-bottom: 1px solid rgba(100,100,100, .1);
  justify-content: space-around;
}
.info-service{
  display: flex;
  justify-content: space-around;
  line-height: 60px;
}
.info-service-item img{
  width: 14px;
  height: 14px;
  position: relative;
  top: 2px;
}
.info-service-item span{
  font-size: 12px;
  color: #333333;
}
</style>
