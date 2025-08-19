/**
 * 周年庆倒计时功能 - 2025-3-27-s2
 */
(function () {
  // 初始化所有倒计时组件
  function initCountdowns() {
    const countdownTimers = document.querySelectorAll(".countdown-timer-s2");

    countdownTimers.forEach(function (timer) {
      const endDateStr = timer.getAttribute("data-end-date-s2");
      if (!endDateStr) return;

      // 处理日期格式，支持 YYYY-MM-DD hh:mm:ss 和 YYYY-MM-DDThh:mm:ss 两种格式
      const endDate = new Date(endDateStr).getTime();

      // 如果日期无效，则不启动倒计时
      if (isNaN(endDate)) {
        console.error("无效的日期格式:", endDateStr);
        return;
      }

      // 获取该倒计时的显示元素
      const daysEl = timer.querySelector(".days-s2");
      const hoursEl = timer.querySelector(".hours-s2");
      const minutesEl = timer.querySelector(".minutes-s2");
      const secondsEl = timer.querySelector(".seconds-s2");

      if (!daysEl || !hoursEl || !minutesEl || !secondsEl) {
        console.error("倒计时元素未找到");
        return;
      }

      let countdownInterval = null;
      // 定义更新函数
      function updateCountdown() {
        const now = new Date().getTime();
        const diff = endDate - now;

        // 如果倒计时结束
        if (diff <= 0) {
          daysEl.textContent = "00";
          hoursEl.textContent = "00";
          minutesEl.textContent = "00";
          secondsEl.textContent = "00";
          clearInterval(countdownInterval);

          // 可以添加倒计时结束后的操作，例如隐藏区块或显示结束信息
          timer.classList.add("countdown-ended-s2");
          return;
        }

        // 计算天数、小时、分钟和秒数
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        // 更新DOM显示
        daysEl.textContent = days < 10 ? "0" + days : days;
        hoursEl.textContent = hours < 10 ? "0" + hours : hours;
        minutesEl.textContent = minutes < 10 ? "0" + minutes : minutes;
        secondsEl.textContent = seconds < 10 ? "0" + seconds : seconds;
      }

      // 立即更新一次
      updateCountdown();

      // 然后每秒更新一次
      countdownInterval = setInterval(updateCountdown, 1000);

      // 存储interval引用，便于清理
      timer.setAttribute("data-interval-id", countdownInterval);
    });
  }

  // 清理现有的计时器，防止内存泄漏
  function cleanupCountdowns() {
    const countdownTimers = document.querySelectorAll(
      ".countdown-timer-s2[data-interval-id]"
    );

    countdownTimers.forEach(function (timer) {
      const intervalId = timer.getAttribute("data-interval-id");
      if (intervalId) {
        clearInterval(Number(intervalId));
        timer.removeAttribute("data-interval-id");
      }
    });
  }

  // 页面加载完成后初始化
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCountdowns);
  } else {
    initCountdowns();
  }

  // 支持Shopify section的刷新事件
  document.addEventListener("shopify:section:load", function (event) {
    if (event.target.querySelector(".countdown-timer-s2")) {
      // 清理旧的计时器
      cleanupCountdowns();
      // 初始化新的计时器
      initCountdowns();
    }
  });

  // 处理Shopify section卸载事件
  document.addEventListener("shopify:section:unload", function (event) {
    if (event.target.querySelector(".countdown-timer-s2")) {
      cleanupCountdowns();
    }
  });
})();
