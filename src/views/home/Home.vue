<template>
  <div id="home" class="wrapper">
    <nav-bar class="nav-bar"><div slot="center"><span>购物街</span></div></nav-bar>
    <!--吸顶效果，这里做了两个tab-control，当滚到某个位置，这个显示，下面那个正常滚到上方-->
    <tab-control :titles="['流行','新款','精选']"
                 class="tab-control"
                 v-show="isTabFixed"
                 @tabClick="tabClick"
                 ref="tabControl1"></tab-control>
    <!--  :probe-type="3",设置要不要实时监听，  -->
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll" :pull-up-load="true" @pullingUp="loadMore">
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <home-recommend-view :recommends="recommends"></home-recommend-view>
      <home-feature></home-feature>
      <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl"></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <!--  修饰符native，是监听组件的原生事件  -->
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>

  import NavBar from 'components/common/navbar/NavBar';
  import TabControl from "components/content/tabcontrol/TabControl";
  import GoodsList from "components/content/goods/GoodsList";
  import Scroll from "components/common/scroll/Scroll";
  // 由于进行了封装，这里可以不写
  // import BackTop from "components/content/backTop/BackTop";

  import HomeSwiper from "views/home/childComps/HomeSwiper";
  import HomeRecommendView from "views/home/childComps/HomeRecommendView";
  import HomeFeature from "views/home/childComps/HomeFeature";


  import { getHomeMultidata, getHomeGoods} from "network/home";
  import { itemListenerMixin, backTopMixin } from "@/common/mixin";

  export default {
    name: "home",
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommendView,
      HomeFeature,
      TabControl,
      GoodsList,
      Scroll,
    },
    mixins: [itemListenerMixin, backTopMixin],
    data(){
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []},
        },
        currentType: 'pop',
        // isShowBackTop: false,
        tabOffsetTop: 0,
        saveY: 0,
        isTabFixed: false,//默认tabControl不吸顶
        itemImgListener: null
      };
    },
    created() {
      // 请求多个数据
      this.getHomeMultidata()//为了简便，将这里的逻辑计算，转入methods中，这里直接调用就行
    //  请求商品的数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')

    },
    mounted() {},
    deactivated() {
      this.$bus.$off('itemImgLoad', this.itemImgListener)
    },
    computed:{
      showGoods(){
        return this.goods[this.currentType].list
      }
    },
    methods: {
      /*
      * 事件监听相关的方法
      * */
      tabClick(index){
        switch (index){
          case 0:
            this.currentType = 'pop';
            break;
          case 1:
            this.currentType = 'new';
             break;
          case 2:
            this.currentType = 'sell';
            break;
        }
        this.$refs.tabControl1.currentIndex = index
        this.$refs.tabControl.currentIndex = index
      },
      // // 由于将BackTop进行了封装，因此这里将不再使用此方法
      // backClick() {
      //   //第三个参数是毫秒数，是在多少毫秒之内回去
      //   //这里体现了封装的思想，直接调用Scroll中的scrollTo方法
      //   this.$refs.scroll.scrollTo(0,0,500)
      // },
      contentScroll(position){
        //1、判断backTop是否显示
        // 由于将BackTop进行了封装，因此这里直接调用listenerShowBackTop方法
        // this.isShowBackTop = (-position.y) > 1000;
        this.listenerShowBackTop(position)

      //  2、决定tabControl是否吸顶
        this.isTabFixed = (-position.y) >= this.tabOffsetTop
      },
      loadMore(){
        this.getHomeGoods(this.currentType)
      },
      //  获取tabControl的OffsetTop
      //  做吸顶效果，所有组件都有一个属性$el,用来获取组件中的元素的
      //  如何获取正确的吸顶的位置，就系要获取轮播图的高度，
      swiperImageLoad(){
        this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
      },

      /*
      * 网络请求相关的方法
      * */
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1;
        getHomeGoods(type,page).then(res => {
          // 将...res.data.list中的数据，push到this.goods[type]中，数据加进去之后，页码加一
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;
          //上拉加载更多完成
          this.$refs.scroll.finishPullUp()
        })
      }
    },
  }
</script>

<style scoped>
  #home{
    position: relative;
    height: 100vh;
  }
  /*由于用了Better-scroll，而不是浏览器的原生滚动，所以不用设置position:fixed*/
  .nav-bar{
    background-color: var(--color-tint);
    color: var(--color-background);
  }
  .tab-control{
    position: relative;
    z-index: 4;
  }
  .content{
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
  }
</style>
