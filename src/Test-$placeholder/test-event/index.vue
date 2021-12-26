<template>
  <div style="border: 2px solid black; padding: 10px; margin: 10px 0">
    <div>test-event</div>
    <button @click.stop.prevent="click('name', $event)">点击-测试事件</button>
    <br />
    <button @click.stop.prevent="clickCustom('name', $event)">
      点击-测试自定义事件
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    click(param, event) {
      console.log("测试事件-传参数", param);
      console.log(`测试事件-原生event对象`, event, event.target);
      console.log(
        "事件修饰符，stop-stopPropagation阻止传播, prevent-preventDefault阻止默认，capture-捕获阶段触发，once-触发一次，passive-滚动行为"
      );
      console.log("按键修饰符-enter，tab等");
      console.log(
        "事件修饰符，按键修饰符，系统修饰符，官网文档",
        "https://cn.vuejs.org/v2/guide/events.html"
      );
    },
    clickCustom(param, event) {
      console.log(param, event);
      this.$emit("custom", 100);
    },
  },
};
</script>

<style>
</style>