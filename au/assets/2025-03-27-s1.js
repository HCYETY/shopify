/**
 * 促销活动倒计时功能
 */
(function() {
  // 初始化所有倒计时组件
  function initCountdowns() {
    const countdownElements = document.querySelectorAll('.countdown-timer');
    
    countdownElements.forEach(function(element) {
      const endDateStr = element.getAttribute('data-end-date');
      if (!endDateStr) return;
      
      // 解析结束日期
      const endDate = new Date(endDateStr).getTime();

      if (isNaN(endDate)) {
        console.error('无效的日期格式:', endDateStr);
        return;
      }
      
      // 获取该倒计时的显示元素
      const daysElement = element.querySelector('.days');
      const hoursElement = element.querySelector('.hours');
      const minutesElement = element.querySelector('.minutes');
      const secondsElement = element.querySelector('.seconds');
      
      // 定义更新函数
      let countdownInterval = null;
      function updateCountdown() {
        const now = new Date().getTime();
        const distance = endDate - now;
        
        // 倒计时结束
        if (distance < 0) {
          countdownInterval && clearInterval(countdownInterval);
          daysElement.textContent = '00';
          hoursElement.textContent = '00';
          minutesElement.textContent = '00';
          secondsElement.textContent = '00';
          
          // 可以添加倒计时结束后的操作，例如隐藏区块或显示结束信息
          element.classList.add('countdown-ended');
          return;
        }
        
        // 计算剩余时间
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // 更新显示
        daysElement.textContent = days < 10 ? '0' + days : days;
        hoursElement.textContent = hours < 10 ? '0' + hours : hours;
        minutesElement.textContent = minutes < 10 ? '0' + minutes : minutes;
        secondsElement.textContent = seconds < 10 ? '0' + seconds : seconds;
      }
      
      // 立即执行一次更新
      updateCountdown();
      
      // 设置定时器，每秒更新一次
      countdownInterval = setInterval(updateCountdown, 1000);
    });
  }

  // 页面加载完成后初始化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCountdowns);
  } else {
    initCountdowns();
  }
  
  // 支持Shopify section的刷新事件
  document.addEventListener('shopify:section:load', function(event) {
    if (event.target.querySelector('.countdown-timer')) {
      initCountdowns();
    }
  });
})(); 