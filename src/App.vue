<template>
  <div id="app">
    <div class="container">
      <Home />
    </div>
  </div>
</template>

<script>
import Home from "./pages/Home";

export default {
  name: "App",
  components: {
    Home,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.news-channels {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
