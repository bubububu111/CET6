# AGENTS.md — 六级备考助手（cet6-prep）

本文件为 AI 协作开发提供项目上下文。改动代码前请先读此文件。

## 项目是什么

一个纯前端、单页（SPA，hash 路由）、**无构建工具、无框架**的 CET-6 备考网站。
用原生 JavaScript + CSS 实现，所有用户数据存储在浏览器 `localStorage`。

- 项目根：`D:\18023\Documents\Zcode\cet6-prep`
- 本地预览：`python -m http.server 8000` 后访问 `http://localhost:8000`（必须走 HTTP，`file://` 会有浏览器限制）
- 运行依赖：Chrome/Edge 即可，无需 npm install、无后端

## 目录结构

```
cet6-prep/
├── index.html          # 入口，挂载全部 <script> 与 <link>（带 ?v=N 版本号）
├── css/style.css       # 全部样式 + 主题变量（CSS 变量实现 7 套主题）
├── js/                 # 逻辑模块（IIFE，挂载到 window.CET6 命名空间）
│   ├── app.js          # 路由 + 首页 + 设置页
│   ├── store.js        # localStorage 读改写工具 + 全局工具(CET6.util/u)
│   ├── vocab.js        # 词汇：卡片/列表/错题本/拼写测试 + SM-2 复习
│   ├── daily.js        # 每日学习：每日一句/语感/计时/热力图
│   ├── reading.js      # 阅读：仔细/匹配/选词 + 中英对照(AI)
│   ├── listenwrite.js  # 听力 + 写作批改
│   ├── translate.js    # 翻译练习 + AI 评分 + 复盘
│   ├── tools.js        # 工具区：查词典/中英互译
│   ├── tts.js          # 文字转语音（Web Speech API）
│   ├── ai.js           # OpenAI 兼容 AI 调用（智谱/DeepSeek/OpenAI）
│   └── cheatsheet.js   # 干货速查页渲染 + 搜索 + 收藏 + 打印
├── data/               # 纯数据文件（IIFE 或 JS 全局，只含数据）
│   ├── vocabulary.js   # 核心词库 window.CET6_VOCAB
│   ├── vocab_ext1~14.js # 词汇扩展包（挂 CET6_VOCAB.words）
│   ├── cheatsheet.js   # 干货数据 window.CET6_CHEATSHEET
│   ├── reading.js + reading_ext*.js
│   ├── passages.js + passages_ext*.js  # 翻译素材
│   ├── listening.js + listening_ext.js # 听力素材
│   ├── sentences.js    # 每日一句
│   ├── writing.js + writing_ext.js     # 写作范文
│   └── gen_audio.py    # 生成听力 mp3 的脚本
└── audio/              # 听力 MP3（short/long/passage/dictation 子目录）
```

## 核心约定（务必遵守）

### 1. 命名空间与数据全局
- 逻辑代码统一用 IIFE 包裹：`(function(){ const CET6 = window.CET6 = window.CET6 || {}; ... })()`
- 每个模块暴露 `CET6.xxx` 对象，含 `render(view, params)` 方法
- 数据文件挂在独立全局：`CET6_VOCAB`、`CET6_CHEATSHEET`、`CET6_READING`、`CET6_PASSAGES`、`CET6_LISTENING`
- 页面容器永远是 `#view`，由 `app.js` 的 router 调用各模块 `render` 并传入

### 2. 路由
- data/news 模式：`#/vocab` → CET6.vocab.render；`#/reading` → CET6.reading.render；`#/cheatsheet` → CET6.cheatsheet.render
- 新模块或子页需在 `app.js` `routes` 数组（导航）与 `router()` switch 中注册

### 3. 数据存储
- 统一用 `CET6.store` 的方法读写，key 带 `cet6prep_` 前缀，值 JSON 序列化
- 覆盖：设置(`settings`)、学习记录(`studyLog`)、词汇状态(`known/review`)、单词收藏(`favWords`)、错题、干货收藏(`cheat_fav`) 等
- **新增存储 key 时在 store.js 内加方法**，不要直接在业务代码里裸写 localStorage

### 4. 版本号（重要）
- `index.html` 内所有 `<script src="?v=N">` / `<link href="?v=N">` 带版本号
- **改动任一 js/css/data 文件后，必须把对应标签版本 +1**，否则浏览器缓存会造成"改了没生效"或旧代码报错
- 遇到"改了不生效/语法报错但代码对"，先查版本号和强刷（Ctrl+Shift+R）

### 5. 数据文件扩展词汇/素材
- 词汇扩展：新建 `data/vocab_extN.js`，格式：
  ```js
  (function(){ var w=[{w:"abide",p:"/əˈbaɪd/",d:"v. 遵守",c:"verb",s:3}]; if(window.CET6_VOCAB&&window.CET6_VOCAB.words){window.CET6_VOCAB.words=window.CET6_VOCAB.words.concat(w);} })();
  ```
  - 字段：`w`单词 `p`音标 `d`释义 `c`分类(verb/adj/econ/tech…) `s`真题频率1-5 `e/ec`例句/译文
  - **必须包含 `c` 分类字段**，否则不显示在卡片分类列表
- 营收素材（阅读/翻译/听力/干货）同理新建 `*_ext*.js`，挂到对应全局数组
- 新模式数据都要在 `index.html` 挂载 script，并 +1 版本号

### 6. 尽量避免的
- 不要引入 npm/构建工具/框架，保持纯静态可双击打开（HTTP 下）
- 不在业务代码裸写 localStorage / 不直接改 window.CET6 之外命名空间
- 大文件（词汇/素材 >几百条）拆文件，避免单次生成长内容被截断

## 数据规模现状（参考）
- 词汇：**5362+ 词**（vocabulary.js 核心 + vocab_ext1~14）
- 阅读仔细阅读：30+ 篇（reading.js + reading_ext1~4）
- 翻译素材：70+ 篇（passages.js + passages_ext1~4）
- 听力：短对话/长对话/短文/听写 各若干（listening*.js + audio/*.mp3）
- 写作：20+ 范文（writing.js + writing_ext.js）
- 干货速查：**67 个板块**（cheatsheet.js），含搜索 + 收藏 + 打印

## 验证方式
- 语法校验：`node --check js/xxx.js` 与 `node --check data/xxx.js`
- 功能/UI 验证：浏览器访问 `localhost:8000`，改动后用 Ctrl+Shift+R 硬刷
- 修改完 js/css 记得升 index.html 对应版本号