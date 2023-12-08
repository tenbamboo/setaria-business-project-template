// import jaUi from 'setaria-ui/lib/locale/lang/ja';
// import enUi from 'setaria-ui/lib/locale/lang/en';
// import zhUi from 'setaria-ui/lib/locale/lang/zh-CN';
import vxeZh from "vxe-table/lib/locale/lang/zh-CN";
import vxeEn from "vxe-table/lib/locale/lang/en-US";

// import scZh from "setaria-components/lib/locale/lang/zh-cn";
import zhLocal from "./lang/zh";
import enLocal from "./lang/en";

export default {
  legacy: false,
  locale: "zh-cn", // 设置语言环境
  fallbackLocale: "zh-cn",
  silentTranslationWarn: true, // 关闭警告
  messages: {
    "zh-cn": {
      ...vxeZh,
      // ...scZh,
      ...zhLocal,
    },
    "en-us": {
      ...vxeEn,
      ...enLocal,
    },
  }, // 设置语言环境信息
};
