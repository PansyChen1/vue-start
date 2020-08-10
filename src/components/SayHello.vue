<template>
  <div>
    <span>{{ message }}</span>

    <!-- 监听事件 -->
    <div>
      <button @click="count += 1">add button</button>
      <p>This button has been clicked {{count}} times.</p>
    </div>

    <p @click="warn('Form cannot be submit yet...', $event)">Submit</p>


    <!-- 多个复选框绑定到同一个数组 -->
    <input type="checkbox" id="jack" value="jack" v-model="checkedNames">
    <label for="jack">Jack</label>
    <input type="checkbox" id="champion" value="champion" v-model="checkedNames">
    <label for="champion">champion</label>
    <input type="checkbox" id="sarry" value="sarry" v-model="checkedNames">
    <label for="sarry">Sarry</label>
    <br>
    <p>Checked names: {{checkedNames}}</p>
    
  </div>
</template>

<script>
export default {
  name: "SayHello",
  data() {
    return {
      hello: "hello",
      count: 0,
      checkedNames: []
    };
  },
  methods: {
      warn: function(message, event) {
          if(event) {
              event.preventDefault();
          }
        alert(message)
      }
  },
  props: {
    message: String,
  },
};
</script>

<style scoped>
</style>