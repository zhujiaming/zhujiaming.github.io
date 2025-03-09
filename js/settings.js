// 设置页面JavaScript

// 初始化函数
function init() {
    // 返回按钮事件监听
    document.getElementById('back-button').addEventListener('click', () => {
        window.location.href = 'index.html';
    });
    
    // 深色模式切换
    document.getElementById('dark-mode-toggle').addEventListener('change', (e) => {
        // 这里可以实现深色模式切换逻辑
        // 简化示例，实际应用中需要保存设置并应用到主页面
        localStorage.setItem('darkMode', e.target.checked);
    });
    
    // 农历显示切换
    document.getElementById('lunar-toggle').addEventListener('change', (e) => {
        // 保存农历显示设置
        localStorage.setItem('showLunar', e.target.checked);
    });
    
    // 最近应用数量设置
    document.getElementById('recent-apps-count').addEventListener('change', (e) => {
        // 保存最近应用数量设置
        localStorage.setItem('recentAppsCount', e.target.value);
    });
    
    // 应用排序方式设置
    document.getElementById('app-sort-method').addEventListener('change', (e) => {
        // 保存应用排序方式设置
        localStorage.setItem('appSortMethod', e.target.value);
    });
    
    // 加载保存的设置
    loadSettings();
}

// 加载保存的设置
function loadSettings() {
    // 加载深色模式设置
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode !== null) {
        document.getElementById('dark-mode-toggle').checked = darkMode === 'true';
    }
    
    // 加载农历显示设置
    const showLunar = localStorage.getItem('showLunar');
    if (showLunar !== null) {
        document.getElementById('lunar-toggle').checked = showLunar === 'true';
    }
    
    // 加载最近应用数量设置
    const recentAppsCount = localStorage.getItem('recentAppsCount');
    if (recentAppsCount !== null) {
        document.getElementById('recent-apps-count').value = recentAppsCount;
    }
    
    // 加载应用排序方式设置
    const appSortMethod = localStorage.getItem('appSortMethod');
    if (appSortMethod !== null) {
        document.getElementById('app-sort-method').value = appSortMethod;
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', init);