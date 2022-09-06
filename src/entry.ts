import { App } from "vue";
import MyButton from "./Sbutton";
import SFCButton from "./SFCButton.vue";
import JSXButton from "./JSXButton";
// import SButton from "./Button/Button.vue";  /// 引入引入SButtton的SFC文件类型 需配置vite.config.js
import SButton from "./Button/index"; /// 引入SButtton的tsx文件类型 需配置vite.config.js

// 导出单独组件
export { MyButton, SFCButton, JSXButton, SButton };

// 编写一个插件，实现一个install方法

export default {
  install(app: App): void {
    app.component(MyButton.name, MyButton);
    app.component(SFCButton.name, SFCButton);
    app.component(JSXButton.name, JSXButton);
    app.component(SButton.name, SButton);
  },
};
