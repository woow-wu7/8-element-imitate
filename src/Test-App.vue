<template>
  <div id="app">
    <p>{{ name }}</p>
    <div class="content">
      <p>content</p>
      <div class="aa-flex">mixin测试的内容1</div>
      <div>mixin测试的内容2</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      name: "app",
    };
  },
};
</script>

<style scoped lang="scss">
// @mixin 和 @include 和 @content
// @mixin aa -----> 定义一个混合器aa
// @include aa ---> 使用混合器aa
// @content; ------> 将include aa 中定义的样式引入到@mixin中
@mixin test-mixin($color: red) {
  // 1
  // $color: red
  // 这里冒号后面是默认值，在没有传入参数时，默认值生效
  div {
    background: $color;
    @content; // 将 @include中定义的样式引入到 @mixin 的 div 中
    // .aa-flex {
    //   color: green;
    // }
    @at-root {
      $current-color: red;
      $current-color: blue;
      .aa-flex {
        color: $current-color;
      }
    }
  }

  // .aa-flex {
  //   color: green;
  // }
}

#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  .content {
    padding: $safe-padding; // 使用全局scss样式
    border: $border-1px;
    @include test-mixin(yellow) {
      // --- @include，花括号中的内容在 @mixin中 可以通过 @content 来引用
      font-size: 30px;
      font-weight: 700;
    }
  }
}
</style>
