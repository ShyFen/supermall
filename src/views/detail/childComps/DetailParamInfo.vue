<template>
  <div class="param-info" v-if="Object.keys(paramInfo).length !== 0">
    <table class="info-size" v-for="(table,index) in paramInfo.sizes" :key="index">
      <tr v-for="(tr,index1) in table" :key="index1">
        <td v-for="(td,index2) in tr" :key="index2">{{td}}</td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="info in paramInfo.infos">
        <th>{{info.key}}</th>
        <td>{{info.value}}</td>
      </tr>
    </table>
    <div class="info-image" v-if="paramInfo.image.length !== 0">
      <img :src="paramInfo.image" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailParamInfo",
    props: {
      paramInfo: Object
    }
  }
</script>

<style scoped>
.param-info{
  padding: 20px 15px;
  font-size: 14px;
  border-bottom: 5px solid #f2f5f8;
}
.param-info table{
  width: 100%;
  border-collapse: collapse;
}
.param-info table tr{
  height: 42px;
}
.param-info table tr td{
  border-bottom: 1px solid rgba(100, 100, 100, .1);
}
.info-param{
  border-top: 1px solid rgba(0,0,0, .1);
}
.info-param tr th{
  width: 95px;
}
.info-param tr td{
  color: var(--color-high-text);
}
.info-image img{
  width: 100%;
}
/*.param-info {*/
/*  width: 100%;*/
/*  font-size: 12px;*/
/*}*/
/*.info-size,*/
/*.info-param {*/
/*  border-bottom: 1px solid #666666;*/
/*  width: 100%;*/
/*}*/
/*.info-size tr,*/
/*.info-param tr {*/
/*  border-bottom: 1px solid #444444;*/
/*}*/
/*.info-size td {*/
/*  text-align: left;*/
/*  padding: 10px;*/
/*  white-space: nowrap;*/
/*}*/
/*.info-param th {*/
/*  text-align: center;*/
/*  padding: 10px 40px 10px 5px;*/
/*  white-space: nowrap;!*文本不换行*!*/
/*}*/
/*.info-param td {*/
/*  color: var(--color-high-text);*/
/*}*/
/*.info-image img {*/
/*  width: 100%;*/
/*}*/
</style>
