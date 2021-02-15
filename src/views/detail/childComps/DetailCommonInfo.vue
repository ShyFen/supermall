<template>
  <div class="comment-info" v-if="Object.keys(commonInfo).length !== 0">
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">更多</div>
    </div>
    <div class="info-user">
      <img :src="commonInfo.user.avatar" alt="">
      <span>{{commonInfo.user.uname}}</span>
    </div>
    <div class="info-detail">
      <p>{{commonInfo.content}}</p>
      <div class="info-other">
        <span class="date">{{commonInfo.created | showDate}}</span>
        <span>{{commonInfo.style}}</span>
      </div>
      <div class="info-imgs">
        <img :src="item" v-for="(item,index) in commonInfo.images" :key="index" alt="">
      </div>
    </div>
  </div>
</template>

<script>

  import { formatDate } from "@/common/utils";

  export default {
    name: "DetailCommonInfo",
    props: {
      commonInfo: Object
    },
    filters: {
      showDate(value){
      //  1、将时间戳转成date对象
        const date = new Date(value * 1000)
      //  2、将date格式化
        return formatDate(date, 'yyy-MM-dd')
      }
    }
  }
</script>

<style scoped>
.comment-info{
  padding: 5px 12px;
  color: #333;
  border-bottom: 5px solid #f2f5f8;
}
.info-header{
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid rgba(0,0,0, .1);
}
.header-title{
  float: left;
  font-size: 16px;
}
.header-more{
  float: right;
  margin-right: 10px;
  font-size: 14px;
}
.info-user{
  padding: 10px 0 5px;
}
.info-user img{
  width: 42px;
  height: 42px;
  border-radius: 50%;
}
.info-user span{
  position: relative;
  font-size: 16px;
  top: -15px;
  margin-left: 10px;
}
.info-detail{
  padding: 0 5px 15px;
}
.info-detail p{
  font-size: 14px;
  color: var(--color-high-text);
  line-height: 1.5;
}
.info-detail .info-other{
  font-size: 12px;
  color: #999999;
  margin-top: 10px;
}
.info-other .date{
  margin-right: 8px;
}
.info-imgs{
  margin-top: 10px;
}
.info-imgs img{
  width: 70px;
  height: 70px;
  margin-right: 5px;
}
</style>
