// 单一文件组件
<template>
  <div class="banner-container" @mouseenter="autoStop" @mouseleave="autoStart">
    <ul
      class="images"
      :style="{
        width: bannerArr.length * 100 + '%',
        marginLeft: -index * 100 + '%'
    }"
    >
      <li v-for="(item, i) in bannerArr" :key="i">
        <a :href="item.link">
          <img :src="item.url" alt />
        </a>
      </li>
    </ul>
    <ul class="dots">
      <li 
        v-for="(item, i) in bannerArr" 
        :key="i" 
        :class="{active: i === index}"
        @click="index = i"
      ></li>
    </ul>
  </div>
</template>

<script>
// 需要思考哪些数据是需要放到js中的
// 图片、图片的超链接地址 --- 图片信息数组
// 当前显示的是第几张

// 哪些是需要属性（别人给的） 哪些是需要 data 的（自己的）

export default {
  name: "Banner",
  // prop: ["bannerArr"]
  props: {
    bannerArr: {
      type: Array, // 规定属性类型
      required: true, // 规定属性是必传的
    },
    duration: {
        type: Number,
        default: 2000 // 属性默认值
    }
  },
  created() {
      this.autoStart()
      console.log("component is created")
  },
  destroyed() {
      this.autoStop()
      console.log("component is destroyed")
  },
  data() {
    return {
      index: 0, // 当前显示的是第几张图片
      timer: null // 保存计时器
    };
  },
  methods: {
      // 图片自动开始切换
      autoStart() {
          if(this.timer) {
              return;
          }
          this.timer = setInterval(() => {
              this.index = (this.index + 1) % this.bannerArr.length;
          }, this.duration)
      },

      // 停止自动切换
      autoStop() {
          clearInterval(this.timer);
          this.timer = null;
      }
  }
};
</script>

<style scoped>
.banner-container {
  height: 350px;
  position: relative;
  overflow: hidden;
}
.banner-container li {
  display: block;
  width: 1080px;
  height: 100%;
  float: left;
}
.images {
  height: 100%;
  transition: 0.5s;
}
.images img {
  width: 1080px;
  height: 100%;
}
.dots {
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
}
.dots li {
  width: 10px;
  cursor: pointer;
  height: 10px;
  margin: 0 3px;
  border-radius: 50%;
  border: 1px solid;
  color: #fff;
}
.dots li.active {
  background: #fff;
}
</style>