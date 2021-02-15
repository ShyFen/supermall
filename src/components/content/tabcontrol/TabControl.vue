<template>
  <div id="tab-control">
    <div v-for="(item, index) in titles"
         class="tab-control-item"
         :class="{active: currentIndex===index}"
         @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      titles: Array
    },
    data(){
      return {
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index){
        this.currentIndex = index;
        this.$emit('tabClick',index)
      }
    }
  }
</script>

<style scoped>
#tab-control{
  display: flex;
  background-color: #fff;
}
.tab-control-item{
  flex: 1;
  text-align: center;
  height: 40px;
  line-height: 40px;
}
.tab-control-item span{
  padding: 5px;
}
.active{
  color: var(--color-high-text);
}
.active span{
  border-bottom: 2px solid var(--color-tint);
}
</style>
