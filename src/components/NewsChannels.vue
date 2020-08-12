<template>
  <div class="news-types" v-if="channels.length > 0">
    <div
      class="item"
      v-for="(item, i) in showChannels"
      :key="i"
      :class="{
          active: item.channelId === chooseId
      }"
      @click="switchTo(item.channelId)"
    >
      <span class="name">{{item.channelName}}</span>
    </div>
    <!-- .prevent 阻止默认事件 -->
    <a href @click.prevent="isCollapse=!isCollapse">{{isCollapse ? "展开" : "收起"}}</a>
  </div>
</template>

<script>
import { getNewsChannels } from "../services/newsService";
// import utils from "../utils/utils";
export default {
  name: "NewsChannels",
  data() {
    return {
      channels: [],
      isCollapse: true, // 当前是否为折叠状态
      chooseId: null, // 表示当前选中的频道id
    };
  },
  created() {
    console.log("组件渲染了");
    getNewsChannels().then((res) => {
      console.log("obj res--", res);
      this.channels = res;
      console.log(this.channels);
      // 此时才有数据
      this.switchTo(this.channels[0].channelId);
    });
  },
  updated() {
    console.log("组件重新渲染了");
  },
  computed: {
    showChannels() {
      if (this.isCollapse) {
        return this.channels.slice(0, 8);
      } else {
        return this.channels;
      }
    },
  },
  methods: {
    // 切换chooseId
    switchTo(id) {
      this.chooseId = id;
      // 知道频道被切换了，但是不知道切换之后做什么
      // 触发一个事件，让组件的使用者去解决这件事
      // 通过事件的机制通知父组件，由父组件确认做什么事
      this.$emit("changeChannelId", this.chooseId)
    },
  },
};
</script>

<style scoped>
.news-types {
  margin: 30px 0;
  border-bottom: 1px solid #ccc;
  display: flex;
  flex-wrap: wrap;
  font-size: 14px;
  padding-bottom: 15px;
}
.item {
  padding: 10px 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-right: 15px;
  margin: 7px 15px 7px 0;
  cursor: pointer;
  position: relative;
}
.item:hover {
  background: #ccc;
}
.item.active {
  background: #000;
  color: #fff;
}
.news-types a {
  align-self: flex-end;
  margin-bottom: 20px;
  color: #409eff;
}
</style>