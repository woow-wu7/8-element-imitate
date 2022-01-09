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
        <div>a1</div>
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
    <TestRecursive :tree="tree" />

    <!-- 测试render函数 和 vnode.componentOptions.tag -->
    <TestRender>
      <TestRenderChild1 />
      <TestRenderChild2 />
    </TestRender>

    <TestSup />

    <TestBadge :value="badgeValue" :max="14" type="success">
      <button>按钮</button>
    </TestBadge>

    <TestCard shadow="hover" :bodyStyle="bodyStyle">
      <template #header>
        <span>卡片名称</span>
        <button>操作安按钮</button>
      </template>
      <div>
        <p>content</p>
      </div>
    </TestCard>
  </div>
</template>

<script>
import TestFor from "./Test-$placeholder/test-scss/@for.vue";
import TestEvent from "./Test-$placeholder/test-event/index.vue";
import TestVmodel from "./Test-$placeholder/test-v-model/index.vue";
import TestRecursive from "./Test-$placeholder/test-recursive/index.vue";
import TestRender from "./Test-$placeholder/test-render/index";
import TestRenderChild1 from "./Test-$placeholder/test-render/TestRenderChild1.vue";
import TestRenderChild2 from "./Test-$placeholder/test-render/TestRenderChild2.vue";
import TestSup from "./Test-$placeholder/test-sup/index.vue";
import TestBadge from "./Test-$placeholder/components/test-badge/Badge.vue";
import TestCard from "./Test-$placeholder/components/test-card/Card.vue";

export default {
  name: "App",
  components: {
    TestFor, // 测试 @for $i from x to/through xxx
    TestEvent,
    TestVmodel,
    TestRecursive,
    TestRender,
    TestRenderChild1,
    TestRenderChild2,
    TestSup,
    TestBadge,
    TestCard,
  },
  data() {
    return {
      badgeValue: 108,
      age: 1,
      age2: 2,
      tree: {
        name: "father",
        expand: true, // 是否已经展开
        leaf: false, // 是否是叶子节点来区分是现实文件夹，还是文件等等
        children: [
          {
            name: "child1",
            expand: true,
            leaf: true,
          },
          {
            name: "child2",
            expand: true,
            leaf: false,
            children: [
              {
                name: "grandson",
                leaf: true,
                expand: true,
              },
            ],
          },
        ],
      },
      bodyStyle: {
        background: "yellow",
      },
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
