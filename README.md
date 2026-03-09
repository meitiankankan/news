# 📰 动态新闻网站

每日60秒读懂世界 - 一个简洁的动态新闻展示网站

## ✨ 功能特点

- 📰 每日新闻自动更新
- 🖼️ 新闻图片展示
- 🔊 音频播放支持
- 💭 每日微语
- 📱 响应式设计
- 🔄 自动刷新（每5分钟）

## 🚀 快速部署

### 部署到 GitHub Pages

1. Fork 或下载本仓库
2. 进入仓库 Settings → Pages
3. Source 选择 `main` 分支
4. 点击 Save
5. 访问 `https://你的用户名.github.io/仓库名/`

就这么简单！

**📚 详细教程：** [部署教程.md](部署教程.md) - 包含图文说明和3种部署方法

## 📁 文件说明

```
dynamic-news/
├── index.html   # 主页面
├── style.css    # 样式文件
├── script.js    # 功能脚本
└── README.md    # 说明文档
```

## 🎨 自定义

### 修改颜色主题

编辑 `style.css` 第7行：

```css
/* 当前主题 */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* 绿色主题 */
background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);

/* 橙色主题 */
background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
```

### 修改刷新频率

编辑 `script.js` 最后一行：

```javascript
// 当前：5分钟
setInterval(loadNews, 5 * 60 * 1000);

// 改为10分钟
setInterval(loadNews, 10 * 60 * 1000);

// 改为1分钟
setInterval(loadNews, 1 * 60 * 1000);
```

## 🔧 技术栈

- HTML5
- CSS3 (Grid 布局)
- JavaScript (ES6+)
- Fetch API

**无依赖** - 不需要任何框架或库

## 📊 API

使用 `https://api.suxun.site/api/sixs?type=json` 提供的新闻数据

## 🌐 浏览器支持

- ✅ Chrome 90+
- ✅ Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+

## 📝 许可证

MIT License

## 🙏 致谢

- API 提供：[api.suxun.site](https://api.suxun.site)

---

**预览：** [在线演示](https://你的用户名.github.io/仓库名/)

如有问题或建议，欢迎提 Issue！
