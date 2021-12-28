<template>
  <div
    style="
      border: 2px solid black;
      padding: 10px;
      margin: 10px 0;
      display: inline-block;
    "
  >
    <div
      @click="expand(tree)"
      :class="{ 'tree-folder': tree.leaf, 'tree-not-folder': !tree.leaf }"
    >
      {{ tree.name }}
    </div>
    <div v-if="tree.expand">
      <div v-for="item in tree.children" :key="item.name">
        <TestRecursive :tree="item" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TestRecursive",
  props: {
    tree: {
      type: Object,
    },
  },
  methods: {
    expand(tree) {
      tree.expand = !tree.expand;
    },
  },
};
</script>

<style>
.tree-folder {
  background: rgb(243, 68, 220);
}
.tree-not-folder {
  background: rgb(114, 240, 181);
}
</style>