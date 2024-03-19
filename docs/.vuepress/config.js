const { webpackBundler } = require("@vuepress/bundler-webpack");
const path = require("path");
const fs = require("fs");
const routelife = require("./routes/Life.js")
const { defaultTheme } = require("vuepress-webpack");
const sidebarConfig =  require("./sidebarConfig");
const { docsearchPlugin } = require("@vuepress/plugin-docsearch");
module.exports = {
  title: "77-docs",
  description: "Welcome to 77's docs",
  plugins: [
    docsearchPlugin({
      appId: "PFAMZDC9Z4",
      apiKey: "b528d6541463420ac954f7fca1565180",
      indexName: "jgsrty",
    }),
  ],
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/img/rty-docs.ico",
      },
    ],
    [
      "meta",
      {
        name: "keywords",
        content:
          "77",
      },
    ],
  ],
  theme: defaultTheme({
    repo: "https://jiaheqi.github.io/77/",
    docsRepo: "https://jiaheqi.github.io/77/",
    docsBranch: "master",
    contributorsText: "贡献者",
    editLinkText: "在GitHub上编辑此页",
    editLinkPattern: ":repo/edit/:branch/docs/:path",
    lastUpdatedText: "上次更新",
    // 顶部导航菜单
    navbar: [
      {
        text: "主页",
        link: "/",
      },
      {
        text: "工作",
        link: "/work/introduction",
        activeMatch: "^/work/*",
      },
      {
        text: "学习点滴",
        link: "/study/introduction",
        activeMatch: "^/study/*",
      },
      {
        text: "生活",
        link: "/life/introduction",
        activeMatch: "^/life/",
      },
      {
        text: "汉语言文学",
        link: "/english/SelfStudy/ChineseLiterature/红楼梦回目(八十回).html",
        activeMatch: "^/english/SelfStudy",
      },
      {
        text: "英文阅读",
        link: "/english/introduction",
        activeMatch: "^/english/[2018,2019,2020,2021]",
      },
      {
        text: "Music",
        link: "/music/introduction",
        activeMatch: "^/music/",
      },
      {
        text: "组件",
        link: "/components/introduction",
        activeMatch: "^/components/",
      },
      {
        text: "口语短文",
        link: "/oral/introduction",
        activeMatch: "^/oral/",
      },
      {
        text: "了解更多",
        children: [
          { text: "掘金", link: "https://juejin.cn/user/2154698520407687" },
          { text: "码云Gitee", link: "https://gitee.com/RtyXmd" },
          { text: "简书", link: "https://www.jianshu.com/u/0f735486a824" },
          { text: "移动端Music", link: "http://47.100.53.108:7300/#/index" },
          {
            text: "管理后台模板",
            link: "http://47.100.53.108:9527/#/charts/pieChart",
          },
        ],
      },
    ],
    sidebarDepth: 2,
    // // 侧边栏：菜单
    // sidebar: {
    //   "/english/": englishFiles,
    //   "/study/": studyFiles,
    //   // "/study/": [
    //   //   {
    //   //     title: "Study",
    //   //     collapsible: false,        
    //   //     children: genSidebarConfig("study", false)
    //   //   }
    //   // ],
    //   // "/study/": [
    //   //   "/study/introduction.md",
    //   //   {
    //   //     text: "Study",
    //   //     collapsible: false,
    //   //     children: genSidebarConfig("study", true),
    //   //   },
    //   // ],
    //   "/life/": lifeFiles,
    //   "/music/": [
    //     "/music/introduction.md",
    //     {
    //       text: "Music Collection",
    //       collapsible: false,
    //       children: genSidebarConfig("music/collection", true),
    //     },
    //   ],
    //   // "/components/": [
    //   //   "/components/introduction.md",
    //   //   {
    //   //     text: "UI组件",
    //   //     collapsible: false,
    //   //     children: genSidebarConfig("components/UI", true),
    //   //   },
    //   // ],
    //   "/oral/": [
    //     "/oral/introduction.md",
    //     {
    //       text: "英语口语短文",
    //       collapsible: false,
    //       children: genSidebarConfig("oral/essay", true),
    //     },
    //   ],
    // },
    sidebar: sidebarConfig,
  }),
  themeConfig: {
    lastUpdated: "Last Updated",
    //编辑
    repo: "jgsrty/jgsrty.github.docs",
    docsDir: "docs",
    docsBranch: "master",
    editLinks: true,
    //编辑
    sidebarDepth: 3,
  },
  bundler: webpackBundler({
    sass: { indentedSyntax: true },
  }),
};

function genSidebarConfig(dir, hasSub) {
  let p = path.join(__dirname, "../", dir);
  let files = fs.readdirSync(p);
  let subDir = hasSub
    ? dir.split("/")[1]
    : dir.split("/")[1] + "/" + dir.split("/")[2];
  files = files.map((item) => {
    item = subDir
      ? subDir + "/" + path.basename(item, ".md")
      : path.basename(item, ".md");
    return `/${dir.split("/")[0]}/${item}`;
  });
  return files;
}

