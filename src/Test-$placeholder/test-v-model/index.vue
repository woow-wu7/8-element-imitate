<template>
  <div style="border: 2px solid black; padding: 10px; margin: 10px 0">
    <div>test-v-model</div>
    <input type="text" placeholder="input" />

    <div style="background: yellow; margin: 10px 0">
      <header>
        <br />
        <div>父组件传入的age值 => {{ age }}</div>
        <button @click="changeValueFromFather">
          正常方式：修改父组件传入age的值
        </button>
        <br />
      </header>

      <footer>
        <br />
        <div>父组件传入的age2值 => {{ age2 }}</div>
        <button @click="$emit('update:age2', +new Date())">
          .sync缩写方式：修改父组件传入age的值
        </button>
        <br />
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    age: {
      type: Number,
      default: () => 10,
    },
    age2: {
      type: Number,
      default: () => 10,
    },
  },
  methods: {
    changeValueFromFather() {
      this.$emit("change-age", +new Date());
    },
  },
};
</script>

<style>
</style>