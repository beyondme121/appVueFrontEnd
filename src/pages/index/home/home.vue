<template>
  <div id="home">
    <!-- 头部 -->
    <home-header></home-header>
    <!-- 内容区域 -->

  </div>
</template>
<script>
import homeHeader from "./components/homeHeader";
import swiperContainer from "./components/swiperContainer";
import { mapActions } from "vuex";

export default {
  name: "home",
  components: {
    homeHeader,
    swiperContainer
  },
  methods: {
    ...mapActions("index", ["getSubjectData"])
  },
  created() {
    this.getSubjectData();
  }
};
</script>
<style lang="stylus" scoped>
#home {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding-bottom: 48px;
  background-color: #f2f2f2;
}
</style>
