export default {
  data() {
    return {
      buttonName: "button",
    };
  },
  methods: {
    go() {
      console.log("点击");
    },
  },
  mounted(){
    this.$slots.default.forEach(vnode => {
      console.log(`vnode`, vnode)
      console.log(`vnode.componentOptions.tag`, vnode.componentOptions.tag)
    })
  },
  render(h) {
    return h(
      "div",
      {
        style: {
          background: "red",
        },
      },
      [
        this.$slots.default,
        h("p", "test-render"),
        h(
          "button",
          {
            on: {
              click: this.go,
            },
          },
          this.buttonName
        ),
      ]
    );
  },
};
