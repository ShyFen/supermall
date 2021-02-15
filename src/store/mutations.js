import {ADD_COUNTER, ADD_TO_CART} from "@/store/mutations.type";

export default {
  //mutations中的每个方法要尽可能的单一，因此添加到购物车这个功能，就在actions和mutations两个模块中完成编写

  // //由于引用了mutations.type,所以要改变写法了
  // addCounter(state,payload){
  //   payload.count++
  // },
  // addToCart(state,payload){
  //   state.cartList.push(payload)
  // }
  [ADD_COUNTER](state,payload){
    payload.count++
  },
  [ADD_TO_CART](state,payload){


    //这里是加入购物车后，默认选中小按钮，用这里来记录是否选中，然后在CartListItem中：is-checked='product.checked'
    //因为在CheckButton中暴露了isChecked属性，
    payload.checked = true

    state.cartList.push(payload)
  }
}
