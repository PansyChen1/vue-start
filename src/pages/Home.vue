<template>
  <div class="home">
    <Banner :bannerArr="bannerArr" :duration="2000" />

    <!-- 监听消息 -->
    <NewsChannels @changeChannelId="handleChange" />

    <Loading v-show="isLoading" />

    <NewsList :news="news" v-show="!isLoading" />
  </div>
</template>

<script>
import Banner from "../components/Banner";
import NewsChannels from "../components/NewsChannels";
import NewsList from "../components/NewsList";
import Loading from "../components/Loading";

import Banner1 from "../assets/banners/banner_01.jpeg";
import Banner2 from "../assets/banners/banner_02.jpeg";
import Banner3 from "../assets/banners/banner_03.jpeg";

import { getNews } from "../services/newsService";

export default {
  components: {
    Banner,
    NewsChannels,
    NewsList,
    Loading,
  },
  data() {
    return {
      bannerArr: [
        { url: Banner1, link: "https://www.baidu.com" },
        { url: Banner2, link: "https://ke.qq.com/course/list/vue" },
        { url: Banner3, link: "https://docs.ksyun.com/documents/28302" },
      ],
      news: [],
      isLoading: true,
    };
  },
  async created() {
    var res = await getNews("5572a109b3cdc86cf39001e0");
    this.news = res;
  },
  methods: {
    async handleChange(channelId) {
      this.isLoading = true;
      var res = await getNews(channelId, 1, 10);
      this.news = res;
      this.isLoading = false;
      console.log(res);
    },
  },
};
</script>

<style scoped>
</style>