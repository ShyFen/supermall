import Toast from "components/common/toast/Toast";

const obj = {}

//这里会有自动带有Vue传过来
obj.install = (Vue) => {

  //1、创建组件构造器
  const toastConstructor = Vue.extend(Toast)
  //2、new的方式，根据组件构造器，创建一个组件对象
  const toast = new toastConstructor()
  //3、将组件对象，手动挂载到某一个元素上
  toast.$mount(document.createElement('div'))
  //4、toast.$el对应的就是刚刚创建的div
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast
}

export default obj
