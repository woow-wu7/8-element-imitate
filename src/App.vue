<template>
  <div id="app">
    <dv-row>
      <dv-col :span="12">
        <div>12</div>
      </dv-col>
      <dv-col :span="6">
        <div>6</div>
      </dv-col>
      <dv-col :span="6">
        <div>6</div>
      </dv-col>
    </dv-row>

    <!-- 以下是各种测试 -->
    <TestFor />
    <TestEvent />
  </div>
</template>

<script>
import TestFor from "./Test-$placeholder/test-scss/@for.vue";
import TestEvent from "./Test-$placeholder/test-event/index.vue";
export default {
  name: "App",
  components: {
    TestFor: TestFor, // 测试 @for $i from x to/through xxx
    TestEvent: TestEvent,
  },
};
</script>

<style scoped lang="scss">
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.content {
  width: 300px;
  height: 300px;
  background: yellow;
}
</style>
