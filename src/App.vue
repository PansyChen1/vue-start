<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <SayHello message="----------------This is say hello component-----------"/> -->
    <!-- <SlotExample> -->
      <!-- 具名插槽 -->
      <!-- <template slot="slot1">
        <h1>This is a named slot</h1>
      </template> -->

      <!-- <template v-slot:slot1>
        <h1>This is a named slot</h1>
      </template> -->
      
      <!-- 插槽作用域 -->
      <!-- <template slot-scope="a">
        <h2>{{a}}</h2>
      </template> -->

      <!-- <template slot-scope="a"> -->
        <!-- {{a}} -->
      <!-- </template> -->
    <!-- </SlotExample> -->
    <div class="banner">
      <Banner :bannerArr="bannerArr" :duration="1000"/>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import SayHello from './components/SayHello'
// import SlotExample from './components/SlotExample'
import Banner from './components/Banner'
import Banner1 from './assets/banners/banner_01.jpeg'
import Banner2 from './assets/banners/banner_02.jpeg'
import Banner3 from './assets/banners/banner_03.jpeg'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // SayHello,
    // SlotExample,
    Banner
  },
  data() {
    return {
      bannerArr: [
        {url: Banner1, link: "https://www.baidu.com"},
        {url: Banner2, link: "https://ke.qq.com/course/list/vue"},
        {url: Banner3, link: "https://docs.ksyun.com/documents/28302"}
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.banner {
  width: 1080px;
  margin: 0 auto;
}
</style>
