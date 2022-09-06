import { defineComponent, h, openBlock, createElementBlock, createElementVNode, createVNode, createTextVNode } from "vue";
const MyButton = defineComponent({
  name: "MyButton",
  render() {
    return h("button", null, "MyButton");
  }
});
const _export_sfc = (sfc, props2) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props2) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = {
  name: "SFCButton"
};
const _hoisted_1 = /* @__PURE__ */ createElementVNode("button", null, "SFC Button", -1);
const _hoisted_2 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_2);
}
const SFCButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const JSXButton = defineComponent({
  name: "JSXButton",
  render() {
    return createVNode("button", null, [createTextVNode("JSX Button")]);
  }
});
const __uno = "";
const props = {
  color: {
    type: String,
    default: "blue"
  },
  icon: {
    type: String,
    default: ""
  }
};
const Button = defineComponent({
  name: "SButton",
  props,
  setup(props2, {
    slots
  }) {
    return () => createVNode("button", {
      "class": `
      py-2
      px-4 
      mx-1
      font-semibold 
      rounded-lg 
      shadow-md 
      text-white 
      bg-${props2.color}-500 
      hover:bg-${props2.color}-700 

      border-none 
      cursor-pointer 
      `
    }, [props2.icon !== "" ? createVNode("i", {
      "class": `i-ic-baseline-${props2.icon} p-3`
    }, null) : "", slots.default ? slots.default() : ""]);
  }
});
const entry = {
  install(app) {
    app.component(MyButton.name, MyButton);
    app.component(SFCButton.name, SFCButton);
    app.component(JSXButton.name, JSXButton);
    app.component(Button.name, Button);
  }
};
export {
  JSXButton,
  MyButton,
  Button as SButton,
  SFCButton,
  entry as default
};
//# sourceMappingURL=smarty-ui.mjs.map
