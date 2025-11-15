# 🌈 MyDesign - 现代化 React 组件库

> ⚡ 优雅 · 高性能 · 强类型 —— 为新一代 React 开发者而生。

![MyDesign Banner](https://img.shields.io/badge/MyDesign-Custom%20UI%20Library-blueviolet?style=for-the-badge)

![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=flat-square\&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square\&logo=typescript)
![SCSS](https://img.shields.io/badge/SCSS-1.x-CC6699?style=flat-square\&logo=sass)
![Jest](https://img.shields.io/badge/单元测试-Jest%20%26%20@testing--library%2Fjest--dom-99424F?style=flat-square\&logo=jest)
[![DeepWiki](https://img.shields.io/badge/DeepWiki-Chris--young42%2FmyDesigner-blue.svg?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAyCAYAAAAnWDnqAAAAAXNSR0IArs4c6QAAA05JREFUaEPtmUtyEzEQhtWTQyQLHNak2AB7ZnyXZMEjXMGeK/AIi+QuHrMnbChYY7MIh8g01fJoopFb0uhhEqqcbWTp06/uv1saEDv4O3n3dV60RfP947Mm9/SQc0ICFQgzfc4CYZoTPAswgSJCCUJUnAAoRHOAUOcATwbmVLWdGoH//PB8mnKqScAhsD0kYP3j/Yt5LPQe2KvcXmGvRHcDnpxfL2zOYJ1mFwrryWTz0advv1Ut4CJgf5uhDuDj5eUcAUoahrdY/56ebRWeraTjMt/00Sh3UDtjgHtQNHwcRGOC98BJEAEymycmYcWwOprTgcB6VZ5JK5TAJ+fXGLBm3FDAmn6oPPjR4rKCAoJCal2eAiQp2x0vxTPB3ALO2CRkwmDy5WohzBDwSEFKRwPbknEggCPB/imwrycgxX2NzoMCHhPkDwqYMr9tRcP5qNrMZHkVnOjRMWwLCcr8ohBVb1OMjxLwGCvjTikrsBOiA6fNyCrm8V1rP93iVPpwaE+gO0SsWmPiXB+jikdf6SizrT5qKasx5j8ABbHpFTx+vFXp9EnYQmLx02h1QTTrl6eDqxLnGjporxl3NL3agEvXdT0WmEost648sQOYAeJS9Q7bfUVoMGnjo4AZdUMQku50McDcMWcBPvr0SzbTAFDfvJqwLzgxwATnCgnp4wDl6Aa+Ax283gghmj+vj7feE2KBBRMW3FzOpLOADl0Isb5587h/U4gGvkt5v60Z1VLG8BhYjbzRwyQZemwAd6cCR5/XFWLYZRIMpX39AR0tjaGGiGzLVyhse5C9RKC6ai42ppWPKiBagOvaYk8lO7DajerabOZP46Lby5wKjw1HCRx7p9sVMOWGzb/vA1hwiWc6jm3MvQDTogQkiqIhJV0nBQBTU+3okKCFDy9WwferkHjtxib7t3xIUQtHxnIwtx4mpg26/HfwVNVDb4oI9RHmx5WGelRVlrtiw43zboCLaxv46AZeB3IlTkwouebTr1y2NjSpHz68WNFjHvupy3q8TFn3Hos2IAk4Ju5dCo8B3wP7VPr/FGaKiG+T+v+TQqIrOqMTL1VdWV1DdmcbO8KXBz6esmYWYKPwDL5b5FA1a0hwapHiom0r/cKaoqr+27/XcrS5UwSMbQAAAABJRU5ErkJggg==)](https://deepwiki.com/Chris-young42/myDesigner)

---

## 🚀 简介

**MyDesign** 是一个受 **Ant Design** 启发的现代化 React UI 组件库，基于 **React 19**、**TypeScript** 与 **SCSS 模块化样式** 构建，具有更强的类型安全、更好的性能以及更优的开发体验。

无论是企业级管理系统、组件平台，还是个人项目原型，MyDesign 都能帮助你以优雅的方式快速构建高质量界面。

---

## 🧱 技术栈

| 技术                     | 说明                         |
| ---------------------- | -------------------------- |
| ⚛️ **React 19**        | 最新并发渲染架构与 Server Action 支持 |
| 🌀 **TypeScript**      | 全面类型定义，带来更安全的开发体验          |
| 🎨 **SCSS 模块**         | 模块化样式管理，支持动态主题切换           |
| 🧪 **Jest + jest-dom** | 完备的单元测试体系，保障组件稳定可靠         |

---

## 📦 安装

```bash
# 使用 npm
npm install mydesign --save

# 使用 yarn
yarn add mydesign

# 使用 pnpm
pnpm add mydesign
```

---

## 🔧 快速上手

引入样式并使用组件：

```tsx
import React from 'react';
import { Button } from 'mydesign';
import 'mydesign/dist/index.css';

export default function App() {
  return <Button type="primary" size="large">你好，MyDesign！</Button>;
}
```

---

## 🧩 示例组件

### 按钮（Button）

```tsx
<Button type="primary">主要按钮</Button>
<Button type="danger" size="small">危险按钮</Button>
<Button type="ghost" disabled>禁用按钮</Button>
```

### 输入框（Input）

```tsx
<Input placeholder="请输入内容" />
<Input prefixIcon="search" />
```

---

## 🧪 运行测试

```bash
# 运行所有单元测试
npm test

# 监听模式
npm run test:watch
```

项目内置 **Jest** 与 **@testing-library/jest-dom**，用于验证组件的功能与可访问性。

---

## 🛠️ 本地开发

```bash
# 克隆仓库
git clone https://github.com/yourname/mydesign.git
cd mydesign

# 安装依赖
npm install

# 启动示例文档
npm run dev

# 打包构建
npm run build
```

---

## 💎 特性

✅ 高度可定制的组件设计
✅ 支持暗黑模式与主题切换
✅ 使用 TypeScript 全面约束类型
✅ 单元测试全覆盖，持续集成无忧
✅ SCSS 模块化，样式隔离且灵活

---

## 📖 未来计划

* 🌗 主题系统增强
* 🧭 更丰富的组件生态（如 Table、Form、Modal）
* 📚 Storybook 文档支持
* 🔥 动画与交互增强

---

## ❤️ 致谢

MyDesign 灵感来源于 [Ant Design](https://ant.design) 与 [Material UI](https://mui.com)。

如果你喜欢这个项目，欢迎 **Star ⭐ 支持**！

---

> Made with Chris-young42
