in<template>
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
    <TestEvent @custom="customEvent" />

    <TestVmodel
      @focus.native="onFucus"
      :age="age"
      @change-age="age = $event"
      :age2.sync="age2"
    />
    <!-- 注意： @change-age="age = $event" 表示：当子组件通过$emit触发@change-age事件时，$event代表了$emit的第一个参数 -->
  </div>
</template>

<script>
import TestFor from "./Test-$placeholder/test-scss/@for.vue";
import TestEvent from "./Test-$placeholder/test-event/index.vue";
import TestVmodel from "./Test-$placeholder/test-v-model/index.vue";
export default {
  name: "App",
  components: {
    TestFor: TestFor, // 测试 @for $i from x to/through xxx
    TestEvent: TestEvent,
    TestVmodel: TestVmodel,
  },
  data() {
    return {
      age: 1,
      age2: 2,
    };
  },
  methods: {
    customEvent(param) {
      console.log("自定义事件", param);
    },
    onFucus(e) {
      console.log(`e`, e);
      console.log(
        "失效，因为字符串中的input外面有其他的元素，不是第一层就是input，div是没有原生的focus事件的"
      );
    },
    changeAge(age) {
      this.age = age;
    },
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
