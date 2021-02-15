<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav"></detail-nav-bar>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
      <detail-param-info :param-info="paramInfo" ref="param"></detail-param-info>
      <detail-common-info :common-info="commonInfo" ref="common"></detail-common-info>
      <goods-list :goods="recommends" ref="recommend"></goods-list>
    </scroll>
    <detail-bottom-bar @addCart="addToCart"/>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>

  import DetailNavBar from "views/detail/childComps/DetailNavBar";
  import DetailSwiper from "views/detail/childComps/DetailSwiper";
  import DetailBaseInfo from "views/detail/childComps/DetailBaseInfo";
  import DetailShopInfo from "views/detail/childComps/DetailShopInfo";
  import DetailGoodsInfo from "views/detail/childComps/DetailGoodsInfo";
  import DetailParamInfo from "views/detail/childComps/DetailParamInfo";
  import DetailCommonInfo from "views/detail/childComps/DetailCommonInfo";
  import DetailBottomBar from "views/detail/childComps/DetailBottomBar";

  import Scroll from "components/common/scroll/Scroll";
  import GoodsList from "components/content/goods/GoodsList";

  import { getDetail, Goods, Shop, GoodsParam, getRecommend } from "network/detail";
  import { itemListenerMixin, backTopMixin } from "@/common/mixin";
  import { debounce } from "@/common/utils";

  // import { mapActions } from 'vuex'

  export default {
    name: "Detail",
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommonInfo,
      DetailBottomBar,
      Scroll,
      GoodsList,
    },
    mixins: [itemListenerMixin, backTopMixin],
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        commonInfo: {},
        recommends: [],
        themeTopYs: [],
        getThemeTopY: null,
        currentIndex: 0
      }
    },
    mounted() {},
    destroyed() {
      this.$bus.$off('itemImgLoad', this.itemImgListener)
    },
    created() {
    //  1、这里的id和配置路由中的id要一致，保存iid
      this.iid = this.$route.params.iid;
    //  2、根据iid请求详情数据
      getDetail(this.iid).then(res => {
        console.log(res);
        const data = res.result
      //  1、获取顶部的图片轮播数据
        this.topImages = data.itemInfo.topImages
      //  2、获取商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      //  3、店铺信息
        this.shop = new Shop(data.shopInfo)
      //  4、保存商品的详情信息
        this.detailInfo = data.detailInfo
      //  5、获取参数等信息
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
      //  6、获取评论信息，由于有些没有评论，所以要做个判断
        if(data.rate.cRate !== 0){
          this.commonInfo = data.rate.list[0]
        }
      })
    //  3、请求推荐数据
      getRecommend().then(res => {
        this.recommends = res.data.list
      })
    //  4、获取参数、评论等的offsetTop值
      this.getThemeTopY = debounce(() => {
        this.themeTopYs = [];
        this.themeTopYs.push(0);
        this.themeTopYs.push(this.$refs.param.$el.offsetTop-44)
        this.themeTopYs.push(this.$refs.common.$el.offsetTop-44)
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop-44)
        this.themeTopYs.push(Number.MAX_VALUE)//这个是Number方法中的最大值，用来下面contentScroll()第四个条件做判断的
        console.log(this.themeTopYs);
      },100)
    },
    methods: {
      imageLoad(){
        this.$refs.scroll.refresh();
        this.getThemeTopY();
      },
      titleClick(index) {
        console.log(index);
        this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 100)
        console.log(this.themeTopYs[index]);
      },
      //hack做法,当滚动的时候，上面导航栏的高亮效果跟着滚动进行切换
      contentScroll(position){
        const positionY = -position.y;
        // for(let i in this.themeTopYs){ //这里的i是个字符串，所以不能加一
        let length = this.themeTopYs.length
        for(let i = 0; i < length - 1 ; i++){
          if((this.currentIndex !== i) && (positionY > this.themeTopYs[i] && positionY < this.themeTopYs[i+1])){
            this.currentIndex = i;
            this.$refs.nav.currentIndex = this.currentIndex
          }
        }
      //  是否回到顶部
        this.listenerShowBackTop(position)
      },
      addToCart() {
        // console.log('lll');
        //  1、获取购物车要展示的一些信息
        const product = {};
        product.image = this.topImages[0];  //只需要一张就行
        product.title = this.goods.title;
        product.desc = this.goods.desc;
        product.price = this.goods.realPrice;
        product.iid = this.iid;

        //  2、将商品添加到购物车
        this.$store.dispatch('addCart', product).then((res) => {
          //这里是使用了toast插件（自定义插件），show()不传参数就使用默认的值
          this.$toast.show()
        })
      }
    },
  }
</script>

<style scoped>
#detail{
  position: relative;
  /*遮住底部导航栏*/
  z-index: 5;
  background-color: #fff;
  height: 100vh;
}
.detail-nav{
  position: relative;
  background-color: #fff;
  z-index: 6;
}
.content{
  height: calc(100% - 44px - 49px);
}
</style>
