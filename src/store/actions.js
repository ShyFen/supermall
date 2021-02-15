import {ADD_COUNTER, ADD_TO_CART} from "@/store/mutations.type";

export default {
  addCart(content, payload){
    return new Promise(resolve => {
      // 不用for循环也行
      // let oldProduct = null;
      // for(let item of state.cartList){
      //   if(item.iid === payload.iid){
      //     oldProduct = item;
      //   }
      // }
      // 用find方法
      let oldProduct = content.state.cartList.find(item => item.iid === payload.iid)
      if (oldProduct){
        // oldProduct.count += 1//这个写法是没法被vuex跟踪到的，下面的写法可以

        // 由于引入了常量，所以要改变写法
        // content.commit('addCounter',oldProduct)
        content.commit(ADD_COUNTER,oldProduct)
        resolve('添加到购物车成功+1')
      }else{
        payload.count = 1;
        // content.state.cartList.push(payload)//这个写法是没法被vuex跟踪到的，下面的写法可以
        content.commit(ADD_TO_CART,payload)
        resolve('添加到购物车成功')
      }
    })
  }
}
