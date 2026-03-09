// API配置
// 直接使用HTTPS API
const API_URL = 'https://api.suxun.site/api/sixs?type=json';

// 加载新闻数据
async function loadNews() {
    const loadingEl = document.getElementById('loading');
    const errorEl = document.getElementById('error');
    const newsContainer = document.getElementById('news-container');
    
    // 显示加载状态
    loadingEl.style.display = 'block';
    errorEl.style.display = 'none';
    newsContainer.innerHTML = '';
    
    try {
        // 浏览器会自动添加基本的请求头
        const response = await fetch(API_URL);
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        const data = await response.json();
        
        // 隐藏加载状态
        loadingEl.style.display = 'none';
        
        // 处理数据并渲染
        renderNews(data);
        
        // 更新时间
        updateTime();
        
    } catch (error) {
        console.error('加载新闻失败:', error);
        loadingEl.style.display = 'none';
        errorEl.style.display = 'block';
    }
}

// 渲染新闻列表
function renderNews(data) {
    const newsContainer = document.getElementById('news-container');
    
    // 检查数据结构
    if (!data || !data.news || !Array.isArray(data.news)) {
        newsContainer.innerHTML = '<p style="text-align: center; padding: 40px; background: white; border-radius: 12px;">暂无新闻数据</p>';
        return;
    }
    
    const newsItems = data.news;
    
    if (newsItems.length === 0) {
        newsContainer.innerHTML = '<p style="text-align: center; padding: 40px; background: white; border-radius: 12px;">暂无新闻数据</p>';
        return;
    }
    
    // 添加头部卡片
    const headerCard = createHeaderCard(data);
    newsContainer.appendChild(headerCard);
    
    // 创建新闻列表容器
    const newsListCard = document.createElement('div');
    newsListCard.className = 'news-list-card';
    
    const newsList = document.createElement('ol');
    newsList.className = 'news-list';
    
    // 添加新闻列表项
    newsItems.forEach((item, index) => {
        const listItem = createNewsCard(item, index + 1);
        newsList.appendChild(listItem);
    });
    
    newsListCard.appendChild(newsList);
    newsContainer.appendChild(newsListCard);
    
    // 添加微语卡片
    if (data.weiyu) {
        const weiyuCard = createWeiyuCard(data.weiyu);
        newsContainer.appendChild(weiyuCard);
    }
}

// 创建头图卡片
function createHeaderCard(data) {
    const card = document.createElement('div');
    card.className = 'header-card';
    
    card.innerHTML = `
        <div class="header-content">
            <h1 class="header-title">📰 ${data.date} 每日60秒读懂世界</h1>
            ${data.audio ? `
                <div class="audio-container">
                    <span class="audio-label">🔊 收听新闻</span>
                    <audio controls class="news-audio">
                        <source src="${data.audio}" type="audio/mpeg">
                        您的浏览器不支持音频播放
                    </audio>
                </div>
            ` : ''}
        </div>
    `;
    
    return card;
}

// 创建新闻列表项
function createNewsCard(newsText, index) {
    const item = document.createElement('li');
    item.className = 'news-item';
    
    // 移除开头的数字和顿号（如果有）
    const cleanText = newsText.replace(/^\d+[、，,]\s*/, '');
    
    item.innerHTML = `
        <span class="news-number">${index}</span>
        <span class="news-text">${escapeHtml(cleanText)}</span>
    `;
    
    return item;
}

// 创建微语卡片
function createWeiyuCard(weiyu) {
    const card = document.createElement('div');
    card.className = 'weiyu-card';
    
    card.innerHTML = `
        <h3 class="weiyu-title">💭 每日微语</h3>
        <p class="weiyu-text">${escapeHtml(weiyu)}</p>
    `;
    
    return card;
}

// 工具函数：转义HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// 更新时间戳
function updateTime() {
    const timeEl = document.getElementById('update-time');
    const now = new Date();
    timeEl.textContent = now.toLocaleString('zh-CN');
}

// 页面加载时执行
document.addEventListener('DOMContentLoaded', () => {
    loadNews();
    
    // 每5分钟自动刷新
    setInterval(loadNews, 5 * 60 * 1000);
});
