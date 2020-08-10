<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <!-- 声明式渲染 -->
    <h2>{{ end }}</h2>

    <span v-bind:title="time">鼠标悬停几秒</span>

    <a :href="url">v-bind 指令缩写</a>

    <button @click="consoleMessage">console message</button>
    <button @click="consolee">consolee</button>

    <p v-if="seen">enable see</p>
    <p v-else>if else</p>

    <!-- 条件与循环 -->
    <ul>
      <li v-for="prop in todos" :key="prop.text">{{ prop.text }}</li>
    </ul>

    <li v-for="n in evenNumbers" :key="n">{{n}}</li>

    <ul class="info">
      <li v-for="(value, name) in infoObject" :key="name">{{name}} - {{value}}</li>
    </ul>

    <!-- 处理用户输入 -->
    <button v-on:click="reverseMessage">反转消息</button>

    <p>{{input}}</p>
    <input type="text" v-model="input" />

  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  // data: function() {
  //   return {
  //     start: 'start'
  //   }
  // },
  data() {
    return {
      end: "end",
      time: "页面加载于",
      seen: true,
      todos: [
        { text: "reading" },
        { text: "learning vue.js" },
        { text: "climbing" },
      ],
      infoObject: {
        title: "How are you",
        author: "Champion",
        desctiption: "This is her life style"
      },
      numbers: [1, 3, 4, 8, 13, 14, 37],
      input: "input",
      url: "https://baidu.com"
    };
  },
  methods: {
    reverseMessage: function () {
      this.end = this.end.split("").reverse().join("");
    },
    consoleMessage: function() {
      console.log('v-on 缩写是@click')
    },
    consolee: function() {
      console.log("console")
    }
  },
  props: {
    msg: String,
  },
  computed: {
    evenNumbers: function() {
      return this.numbers.filter(function(nums) {
        return nums % 2 === 0;
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  /* display: inline-block; */
  margin: 0 10px;
}
a {
  color: #42b983;
}
.info {
  float: left;
  text-align: left;
}
</style>
