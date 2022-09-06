const sidebar = {
  "/": [
    { text: "快速开始", link: "/" },
    {
      text: "通用",
      children: [{ text: "Button 按钮", link: "/docs-components/button" }],
    },
    { text: "导航" },
    { text: "反馈" },
    { text: "数据录入" },
    { text: "数据展示" },
    { text: "布局" },
  ],
};

const markdown = {
  config: (md) => {
    // 添加DemoBlock插槽
    const { demoBlockPlugin } = require("vitepress-theme-demoblock");
    md.use(demoBlockPlugin);
  },
};

const config = {
  title: "Hello VitePress",
  description: "Just playing around.",
  themeConfig: {
    sidebar,
  },
  markdown
};
export default config;

// export default config
