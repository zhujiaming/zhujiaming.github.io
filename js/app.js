// 模拟应用数据
const apps = [
    { id: 1, name: "微信", icon: "<i class='fab fa-weixin text-green-500'></i>" },
    { id: 2, name: "支付宝", icon: "<i class='fas fa-wallet text-blue-400'></i>" },
    { id: 3, name: "淘宝", icon: "<i class='fas fa-shopping-bag text-orange-500'></i>" },
    { id: 4, name: "抖音", icon: "<i class='fas fa-music text-pink-500'></i>" },
    { id: 5, name: "QQ", icon: "<i class='fab fa-qq text-blue-500'></i>" },
    { id: 6, name: "京东", icon: "<i class='fas fa-shopping-cart text-red-500'></i>" },
    { id: 7, name: "美团", icon: "<i class='fas fa-utensils text-yellow-500'></i>" },
    { id: 8, name: "高德地图", icon: "<i class='fas fa-map-marked-alt text-green-400'></i>" },
    { id: 9, name: "哔哩哔哩", icon: "<i class='fas fa-tv text-pink-400'></i>" },
    { id: 10, name: "网易云音乐", icon: "<i class='fas fa-headphones-alt text-red-400'></i>" },
    { id: 11, name: "知乎", icon: "<i class='fas fa-question-circle text-blue-400'></i>" },
    { id: 12, name: "微博", icon: "<i class='fab fa-weibo text-red-500'></i>" },
    { id: 13, name: "钉钉", icon: "<i class='fas fa-thumbtack text-blue-500'></i>" },
    { id: 14, name: "百度", icon: "<i class='fas fa-paw text-blue-500'></i>" },
    { id: 15, name: "小红书", icon: "<i class='fas fa-book text-red-400'></i>" },
    { id: 16, name: "饿了么", icon: "<i class='fas fa-hamburger text-blue-400'></i>" },
    { id: 17, name: "拼多多", icon: "<i class='fas fa-gift text-red-500'></i>" },
    { id: 18, name: "滴滴出行", icon: "<i class='fas fa-car text-orange-500'></i>" },
    { id: 19, name: "携程", icon: "<i class='fas fa-plane text-blue-500'></i>" },
    { id: 20, name: "Keep", icon: "<i class='fas fa-running text-green-500'></i>" }
];

// T9键盘映射
const t9Mapping = {
    '1': '',
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
    '0': '+',
    '*': ''
};

// 当前输入的数字序列
let currentInput = '';

// 最近打开的应用（模拟数据）
let recentApps = [];

// 初始化函数
function init() {
    updateDateTime();
    setInterval(updateDateTime, 1000);
    
    // 随机选择两个应用作为最近打开的应用
    recentApps = getRandomApps(2);
    renderRecentApps();
    
    // 渲染所有应用
    renderApps(apps);
    
    // 添加T9键盘事件监听
    setupKeyboardListeners();
}

// 更新日期时间
function updateDateTime() {
    const now = new Date();
    
    // 更新时间
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.querySelector('.current-time').textContent = `${hours}:${minutes}:${seconds}`;
    
    // 更新日期
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const weekdays = ['日', '一', '二', '三', '四', '五', '六'];
    const weekday = weekdays[now.getDay()];
    document.querySelector('.current-date').textContent = `${year}年${month}月${day}日 星期${weekday}`;
    
    // 这里简化处理，实际应用中需要真实的农历转换算法
    document.querySelector('.lunar-date').textContent = '农历癸卯年十月初二'; // 简化示例
}

// 随机获取n个应用
function getRandomApps(n) {
    const shuffled = [...apps].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
}

// 渲染最近打开的应用
function renderRecentApps() {
    const recentAppsGrid = document.querySelector('.recent-apps-grid');
    recentAppsGrid.innerHTML = '';
    
    recentApps.forEach(app => {
        const appElement = createAppElement(app);
        recentAppsGrid.appendChild(appElement);
    });
}

// 渲染应用列表
function renderApps(appsToRender) {
    const appGrid = document.querySelector('.app-grid');
    appGrid.innerHTML = '';
    
    // 如果应用列表为空，显示提示语
    if (appsToRender.length === 0) {
        const emptyTip = document.createElement('div');
        emptyTip.className = 'empty-tip flex items-center justify-center text-center p-8 text-gray-400';
        emptyTip.innerHTML = `
            <div class="flex items-center">
                <div class="text-4xl mr-3"><i class="fas fa-keyboard"></i></div>
                <div>
                    <div class="text-sm">使用T9键盘输入数字</div>
                    <div class="text-xs mt-1">按照拼音首字母匹配应用</div>
                </div>
            </div>
        `;
        appGrid.appendChild(emptyTip);
        return;
    }
    
    appsToRender.forEach(app => {
        const appElement = createAppElement(app);
        appGrid.appendChild(appElement);
    });
}

// 创建应用元素
function createAppElement(app) {
    const appElement = document.createElement('div');
    appElement.className = 'app-item';
    appElement.innerHTML = `
        <div class="app-icon">${app.icon}</div>
        <div class="app-name">${app.name}</div>
    `;
    
    // 添加点击事件
    appElement.addEventListener('click', () => {
        // 模拟打开应用
        alert(`打开应用: ${app.name}`);
        
        // 更新最近打开的应用
        if (!recentApps.some(recentApp => recentApp.id === app.id)) {
            recentApps.unshift(app);
            if (recentApps.length > 5) {
                recentApps.pop();
            }
            renderRecentApps();
        }
    });
    
    return appElement;
}

// 设置T9键盘监听器
function setupKeyboardListeners() {
    // 数字键监听
    document.querySelectorAll('.t9-key[data-number]').forEach(key => {
        key.addEventListener('click', () => {
            const number = key.getAttribute('data-number');
            
            // 如果点击的是*键，跳转到设置页面
            if (number === '*') {
                window.location.href = 'settings.html';
                return;
            }
            
            currentInput += number;
            updateInputDisplay();
            searchApps();
        });
    });
    
    // 退格键监听
    document.getElementById('backspace-key').addEventListener('click', () => {
        if (currentInput.length > 0) {
            currentInput = currentInput.slice(0, -1);
            updateInputDisplay();
            searchApps();
        }
    });

    // 功能按钮监听
    document.getElementById('close-btn').addEventListener('click', () => {
        showToast('关闭应用');
    });
    
    document.getElementById('settings-btn').addEventListener('click', () => {
        showToast('打开设置');
    });
    
    document.getElementById('clear-btn').addEventListener('click', () => {
        showToast('清空输入');
    });
    
    document.getElementById('keyboard-btn').addEventListener('click', () => {
        toggleKeyboard();
    });
}

// 切换键盘显示/隐藏
function toggleKeyboard() {
    const keyboardContainer = document.querySelector('.t9-keyboard-container');
    
    if (keyboardContainer.style.display === 'none') {
        // 显示键盘
        keyboardContainer.style.display = 'block';
        showToast('显示键盘');
    } else {
        // 隐藏键盘
        keyboardContainer.style.display = 'none';
        showToast('隐藏键盘');
    }
}

// 更新输入显示
function updateInputDisplay() {
    document.getElementById('input-display').textContent = currentInput;
}

// 搜索应用
function searchApps() {
    if (currentInput === '') {
        renderApps(apps);
        return;
    }
    
    // 根据T9输入匹配应用
    const matchedApps = apps.filter(app => {
        return matchesT9Input(app.name, currentInput);
    });
    
    renderApps(matchedApps);
}

// 检查应用名称是否匹配T9输入
function matchesT9Input(appName, input) {
    // 将应用名称转换为拼音或拼音首字母（简化处理）
    // 这里简化实现，实际应用中需要真实的拼音转换
    const pinyinChars = appName.toLowerCase();
    
    let inputIndex = 0;
    for (const char of pinyinChars) {
        if (inputIndex >= input.length) {
            return true;
        }
        
        const currentDigit = input[inputIndex];
        const possibleChars = t9Mapping[currentDigit];
        
        if (possibleChars && possibleChars.includes(char)) {
            inputIndex++;
        }
    }
    
    return inputIndex >= input.length;
}

// 应用设置函数
function applySettings() {
    // 应用深色模式设置
    const darkMode = localStorage.getItem('darkMode');
    // 这里可以根据darkMode的值应用深色模式样式
    
    // 应用农历显示设置
    const showLunar = localStorage.getItem('showLunar');
    if (showLunar === 'false') {
        document.querySelector('.lunar-date').style.display = 'none';
    } else {
        document.querySelector('.lunar-date').style.display = 'block';
    }
    
    // 应用最近应用数量设置
    const recentAppsCount = localStorage.getItem('recentAppsCount');
    if (recentAppsCount) {
        const count = parseInt(recentAppsCount);
        recentApps = getRandomApps(count); // 简化示例，实际应用中应该使用真实的最近应用数据
        renderRecentApps();
    }
    
    // 应用排序方式设置
    const appSortMethod = localStorage.getItem('appSortMethod');
    if (appSortMethod) {
        // 这里可以根据排序方式对应用列表进行排序
        // 简化示例
        let sortedApps = [...apps];
        if (appSortMethod === 'name') {
            sortedApps.sort((a, b) => a.name.localeCompare(b.name));
        }
        // 其他排序方式可以在这里实现
        renderApps(sortedApps);
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    init();
    applySettings(); // 应用保存的设置
});