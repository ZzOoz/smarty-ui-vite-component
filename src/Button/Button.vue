<template>
  <button
    :class="`
      py-2
      px-4 
      mx-1
      font-semibold 
      rounded-lg 
      shadow-md 
      text-white 
      bg-${color}-500 
      hover:bg-${color}-700 

      border-none 
      cursor-pointer 
      `"
  >
    <i :class="`i-ic-baseline-${icon} p-3`" v-if="icon"></i>
    <slot></slot>
  </button>
</template>

<script>
import "uno.css";
import { defineComponent } from "vue";
export default defineComponent({
  name: "SButton",
  props: {
    color: {
      type: String,
      default: "blue", // 设定默认颜色
    },
    icon: {
      type: String,
      default: "",
    },
  },
});
</script>

<style scoped></style>
