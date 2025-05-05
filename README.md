<div align="center">
  <img src="/public/img/logot.svg" alt="Zentry Clone Logo" width="300" />
  
  <!-- 技术栈徽章 -->
  <p>
    <img src="https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
    <img src="https://img.shields.io/badge/Vite_5-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white" alt="GSAP" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  </p>
</div>

## 📝 项目简介

Zentry 克隆项目是基于 [Zentry.com](https://zentry.com) 官方网站设计的复刻项目，使用现代前端技术实现了丰富的视觉效果和交互体验。本项目专注于复制原网站的高级动画和沉浸式体验，展示前端开发的先进技术和创意设计。

### ✨ 核心特性

- 🎭 **高级动画效果**：使用 GSAP 实现流畅的滚动触发动画
- 🔄 **视频背景切换**：主页自动循环切换视频背景
- 🖼️ **3D 卡片效果**：鼠标悬停时的实时 3D 倾斜和光影效果
- 📱 **全响应式设计**：完美适配从移动设备到大屏幕的所有尺寸
- 🔤 **动态文字动画**：字符逐个显示的酷炫动画效果
- 🌊 **视差滚动效果**：多层次视差滚动创造深度感

## 🚀 快速开始

### 前提条件

- Node.js 16.0.0 或更高版本
- npm 或 yarn 包管理器

### 安装

1. 克隆仓库

```bash
git clone https://github.com/yourusername/zentry-clone.git
cd zentry-clone
```

2. 安装依赖

```bash
npm install
# 或
yarn install
```

3. 启动开发服务器

```bash
npm run dev
# 或
yarn dev
```

4. 打开浏览器访问 [http://localhost:5173](http://localhost:5173)

### 构建项目

```bash
npm run build
# 或
yarn build
```

## 💻 技术栈

- **前端框架**: [React 19](https://reactjs.org/)
- **构建工具**: [Vite](https://vitejs.dev/)
- **动画库**: [GSAP (GreenSock Animation Platform)](https://greensock.com/gsap/)
- **样式框架**: [Tailwind CSS](https://tailwindcss.com/)
- **图标库**: [React Icons](https://react-icons.github.io/react-icons/)
- **其他插件**:
    - ScrollTrigger - 滚动触发动画
    - 自定义 3D 变换效果
    - CSS 过渡和动画

## 📁 项目结构

```
zentry-clone/
├── public/               # 静态资源
│   ├── fonts/            # 字体文件
│   ├── img/              # 图片资源
│   └── videos/           # 视频资源
├── src/                  # 源代码
│   ├── assets/           # 项目资源
│   ├── components/       # React组件
│   │   ├── About.jsx     # 关于部分
│   │   ├── AnimatedTitle.jsx # 动画标题组件
│   │   ├── Button.jsx    # 按钮组件
│   │   ├── Contact.jsx   # 联系部分
│   │   ├── Features.jsx  # 功能特性部分
│   │   ├── Footer.jsx    # 页脚组件
│   │   ├── Hero.jsx      # 英雄部分
│   │   ├── NavBar.jsx    # 导航栏
│   │   └── Story.jsx     # 故事部分
│   ├── App.jsx           # 主应用组件
│   ├── index.css         # 全局样式
│   └── main.jsx          # 入口文件
├── .gitignore            # Git忽略文件
├── index.html            # HTML模板
├── package.json          # 依赖和脚本
├── tailwind.config.js    # Tailwind配置
└── vite.config.js        # Vite配置
```

## 🧩 主要功能模块

### 导航栏 (NavBar)

- 滚动时自动隐藏/显示
- 按钮悬停 3D 效果
- 音频播放开关与可视化指示器

### 主页英雄区 (Hero)

- 全屏视频背景
- 自动切换多个视频源
- 中央互动视频预览

### 关于部分 (About)

- 滚动触发的图片扩展动画
- 文字固定效果
- 图片从小卡片到全屏的平滑过渡

### 功能展示 (Features)

- 3D 悬停卡片效果
- 梯形设计元素
- 动态光效跟随鼠标移动

### 故事部分 (Story)

- 3D 视差效果
- 鼠标控制的图片倾斜
- 深度感文字布局

### 联系部分 (Contact)

- 互动式 3D 卡片
- 动态形状变化
- 颜色渐变效果

## 🛠️ 开发指南

### 添加新动画

1. 在需要添加动画的组件中导入 GSAP:

```jsx
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
```

2. 创建动画时间线:

```jsx
const animation = gsap.timeline({
  scrollTrigger: {
    trigger: "#element-id",
    start: "top center",
    end: "bottom center",
    scrub: true
  }
});
```

3. 添加动画效果:

```jsx
animation.to("#target-element", {
  opacity: 1,
  y: 0,
  duration: 1
});
```

### 创建 3D 卡片效果

参考 `BentoTilt` 组件实现类似效果，关键步骤:

1. 跟踪鼠标位置
2. 计算相对位置偏移量
3. 应用适当的 CSS 变换
4. 添加过渡效果确保动画平滑

## 📋 待办事项

- [ ] 添加页面过渡动画
- [ ] 改进移动端交互体验
- [ ] 优化大型视频资源加载
- [ ] 添加深色模式支持
- [ ] 实现 i18n 多语言支持

## 📄 许可证

<p>
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge" alt="MIT License" />
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge" alt="PRs Welcome" />
</p>

本项目仅供学习和参考。设计灵感来自 Zentry.com，所有设计权利归原始创作者所有。

## 📞 联系方式

如有任何问题或建议，请通过以下方式联系我们：

- GitHub Issues: [https://github.com/spacexim/zentry-clone/issues](https://github.com/spacexim/zentry-clone/issues)
- 电子邮件: [zu_yao@outlook.com](mailto:zu_yao@outlook.com)

## 🙏 致谢

- [Zentry.com](https://zentry.com) - 提供设计灵感
- [GSAP](https://greensock.com/gsap/) - 提供强大的动画能力
- [TailwindCSS](https://tailwindcss.com/) - 提供实用的 CSS 工具

---

<div align="center">
  <p>由 ❤️ 和 ☕ 驱动开发</p>
</div>