<template>
  <!-- 这里并没有设置 never 的样式，因为 never 时不需要任何样式 -->
  <section
    class="card"
    :class="[shadow ? `card--is-${shadow}` : `card--is-always`]"
  >
    <header class="card__header" v-if="header || $slots.header">
      <slot name="header">{{ header }}</slot>
      <!-- 属性：这里通过默认内容插入header属性的内容 -->
      <!-- 插槽：当插槽存在时，渲染header插槽的内容 -->
      <!-- 当header和this.$slots.header都不存时，不渲染header -->
    </header>
    <section class="card__body" :style="bodyStyle">
      <slot></slot>
    </section>
  </section>
</template>

<script>
export default {
  name: "TestCard",
  props: {
    shadow: {
      type: String,
      validator(type) {
        return ["always", "hover", "never"].includes(type);
      },
    },
    bodyStyle: Object,
    header: {},
  },
};
</script>

<style scoped lang="scss">
$block: card;
$border: 1px solid #ebeef5;
$box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

@mixin when($state) {
  @at-root {
    .#{$block}--is-#{$state} {
      @content;
    }
  }
}

.card {
  border: $border;

  @include when(always) {
    box-shadow: $box-shadow;
  }

  @include when(hover) {
    &:hover,
    &:focus {
      box-shadow: $box-shadow;
    }
  }

  .card__header {
    padding: 20px;
    border-bottom: $border;
    box-sizing: border-box;

    display: flex;
    justify-content: space-between;
  }
  .card__body {
    padding: 20px;
  }
}
</style>