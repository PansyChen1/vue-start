<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <SayHello message="----------------This is say hello component-----------"/>
    <SlotExample>
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

      <template slot-scope="a">
        {{a}}
      </template>

    </SlotExample>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import SayHello from './components/SayHello'
import SlotExample from './components/SlotExample'

export default {
  name: 'App',
  components: {
    HelloWorld,
    SayHello,
    SlotExample
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
</style>
