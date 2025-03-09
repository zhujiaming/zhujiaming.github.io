/**
 * 显示Toast提示
 * @param {string} message - 要显示的消息
 * @param {number} duration - 显示持续时间（毫秒）
 */
function showToast(message, duration = 2000) {
    // 检查是否已存在toast元素，如果有则移除
    const existingToast = document.getElementById('custom-toast');
    if (existingToast) {
        document.body.removeChild(existingToast);
    }
    
    // 创建toast元素
    const toast = document.createElement('div');
    toast.id = 'custom-toast';
    toast.className = 'fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-lg opacity-0 transition-opacity duration-300 z-50';
    toast.textContent = message;
    
    // 添加到页面
    document.body.appendChild(toast);
    
    // 显示toast
    setTimeout(() => {
        toast.classList.remove('opacity-0');
        toast.classList.add('opacity-100');
    }, 10);
    
    // 设置定时器隐藏toast
    setTimeout(() => {
        toast.classList.remove('opacity-100');
        toast.classList.add('opacity-0');
        
        // 完全隐藏后移除元素
        setTimeout(() => {
            if (toast.parentNode) {
                document.body.removeChild(toast);
            }
        }, 300);
    }, duration);
}