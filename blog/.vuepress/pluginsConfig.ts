import { UserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";

export const pluginsConfig: UserConfig["plugins"] = [
  searchProPlugin({
    // 索引文章的全部内容
    indexContent: true,
  }),
];
