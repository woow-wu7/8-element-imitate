<template>
  <section class="badge">
    <slot></slot>
    <sup
      :class="[
        isDot ? 'badge__dot' : 'badge__content',
        `badge__content--${type}`,
      ]"
      v-text="getValue"
    ></sup>
  </section>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
    },
    isDot: Boolean,
    max: Number,
    type: {
      type: String,
      validator(val) {
        return (
          ["primary", "success", "warning", "info", "danger"].indexOf(val) > -1
        );
      },
    },
  },
  computed: {
    getValue() {
      return this.isDot
        ? ""
        : this.value < this.max
        ? this.value
        : `${this.max}+`;
    },
  },
};
</script>

<style scoped lang="scss">
$height: 18px;
@mixin calcPosition {
  position: absolute;
  top: 0;
  right: 1px;
  transform: translateY(-50%) translateX(100%);
  color: white;
  background: red;
  @content;
}
@each $type, $color in (primary: blue, success: green, danger: red) {
  .badge__content--#{$type} {
    background: $color !important;
  }
}

.badge {
  display: inline-block;
  position: relative;
  vertical-align: middle;
  .badge__dot {
    @include calcPosition() {
      background: red;
    }

    height: 8px;
    width: 8px;
    padding: 0;
    border-radius: 50%;
  }
  .badge__content {
    @include calcPosition();
    display: inline-block;
    text-align: center;

    height: $height;
    line-height: 18px;
    border-radius: 10px;
    padding: 0 6px;
    font-size: 12px;
  }
}

</style>