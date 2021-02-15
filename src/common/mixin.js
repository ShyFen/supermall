import {debounce} from "@/common/utils";
import BackTop from "components/content/backTop/BackTop";

export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null
    }
  },
  mounted() {
    //设置全局监听
    let refresh = debounce(this.$refs.scroll.refresh, 100);
    this.itemImgListener = () => {
      refresh()
    }
    //取消全局监听
    this.$bus.$on('itemImgLoad', this.itemImgListener)
  }
}

export const backTopMixin = {
  data() {
    return {
      isShowBackTop: false,
    }
  },
  components: {
    BackTop
  },
  methods: {
    backClick() {
      //第三个参数是毫秒数，是在多少毫秒之内回去
      //这里体现了封装的思想，直接调用Scroll中的scrollTo方法
      this.$refs.scroll.scrollTo(0,0,500)
    },
    listenerShowBackTop(position) {
      this.isShowBackTop = -position.y > 1000
    }
  }
}
