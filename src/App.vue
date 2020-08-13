<template>
  <div id="app">
    <Header />
    <div class="container">
      <!-- 该组件会根据不同的访问路径，渲染不同的组件 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
.news-channels {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
