<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button class="check-button" :is-checked="isSelectAll" @click.native="checkClick"/>
      <span>全选</span>
    </div>
    <div class="price">
      总计：{{totalPrice}}
    </div>
    <div class="computed" @click="goComputed">
      去计算({{checkLength}})
    </div>
  </div>
</template>

<script>

  import CheckButton from "components/content/checkButton/CheckButton";

  import { mapGetters } from 'vuex'

  export default {
    name: "CartBottomBar",
    components: {
      CheckButton
    },
    computed: {
      // 由于写this.$store.state.cartList太麻烦，这里引用mapGetters中的cartLists替换$store.state.cartList
      ...mapGetters(['cartLists']),
      totalPrice(){
        return this.cartLists.filter(item => {
          return item.checked
        }).reduce((preValue, item) => {
          return preValue + item.price*item.count
        },0).toFixed(2)
      },
      checkLength() {
        return this.cartLists.filter(item => {
          return item.checked
        }).length
      },
      isSelectAll() {
        //  这一步是必须的
        if(this.cartLists.length === 0) return false
        // 方法一：使用find，找到不被点击的，当找到的话就是真，所以要取反，返回false
        return !(this.cartLists.find(item => !item.checked))
        // 方法二：使用filter
        // return !(this.cartLists.filter(item => !item.checked).length)
        // 方法三：使用普通for循环
        // for(let item of this.cartLists){
        //   if(!item.checked){
        //     return false
        //   }
        // }
        // return true
      }
    },
    methods: {
      checkClick() {
        //全部选中，点击之后，全部不选中
        if (this.isSelectAll){
          this.cartLists.forEach(item => item.checked = false)
        }else {  //部分不选中，点击之后端部选中
          this.cartLists.forEach(item => item.checked = true)
        }
      },
      goComputed() {
        if(!this.isSelectAll){
          this.$toast.show("请选择购买的商品")
        }
      }
    }
  }
</script>

<style scoped>
.bottom-bar{
  height: 40px;
  background-color: #eee;

  display: flex;

  position: fixed;
  bottom: 49px;
  left: 0;
  right: 0;
}
.check-content{
  display: flex;
  align-items: center;

  width: 60px;

  margin: 0 10px;
}
.price{
  margin: auto 0;
  font-size: 14px;
  flex: 1;
}
.computed{
  width: 90px;
  font-size: 14px;
  background-color: var(--color-high-text);
  color: #fff;
  text-align: center;
  line-height: 40px;
}
</style>
