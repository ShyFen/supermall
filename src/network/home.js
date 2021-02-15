import { request } from "./request";

//getHomeMultidata()的返回值是promise类型，因此调用这个函数时，可以使用.then()
export function getHomeMultidata(){
  return request({
    url: '/home/multidata'
  })
}

export function getHomeGoods(type,page){
  return request({
    url: 'home/data',
    params: {
      type,
      page
    }
  })
}
