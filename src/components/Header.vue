<template>
  <div class="header">
    <div class="header-container">
      <div class="container">
        <div class="logo">
          <!-- 声明式导航 -->
          <!-- <router-link to="/"> -->
          <!-- 防止后期路径更改，需要修改大量的路径， 命名式路由 -->
          <router-link :to="{name: 'Home'}">
            <img src="../assets/logo.png" alt />
          </router-link>
        </div>

        <ul class="nav">
          <li>
            <router-link :to="{name: 'Home'}">首页</router-link>
          </li>
          <li v-for="(item, i) in channels.slice(0, 6)" :key="i">
            <router-link
              :to="{
                  name: 'Channels',
                  params: {
                      id: item.channelId,
                  }
              }"
            >{{item.channelName}}</router-link>
          </li>
        </ul>

        <div class="user">
          <router-link :to="{name: 'Login'}">登录</router-link>
          <router-link :to="{name: 'Register'}">注册</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getNewsChannels } from "../services/newsService";
export default {
  data() {
    return {
      channels: [],
    };
  },
  async created() {
    var res = await getNewsChannels();
    this.channels = res;
  },
};
</script>

<style scoped>
.header {
  height: 60px;
  margin: 30px auto;
}
.header-container {
  height: 60px;
  background: #000;
  color: #fff;
  line-height: 60px;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  display: flex;
}
.container {
  display: flex;
}
.logo a {
  display: flex;
  align-items: center;
  height: 100%;
}
.logo img {
  width: 42px;
  height: 42px;
}
.nav {
  margin: 0 60px;
  display: flex;
  flex-grow: 1;
}
.nav a {
  display: block;
  padding: 0 30px;
}
.nav .router-link-exact-active {
  color: #fcb85f;
}
.user {
  font-size: 14px;
}
.user * {
  margin-left: 10px;
}
.header a {
  color: #fff;
}
</style>