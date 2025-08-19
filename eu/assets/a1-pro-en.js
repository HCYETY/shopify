      
    function isMobile() {
      const screenWidth = window.innerWidth;
      return screenWidth < 900;
    }

    //section5
    const switList = [
      {
        title: "20W Blue",
        desc: "20W Blue Diode Laser Powerful Cutting & Engraving",
        children: [
          {
            switchName: "Wood",
            pcImg:
              "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/WOOD_793770bd-a7da-4970-92b5-ce3d2bf3cdba.jpg?v=1753670887",
            mobileImg:
              "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/WOOD_d5531a84-9278-4b75-947e-1199c2fb6c99.jpg?v=1753671802",
          },
          {
            switchName: "Acrylic",
            pcImg:
              "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/Acrylic_d59f7758-5d56-4aff-b877-0e82cca8a708.jpg?v=1753670887",
            mobileImg:
              "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/Acrylic_432374e0-ecb2-403f-947d-057adf73b4ef.jpg?v=1753671802",
          },
          {
            switchName: "Stainless",
            pcImg:
              "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/Stainless_329ac6eb-0501-4446-9212-3edf0c29498c.jpg?v=1753670887",
            mobileImg:
              "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/Stainless_18f04cc6-eb7d-4954-b9ba-fb32794bf4d0.jpg?v=1753671685",
          },
          {
            switchName: "Glass",
            pcImg:
              "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/Glass_f3d02994-3798-46c1-b375-9f5ca8e602d4.jpg?v=1753670887",
            mobileImg:
              "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/Glass_a3caeed6-34c0-49f9-909c-15e5c280dfa7.jpg?v=1753671802",
          },

          {
            switchName: "Rock",
            pcImg:
              "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/Rock_cfa80d23-be11-4101-82d5-33365188d8db.jpg?v=1753670887",
            mobileImg:
              "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/Rock_bf1ada0f-e7fc-4b11-a2b1-6f19354b6338.jpg?v=1753671802",
          },
          {
            switchName: "Cloth",
            pcImg:
              "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/Cloth_a3e3e22e-c04c-470b-b23c-7d6605f7ddda.jpg?v=1753670887",
            mobileImg:
              "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/Cloth_9e9f13de-b394-4639-ba16-4d57d5ab38f7.jpg?v=1753671801",
          },
          {
            switchName: "Leather",
            pcImg:
              "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/Leather_a3cad788-920b-4b16-af3f-4c2cfebf6aed.jpg?v=1753670887",
            mobileImg:
              "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/Leather_692874c4-1f05-4296-8c55-d2e5a715d2a8.jpg?v=1753671802",
          },
          {
            switchName: "Paper",
            pcImg:
              "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/Paper_6f10c874-1d63-4c61-981a-4eaa9cb0aa70.jpg?v=1753670887",
            mobileImg:
              "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/Paper_85829273-21ac-427f-bbdc-3be193ce09bf.jpg?v=1753671802",
          },
          {
            switchName: "Felt",
            pcImg:
              "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/Felt_616a1028-3fc2-42da-a9aa-186256a95a9a.jpg?v=1753670888",
            mobileImg:
              "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/Felt_cd3f9dc1-861d-4c40-bdea-bb22044b71a1.jpg?v=1753671802",
          },
          {
            switchName: "Painted-metal",
            pcImg:
              "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/Painted-metal_bf42d103-4712-4424-abed-985367822697.jpg?v=1753670887",
            mobileImg:
              "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/Painted-metal_a600e7e1-ba6d-4e55-9056-ad2ff526f236.jpg?v=1753671801",
          },
        ],
      },
      {
        title: "2W IR",
        desc: "2W IR Laser for Special Materials",
        children: [
          {
            switchName: "Acrylic",
            pcImg:
              "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/Acrylic_55792b23-548b-4bb4-b540-1bbbf9e4aeaa.jpg?v=1753671080",
            mobileImg:
              "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/Acrylic_7041fcf3-ad40-47bc-a952-a5506eb913db.jpg?v=1753671685",
          },
          {
            switchName: "Brass",
            pcImg:
              "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/Brass_38ede42a-b169-455b-9411-ddc0010a6747.jpg?v=1753671080",
            mobileImg:
              "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/Brass_59add5bf-9fd7-414f-99d2-c453563e3500.jpg?v=1753671685",
          },
          {
            switchName: "Gold",
            pcImg:
              "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/gold_b4006568-7c21-413e-91b2-997493de4307.jpg?v=1753671080",
            mobileImg:
              "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/gold_b4006568-7c21-413e-91b2-997493de4307.jpg?v=1753671080",
          },
          {
            switchName: "Iron",
            pcImg:
              "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/Iron_2bb9ae63-14de-4e58-9c27-967058ccabce.jpg?v=1753671080",
            mobileImg:
              "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/Iron_f0d7b315-2ad2-4290-89f1-36b2885a5934.jpg?v=1753671685",
          },
          {
            switchName: "Plastic",
            pcImg:
              "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/Plastic_0d48ec08-186f-4447-8ae6-bd36dac73527.jpg?v=1753671080",
            mobileImg:
              "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/Plastic_693ce5ec-8a09-4bea-ab93-6035f0cb2bbd.jpg?v=1753671685",
          },
          {
            switchName: "Platinum",
            pcImg:
              "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/Platinum_57ab54ef-9571-47fa-a8e0-19bfdbd473dc.jpg?v=1753671080",
            mobileImg:
              "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/Platinum_e18273a1-9dc5-43b9-986e-127d21e97e0d.jpg?v=1753671685",
          },
          {
            switchName: "Silver",
            pcImg:
              "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/Silver_b567d1ce-236c-4d13-bdc1-b8e5656c568e.jpg?v=1753671080",
            mobileImg:
              "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/Silver_554b4301-1c96-42b2-8b36-e8577360d74e.jpg?v=1753671685",
          },
          {
            switchName: "Stainless",
            pcImg:
              "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/Stainless_329ac6eb-0501-4446-9212-3edf0c29498c.jpg?v=1753670887",
            mobileImg:
              "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/Stainless_1f8c58c2-dadf-4cc3-a7f8-219619911084.jpg?v=1753671080",
          },
          {
            switchName: "Titanium",
            pcImg:
              "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/Platinum_57ab54ef-9571-47fa-a8e0-19bfdbd473dc.jpg?v=1753671080",
            mobileImg:
              "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/Titanium_09cda053-d499-49cc-ae7e-dd70546e61bc.jpg?v=1753671080",
          },
          {
            switchName: "Aluminum",
            pcImg:
              "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/Leather.jpg?v=1750816999",
            mobileImg:
              "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/Leather.jpg?v=1750816999",
          },
        ],
      },
    ];

    const tabsContainer = document.getElementById("tabs");
    const descContainer = document.getElementById("tab-desc");
    const imgContainer = document.getElementById("tab-img");
    const switchWrap = document.getElementById("switch-wrap");

    let currentTabIndex = 0;

    // 渲染 tabs
    function renderTabs() {
      tabsContainer.innerHTML = `
      <div class="tabs">
        ${switList
          .map(
            (item, index) => `
          <div class="tab-title ${
            index === 0 ? "tab-title-left selected" : "tab-title-right"
          }">
            <h1 class="title">${item.title}</h1>
          </div>
        `
          )
          .join("")}
      </div>
    `;

      // 为每个 tab 添加点击事件
      const tabTitles = tabsContainer.querySelectorAll(" .tab-title");
      tabTitles.forEach((tab, index) => {
        tab.addEventListener("click", () => {
          currentTabIndex = index;
          updateContent();
          tabTitles.forEach((t) => t.classList.remove("selected"));
          tab.classList.add("selected");
        });
      });
    }

    // 更新内容
   function updateContent() {
  const currentTab = switList[currentTabIndex];
  
  // 添加安全检查
  if (!currentTab) {
    console.error('currentTab is undefined, currentTabIndex:', currentTabIndex);
    return;
  }
  
  // 检查 DOM 元素是否存在
  if (descContainer) {
    descContainer.textContent = currentTab.desc;
  }
  
  if (currentTab.children && currentTab.children.length > 0) {
    renderSwitchItems(currentTab.children);
    
    if (imgContainer) {
      imgContainer.src = isMobile()
        ? currentTab.children[0].mobileImg
        : currentTab.children[0].pcImg;
    }
  }
}

    // 渲染切换项
    function renderSwitchItems(children) {
      switchWrap.innerHTML = children
        .map(
          (child, index) => `
      <div class="${index === 0 ? "title-mask" : ""}">
        <h2 class="title">${child.switchName}</h2>
      </div>
    `
        )
        .join("");

      // 为每个切换项添加点击事件
      const switchItems = switchWrap.querySelectorAll(".title");
      switchItems.forEach((item, index) => {
        item.addEventListener("click", () => {
          imgContainer.src = !isMobile()
            ? children[index].pcImg
            : children[index].mobileImg;
          switchItems.forEach((i) =>
            i.parentElement.classList.remove("title-mask")
          );
          item.parentElement.classList.add("title-mask");
        });
      });
    }

    // 初始化渲染
    renderTabs();
    updateContent();

    //row-tabs-wrap
    const rowTabsWrapList = [
      {
        title: "20W",
        subtitle: "Create Like A Pro",
        desc: "  10mm Basswood, <br />8mm Black Acrylic,<br />0.04mm Stainless Sheet.<br/> Hitting speeds of 600mm/s.",
        videoUrl:
          "https://cdn.shopify.com/videos/c/o/v/b07e771090dd4b23bfee24d4cd9af43f.mp4",
      },
      {
        title: "2W IR",
        subtitle: "Ultra-HD Engraving",
        desc: " Featuring a <span>0.03mm ultra-fine</span>laser spot and<span>1064nm IR technology</span> , it delivers unmatched detail for engraving photos, jewelry, business cards, and more.",
        videoUrl:
          "https://cdn.shopify.com/videos/c/o/v/a70859b178ed4ad9a27d5b29febf4fcb.mp4",
      },
    ];
    // row-tabs-wrap 功能
    // row-tabs-wrap 功能
    const rowTabs = document.querySelectorAll(
      ".section5 .row-tabs-wrap .tab-title-top,.section5 .row-tabs-wrap .tab-title-bottom"
    );
    const videoWrap = document.querySelector(".row-tabs-wrap .video-wrap");
    let currentIndex = 0;
    let autoSwitchInterval;

    // 初始化
    if (isMobile()) {
      videoWrap.innerHTML = `<video autoplay controls playsinline src="${rowTabsWrapList[1].videoUrl}" loop muted width="100%" height="100%"></video>`;
    } else {
      rowTabs[0].classList.add("selected");
      videoWrap.innerHTML = `<video autoplay controls playsinline src="${rowTabsWrapList[0].videoUrl}" loop muted width="100%" height="100%"></video>`;

      // 自动切换函数
      function autoSwitch() {
        currentIndex = (currentIndex + 1) % rowTabs.length;
        rowTabs.forEach((t) => t.classList.remove("selected"));
        rowTabs[currentIndex].classList.add("selected");
        videoWrap.innerHTML = `<video autoplay controls playsinline src="${rowTabsWrapList[currentIndex].videoUrl}" loop muted width="100%" height="100%"></video>`;
      }

      // 启动定时切换
      autoSwitchInterval = setInterval(autoSwitch, 6000);

      // PC端点击事件（有自动切换）
      rowTabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
          clearInterval(autoSwitchInterval);
          currentIndex = index;
          rowTabs.forEach((t) => t.classList.remove("selected"));
          tab.classList.add("selected");
          videoWrap.innerHTML = `<video autoplay controls playsinline src="${rowTabsWrapList[index].videoUrl}" loop muted width="100%" height="100%"></video>`;

          // 重新启动自动切换
          autoSwitchInterval = setInterval(autoSwitch, 6000);
        });
      });
    }

    //section13
    const section13TabsList = [
      {
        title: "Trace Drawings, Handwriting, Doodles",
        desc: "Traces the contours of your designs with the help of an HD camera, create fun, original images that are truly personal to you.",
        videoUrl:
          "https://cdn.shopify.com/videos/c/o/v/0ac4bdbabb094cfabefbc256fa1f8df8.mp4",
      },
      {
        title: "Batch Engraving",
        desc: "Intelligently recognize shapes through the camera, and fill patterns on multiple objects.",
        videoUrl:
          "https://cdn.shopify.com/videos/c/o/v/44125ec17cd94b8ba8640ae3f0be69be.mp4",
      },
    ];

    const section13Tabs = document.querySelectorAll(
      ".section13 .tab-title-top, .section13 .tab-title-bottom"
    );
    const section13VideoWrap = document.querySelector(".section13 .video-wrap");
    let section13CurrentIndex = 0;
    let section13AutoSwitchInterval;

    // 自动切换函数
    function section13AutoSwitch() {
      section13CurrentIndex =
        (section13CurrentIndex + 1) % section13Tabs.length;
      section13Tabs.forEach((t) => t.classList.remove("selected"));
      section13Tabs[section13CurrentIndex].classList.add("selected");

      // 更新所有tab的内容
      section13Tabs.forEach((t, i) => {
        t.querySelector(".title").textContent = section13TabsList[i].title;
        const descEl = t.querySelector(".desc");
        if (descEl && section13TabsList[i].desc) {
          descEl.textContent = section13TabsList[i].desc;
        }
      });

      section13VideoWrap.innerHTML = `<video controls autoplay playsinline src="${section13TabsList[section13CurrentIndex].videoUrl}" loop muted width="100%" height="100%"></video>`;
    }

    if (!isMobile()) {
      // 初始化PC端内容
      section13Tabs.forEach((tab, index) => {
        tab.querySelector(".title").textContent =
          section13TabsList[index].title;
        const descEl = tab.querySelector(".desc");
        if (descEl && section13TabsList[index].desc) {
          descEl.textContent = section13TabsList[index].desc;
        }

        tab.addEventListener("click", () => {
          clearInterval(section13AutoSwitchInterval);
          section13CurrentIndex = index;
          section13Tabs.forEach((t) => t.classList.remove("selected"));
          tab.classList.add("selected");

          // 更新所有tab的内容
          section13Tabs.forEach((t, i) => {
            t.querySelector(".title").textContent = section13TabsList[i].title;
            const descEl = t.querySelector(".desc");
            if (descEl && section13TabsList[i].desc) {
              descEl.textContent = section13TabsList[i].desc;
            }
          });

          section13VideoWrap.innerHTML = `<video controls autoplay playsinline src="${section13TabsList[index].videoUrl}" loop muted width="100%" height="100%"></video>`;

          // 重新启动自动切换
          section13AutoSwitchInterval = setInterval(section13AutoSwitch, 6000);
        });
      });

      // 启动自动切换
      section13Tabs[0].classList.add("selected");
      section13AutoSwitchInterval = setInterval(section13AutoSwitch, 6000);
    } else {
      // 移动端初始化
      section13Tabs[0].querySelector(".title").textContent =
        section13TabsList[0].title;
      section13Tabs[0].querySelector(".desc").textContent =
        section13TabsList[0].desc;
      section13VideoWrap.innerHTML = `<video controls autoplay playsinline muted src="${section13TabsList[0].videoUrl}" loop width="100%" height="100%"></video>`;
    }

    // 滑动初始位置
    const slideWrapper = document.querySelector(".section18 .slide-wrapper");
    const section23SlideWrapper = document.querySelector(
      ".section23 .slide-wrapper"
    );

    // 定义设置 transform 的函数
    function setTransform() {
      const windowWidth = window.innerWidth;
      let translateXValue;
      let section23TranslateXValue;

      if (windowWidth >= 900 && windowWidth <= 1920) {
        // 屏幕宽度在 900px 到 1920px 之间
        translateXValue = "441px";
        section23TranslateXValue = "434px";
      } else if (windowWidth > 1920) {
        // 屏幕宽度大于 1920px
        translateXValue = `22.96vw`;
        section23TranslateXValue = `22.06vw`;
      } else {
        // 屏幕宽度小于 900px，可按需设置默认值
        translateXValue = "0px";
        section23TranslateXValue = "0px";
      }

      // 设置 transform 属性
      slideWrapper.style.transform = `translateX(${translateXValue})`;
      section23SlideWrapper.style.transform = `translateX(${section23TranslateXValue})`;
    }

    // 首次加载时设置 transform
    setTransform();

    // section18
    const leftArrow = document.querySelector(
      ".arrows-wrap .arrow:nth-child(1)"
    );
    const rightArrow = document.querySelector(
      ".arrows-wrap .arrow:nth-child(2)"
    );
    const slideItems = document.querySelectorAll(".slide-wrap");

    let rightClickCount = 0;
    const clickLimit = 2;

    // 获取slide宽度的函数
    function getSlideWidth() {
      return slideItems[0] ? slideItems[0].offsetWidth : 0;
    }

    // 获取初始translateX值
    function getInitialTranslateX(slideWrapper) {
      const style = window.getComputedStyle(slideWrapper);
      const transform = style.transform;
      if (transform && transform !== "none") {
        const matrix = new DOMMatrixReadOnly(transform);
        return matrix.m41;
      }
      return 0;
    }

    // 更新箭头透明度的函数
    function updateArrowOpacity() {
      leftArrow.style.opacity = rightClickCount === 0 ? 0.3 : 1;
      rightArrow.style.opacity = rightClickCount >= clickLimit ? 0.3 : 1;
    }

    // 点击左箭头事件处理函数
    leftArrow.addEventListener("click", () => {
      if (rightClickCount > 0) {
        rightClickCount--;
        const currentTranslateX = getInitialTranslateX(slideWrapper);
        const newTranslateX = currentTranslateX + getSlideWidth();
        slideWrapper.style.transform = `translateX(${newTranslateX}px)`;
      }
      updateArrowOpacity();
    });

    // 点击右箭头事件处理函数
    rightArrow.addEventListener("click", () => {
      if (rightClickCount < clickLimit) {
        rightClickCount++;
        const currentTranslateX = getInitialTranslateX(slideWrapper);
        const newTranslateX = currentTranslateX - getSlideWidth();
        slideWrapper.style.transform = `translateX(${newTranslateX}px)`;
      }
      updateArrowOpacity();
    });

    // 初始化箭头透明度
    updateArrowOpacity();

    // section20
    const section20SwitchList = [
      {
        pcImg:
          "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/404dab767a7bb79be3b04d33f1ef3246_7a5326a5-d46f-4b23-bff5-d17023ad9bff.jpg?v=1753685233",
        mobileImg:
          "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/404dab767a7bb79be3b04d33f1ef3246_f92a0d1c-d115-42fd-95bd-2e8a246adab2.jpg?v=1753685276",
      },
      {
        pcImg:
          "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/468ef44610c31b5b50b747b4f9f5ee49_7e2ec4ed-4f68-4dac-afe9-bb7b40d490a9.jpg?v=1753685233",
        mobileImg:
          "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/468ef44610c31b5b50b747b4f9f5ee49_fb6aba0f-20eb-4164-8ef8-0362463e1243.jpg?v=1753685275",
      },
      {
        pcImg:
          "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/5c6b3ed5aa67f357de68eee808ba264d_1287ac57-61b3-4b2c-818a-6ae2807788dc.jpg?v=1753685232",
        mobileImg:
          "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/5c6b3ed5aa67f357de68eee808ba264d_330a6881-6ae2-47c4-8537-c0e1779a48a8.jpg?v=1753685276",
      },
    ];

    const section20Tabs = document.querySelectorAll(
      ".section20 .tab-title-top, .section20 .tab-title-middle, .section20 .tab-title-bottom"
    );
    const section20ImgWrap = document.querySelector(".section20 .img-wrap img");
    let section20CurrentIndex = 0;
    let section20AutoSwitchInterval;

    // 初始化
    section20Tabs[0].classList.add("selected");

    // 自动切换函数
    function section20AutoSwitch() {
      section20CurrentIndex =
        (section20CurrentIndex + 1) % section20Tabs.length;
      section20Tabs.forEach((t) => t.classList.remove("selected"));
      section20Tabs[section20CurrentIndex].classList.add("selected");

      const imgSrc = isMobile()
        ? section20SwitchList[section20CurrentIndex].mobileImg
        : section20SwitchList[section20CurrentIndex].pcImg;
      section20ImgWrap.src = imgSrc;
    }

    // 启动定时切换
    section20AutoSwitchInterval = setInterval(section20AutoSwitch, 6000);

    // 点击事件
    section20Tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => {
        clearInterval(section20AutoSwitchInterval);
        section20CurrentIndex = index;
        section20Tabs.forEach((t) => t.classList.remove("selected"));
        tab.classList.add("selected");

        const imgSrc = isMobile()
          ? section20SwitchList[index].mobileImg
          : section20SwitchList[index].pcImg;
        section20ImgWrap.src = imgSrc;

        // 重新启动自动切换
        section20AutoSwitchInterval = setInterval(section20AutoSwitch, 6000);
      });
    });

    //section22
    const tabList = {
      activePrefix: [
        {
          pcImg:
            "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/1_6f562e88-abfe-46a7-aeb2-d5dd904be34a.png?v=1753688156",
          mobileImg:
            "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/1_6aa21b1a-9e1d-40bf-b49f-63d994f8471b.png?v=1753688179",
        },
        {
          pcImg:
            "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/1_0fe24551-bcc9-4afd-9cc9-b0698d43fee5.png?v=1753688156",
          mobileImg:
            "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/1_8cca5027-c94a-4373-a9eb-95debab1e2dd.png?v=1753688179",
        },
        {
          pcImg:
            "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/1_adb2488c-c80d-4c23-8b78-d77e55d227b8.png?v=1753688153",
          mobileImg:
            "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/1_5cf02194-c6b3-4e71-9e73-0cc528d7cea2.png?v=1753688175",
        },
        {
          pcImg:
            "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/2D1_284ba3b9-2268-42bd-ac05-db87c57c329a.png?v=1753688153",
          mobileImg:
            "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/2D1_f539b772-7dfd-4b9d-b6d5-9a60e7ae4c7a.png?v=1753688174",
        },
      ],
      comPrefix: [
        {
          pcImg:
            "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/69b40efe02809d5320e89926df5e8c08.png?v=1752488115",
          mobileImg:
            "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/69b40efe02809d5320e89926df5e8c08_c7dd2618-5eed-4485-85cf-b2bb6057644a.png?v=1752488200",
        },
        {
          pcImg:
            "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/e15b007df0e0a41b6d11b83d7b3ce7e0.png?v=1752488115",
          mobileImg:
            " https://cdn.shopify.com/s/files/1/0893/0603/8637/files/e15b007df0e0a41b6d11b83d7b3ce7e0_b9022afe-c993-4ea8-8652-19ab5ee3f70c.png?v=1752488201",
        },
        {
          pcImg:
            "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/e9989d12b023ae652d7429a453ec3c41.png?v=1752488115",
          mobileImg:
            "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/e9989d12b023ae652d7429a453ec3c41_d1d52679-8249-4180-a7d9-64ec0b0914a2.png?v=1752488200",
        },
        {
          pcImg:
            "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/2D_eb3b7dcd-36b3-4096-8111-fcc5f0113b92.png?v=1752488114",
          mobileImg:
            "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/2D_44a0c827-9704-493c-8992-7f5883adbcef.png?v=1752488200",
        },
      ],
      videoUrl: [
        "https://cdn.shopify.com/videos/c/o/v/a7f0eff5c7a148fe9e0054a9766918b1.mp4",
        "https://cdn.shopify.com/videos/c/o/v/a2d9c450047a412194eaac143d3b949c.mp4",
        "https://cdn.shopify.com/videos/c/o/v/d1bc52b35334436f85b26c3458394c94.mp4",
        "https://cdn.shopify.com/videos/c/o/v/2d5762f39cb34336aa58e6e734c5ce4c.mp4",
      ],
    };
    //section22
    const section22Tabs = document.querySelectorAll(".section22 .tab");
    const section22VideoWrap = document.querySelector(
      ".section22 .video-wrap video"
    );

    // 初始化所有tab的prefix图片为comPrefix
    section22Tabs.forEach((tab, index) => {
      const img = tab.querySelector(".prefix img");
      img.src = isMobile()
        ? tabList.comPrefix[index].mobileImg
        : tabList.comPrefix[index].pcImg;
    });

    // 设置第一个tab为选中状态
    section22Tabs[0].classList.add("selected");
    const firstImg = section22Tabs[0].querySelector(".prefix img");
    firstImg.src = isMobile()
      ? tabList.activePrefix[0].mobileImg
      : tabList.activePrefix[0].pcImg;
    section22VideoWrap.src = tabList.videoUrl[0];

    // 添加点击事件
    section22Tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => {
        // 移除所有selected类，设置所有图片为comPrefix
        section22Tabs.forEach((t, i) => {
          t.classList.remove("selected");
          const img = t.querySelector(".prefix img");
          img.src = isMobile()
            ? tabList.comPrefix[i].mobileImg
            : tabList.comPrefix[i].pcImg;
        });

        // 设置当前tab为选中状态
        tab.classList.add("selected");
        const selectedImg = tab.querySelector(".prefix img");
        selectedImg.src = isMobile()
          ? tabList.activePrefix[index].mobileImg
          : tabList.activePrefix[index].pcImg;

        // 切换视频
        section22VideoWrap.src = tabList.videoUrl[index];
      });
    });
    // section23

    const section23LeftArrow = document.querySelector(
      ".section23 .arrows-wrap .arrow:nth-child(1)"
    );
    const section23RightArrow = document.querySelector(
      ".section23 .arrows-wrap .arrow:nth-child(2)"
    );
    const section23SlideItems = document.querySelectorAll(
      ".section23 .slide-wrap"
    );
    window.addEventListener("resize", setTransform);

    let section23ClickCount = 0;
    const section23ClickLimit = 4;

    // 获取section23 slide宽度的函数
    function getSection23SlideWidth() {
      return section23SlideItems[0] ? section23SlideItems[0].offsetWidth : 0;
    }

    // 更新section23箭头透明度的函数
    function updateSection23ArrowOpacity() {
      section23LeftArrow.style.opacity = section23ClickCount === 0 ? 0.3 : 1;
      section23RightArrow.style.opacity =
        section23ClickCount >= section23ClickLimit ? 0.3 : 1;
    }

    //移动距离
    const slideWidth = getSection23SlideWidth();
    const moveDistance = isMobile() ? slideWidth * 1.05 : slideWidth * 1.05;
    // section23点击左箭头事件处理函数
    section23LeftArrow.addEventListener("click", () => {
      if (section23ClickCount > 0) {
        section23ClickCount--;

        const newTranslateX =
          getInitialTranslateX(section23SlideWrapper) + moveDistance;
        section23SlideWrapper.style.transform = `translateX(${newTranslateX}px)`;
      }
      updateSection23ArrowOpacity();
    });

    section23RightArrow.addEventListener("click", () => {
      if (section23ClickCount < section23ClickLimit) {
        section23ClickCount++;
        const newTranslateX =
          getInitialTranslateX(section23SlideWrapper) - moveDistance;
        section23SlideWrapper.style.transform = `translateX(${newTranslateX}px)`;
      }
      updateSection23ArrowOpacity();
    });
    // 初始化section23箭头透明度
    updateSection23ArrowOpacity();
    //sectio20  滑动
    // section20 m-slide-container
    const section20MLeftArrow = document.querySelector(
      ".section20 .m-slide-container .arrows-wrap .arrow:nth-child(1)"
    );
    const section20MRightArrow = document.querySelector(
      ".section20 .m-slide-container .arrows-wrap .arrow:nth-child(2)"
    );
    const section20MSlideWrapper = document.querySelector(
      ".section20 .m-slide-container .slide-wrapper"
    );
    const section20MSlideItems = document.querySelectorAll(
      ".section20 .m-slide-container .slide-wrap"
    );

    let section20MRightClickCount = 0;
    const section20MClickLimit = 2;

    function getSection20MSlideWidth() {
      return section20MSlideItems[0] ? section20MSlideItems[0].offsetWidth : 0;
    }

    function getSection20MInitialTranslateX() {
      const style = window.getComputedStyle(section20MSlideWrapper);
      const transform = style.transform;
      if (transform && transform !== "none") {
        const matrix = new DOMMatrixReadOnly(transform);
        return matrix.m41;
      }
      return 0;
    }

    function updateSection20MArrowOpacity() {
      section20MLeftArrow.style.opacity =
        section20MRightClickCount === 0 ? 0.3 : 1;
      section20MRightArrow.style.opacity =
        section20MRightClickCount >= section20MClickLimit ? 0.3 : 1;
    }

    section20MLeftArrow.addEventListener("click", () => {
      if (section20MRightClickCount > 0) {
        section20MRightClickCount--;
        const currentTranslateX = getSection20MInitialTranslateX();
        const newTranslateX =
          currentTranslateX + getSection20MSlideWidth() * 1.1;
        section20MSlideWrapper.style.transform = `translateX(${newTranslateX}px)`;
      }
      updateSection20MArrowOpacity();
    });

    section20MRightArrow.addEventListener("click", () => {
      if (section20MRightClickCount < section20MClickLimit) {
        section20MRightClickCount++;
        const currentTranslateX = getSection20MInitialTranslateX();
        const newTranslateX =
          currentTranslateX - getSection20MSlideWidth() * 1.1;
        section20MSlideWrapper.style.transform = `translateX(${newTranslateX}px)`;
      }
      updateSection20MArrowOpacity();
    });

    updateSection20MArrowOpacity();
    // section22 m-slide-container
    const section22MLeftArrow = document.querySelector(
      ".section22 .m-slide-container .arrows-wrap .arrow:nth-child(1)"
    );
    const section22MRightArrow = document.querySelector(
      ".section22 .m-slide-container .arrows-wrap .arrow:nth-child(2)"
    );
    const section22MSlideWrapper = document.querySelector(
      ".section22 .m-slide-container .slide-wrapper"
    );
    const section22MSlideItems = document.querySelectorAll(
      ".section22 .m-slide-container .slide-wrap"
    );

    let section22MRightClickCount = 0;
    const section22MClickLimit = 3;

    // 获取slide宽度
    function getSection22MSlideWidth() {
      return section22MSlideItems[0] ? section22MSlideItems[0].offsetWidth : 0;
    }

    // 获取初始translateX值
    function getSection22MInitialTranslateX() {
      const style = window.getComputedStyle(section22MSlideWrapper);
      const transform = style.transform;
      if (transform && transform !== "none") {
        const matrix = new DOMMatrixReadOnly(transform);
        return matrix.m41;
      }
      return 0;
    }

    // 更新箭头透明度
    function updateSection22MArrowOpacity() {
      section22MLeftArrow.style.opacity =
        section22MRightClickCount === 0 ? 0.3 : 1;
      section22MRightArrow.style.opacity =
        section22MRightClickCount >= section22MClickLimit ? 0.3 : 1;
    }

    // 左箭头点击事件
    section22MLeftArrow.addEventListener("click", () => {
      if (section22MRightClickCount > 0) {
        section22MRightClickCount--;
        const currentTranslateX = getSection22MInitialTranslateX();
        const newTranslateX =
          currentTranslateX +
          getSection22MSlideWidth() +
          getSection22MSlideWidth() * 0.1;
        section22MSlideWrapper.style.transform = `translateX(${newTranslateX}px)`;
      }
      updateSection22MArrowOpacity();
    });

    // 右箭头点击事件
    section22MRightArrow.addEventListener("click", () => {
      if (section22MRightClickCount < section22MClickLimit) {
        section22MRightClickCount++;
        const currentTranslateX = getSection22MInitialTranslateX();
        const newTranslateX =
          currentTranslateX -
          getSection22MSlideWidth() -
          getSection22MSlideWidth() * 0.1;
        section22MSlideWrapper.style.transform = `translateX(${newTranslateX}px)`;
      }
      updateSection22MArrowOpacity();
    });

    // 初始化箭头透明度
    updateSection22MArrowOpacity();

    //add-wrap 弹窗
    const addModal = document.getElementById("add-modal");
    const modal = document.getElementById("rulesModal");
    const closeBtn = document.getElementById("closeModal");

    if (addModal && modal && closeBtn) {
      // 点击 rules-add 显示弹窗
      addModal.addEventListener("click", function () {
        modal.style.display = "block";
        rulesModal.classList.add("show");
      });

      // 点击关闭按钮隐藏弹窗
      closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
        rulesModal.classList.remove("show");
      });

      // 点击弹窗外部隐藏弹窗
      window.addEventListener("click", function (event) {
        if (event.target === modal) {
          modal.style.display = "none";
          rulesModal.classList.remove("show");
        }
      });
    }
    // 导航菜单
    const navItems = document.querySelectorAll(".page-nav-container li");

    // 初始化隐藏导航栏
    const navContainer = document.querySelector(".page-nav-container");

    // 如果是移动端直接隐藏并退出
    if (isMobile()) {
      navContainer.style.display = "none";
    } else {
      navContainer.style.display = "none";

      // 为每个菜单项添加点击事件
      navItems.forEach((item) => {
        item.addEventListener("click", function (e) {
          e.preventDefault();
          const targetId = this.getAttribute("data-target");
          const targetElement = document.querySelector(`.${targetId}`);

          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });

            navItems.forEach((nav) => nav.classList.remove("active"));
            this.classList.add("active");
          }
        });
      });

      // 初始化检查导航栏位置
      function checkNavVisibility() {
        const nav = document.querySelector(".page-nav-container");
        const section1 = document.querySelector("#a1-pro .section1");
        const section24 = document.querySelector("#a1-pro .section24");

        if (section1 && section24) {
          const section1Rect = section1.getBoundingClientRect();
          const section24Rect = section24.getBoundingClientRect();
          const navRect = nav.getBoundingClientRect();
          // 在section1顶部和section24底部之外隐藏
          if (
            navRect.top < section1Rect.top ||
            navRect.bottom > section24Rect.bottom
          ) {
            nav.style.display = "none";
            return false;
          } else {
            nav.style.display = "block";
            return true;
          }
        }
        return false;
      }

      // 初始化时检查
      checkNavVisibility();

      window.addEventListener("scroll", () => {
        const navContainer = document.querySelector(".page-nav-container");
        const allLis = document.querySelectorAll(
          "#a1-pro .a1-pro-container .page-nav-container li"
        );
        const allSpans = document.querySelectorAll(
          "#a1-pro .a1-pro-container .page-nav-container li span"
        );

        // 检查导航栏可见性
        if (!checkNavVisibility()) {
          return;
        }

        // 检测当前可视区域对应的模块并高亮
        let activeNavItem = null;
        navItems.forEach((navItem) => {
          const targetId = navItem.getAttribute("data-target");
          const targetElement = document.querySelector(`.${targetId}`);

          if (targetElement) {
            const rect = targetElement.getBoundingClientRect();
            // 检查元素是否在视口中心区域
            if (
              rect.top <= window.innerHeight / 2 &&
              rect.bottom >= window.innerHeight / 2
            ) {
              activeNavItem = navItem;
            }
          }
        });

        // 移除所有高亮状态
        navItems.forEach((nav) => nav.classList.remove("active"));

        // 添加当前模块的高亮状态
        if (activeNavItem) {
          activeNavItem.classList.add("active");
        }

        // 检测背景色设置文字颜色
        const sections = document.querySelectorAll('section, div[class*="section"]');
const hasBlackBackground = Array.from(sections).some((section) => {
  const rect = section.getBoundingClientRect();
  const navRect = navContainer.getBoundingClientRect();
  
  if (rect.top <= navRect.bottom && rect.bottom >= navRect.top) {
    const bgColor = window.getComputedStyle(section).backgroundColor;
    return bgColor === "rgb(0, 0, 0)";
  }
  return false;
});

const isWhiteBackground = !hasBlackBackground;


        // 设置普通导航项颜色
        if (isWhiteBackground) {
          allLis.forEach((li) => {
            if (!li.classList.contains("active")) {
              li.style.color = "gray";
            } else {
              li.style.color = "black"; // 白色背景下高亮为黑色
            }
          });
          allSpans.forEach((span) => {
            if (!span.parentElement.classList.contains("active")) {
              span.style.color = "gray";
            } else {
              span.style.color = "black"; // 白色背景下高亮为黑色
            }
          });
        } else {
          allLis.forEach((li) => {
            if (!li.classList.contains("active")) {
              li.style.color = "gray";
            } else {
              li.style.color = "white"; // 黑色背景下高亮为白色
            }
          });
          allSpans.forEach((span) => {
            if (!span.parentElement.classList.contains("active")) {
              span.style.color = "gray";
            } else {
              span.style.color = "white"; // 黑色背景下高亮为白色
            }
          });
        }
      });
    }

    //快拆-序列帧
    let quickReleasePcList = [
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/3_42d1bc10-a65d-4017-a364-b07a4ec98b13.jpg?v=1753758487",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/4_e979933a-bf09-4f97-889c-7c8407a147b2.jpg?v=1753758487",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/5_30d86bf9-5ddc-48e5-9639-0c10925a403e.jpg?v=1753758487",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/6_de970a4d-3ab1-491c-b3b6-b91232825f5d.jpg?v=1753758494",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/7_7e1ed1f4-d53c-4813-b6f9-2f31fcaf4c03.jpg?v=1753758494",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/8_25af585e-d826-4923-960c-e611af6f8eed.jpg?v=1753758494",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/9_f8dcfe26-51fb-4254-a348-30b0642db9d4.jpg?v=1753758494",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/10_6fc227a8-46fe-445f-a57f-737b2ac98eb5.jpg?v=1753758494",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/11_9906cdb1-daf6-4669-8ed8-e6d1f12c16fe.jpg?v=1753758494",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/12_b61120c2-1249-4f1a-ab2c-5ef870dd754f.jpg?v=1753758494",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/13_fe4a715d-2faf-454e-bea8-982e16abaa55.jpg?v=1753758494",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/14_8f776b2d-993e-4c32-8727-e349d7e7c2be.jpg?v=1753758494",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/15_37e77fd5-aa19-4907-a8db-c6cf4c31c200.jpg?v=1753758494",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/16_f23762fe-215c-4e49-80bc-ed8982aa3cdb.jpg?v=1753758494",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/17_46bd6ef1-e1b9-40b4-86c6-3c2af2c6020d.jpg?v=1753758494",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/18_e9f69bcb-6390-4e08-8856-00a231fe1b51.jpg?v=1753758494",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/19_7fdb88cb-ba74-4011-9bfe-9008efff45b7.jpg?v=1753758495",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/20_bfc3a1b2-77d9-40e8-bd7e-e31e4f332a42.jpg?v=1753758494",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/21.jpg?v=1753758494",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/22.jpg?v=1753758494",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/23.jpg?v=1753758495",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/24.jpg?v=1753758494",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/25.jpg?v=1753758495",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/26.jpg?v=1753758494",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/27.jpg?v=1753758495",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/28.jpg?v=1753758494",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/29.jpg?v=1753758494",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/30.jpg?v=1753758494",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/31.jpg?v=1753758494",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/32.jpg?v=1753758494",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/33.jpg?v=1753758494",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/34.jpg?v=1753758494",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/35.jpg?v=1753758494",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/36.jpg?v=1753758495",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/37.jpg?v=1753758494",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/38.jpg?v=1753758495",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/39.jpg?v=1753758495",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/40.jpg?v=1753758495",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/41.jpg?v=1753758494",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/42.jpg?v=1753758494",
    ];
    let quickReleaseMobileList = [
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/1_9d171421-71c2-47db-9a3a-80057fb35906.jpg?v=1753847654",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/2_b89fa06a-a9e5-428c-8e1e-d8a079fd614b.jpg?v=1753847654",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/3_290a4ae6-224b-46d5-b363-3dfe0f841eaa.jpg?v=17538476540",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/4_8f2bc63a-5cb5-4c01-9667-fe05e113d5ca.jpg?v=1753847654",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/5_0b679776-07f7-4009-bed6-8d6c35d09e34.jpg?v=1753847654",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/6_73e008fa-7320-414d-bb51-32bb10c9f618.jpg?v=1753847654",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/7_634cb5bf-be81-4569-9e05-f79063ac14a0.jpg?v=1753847654",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/8_3df8be4b-fe80-4e83-b8dc-154280d3f04d.jpg?v=1753847654",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/9_506072e6-701b-4df3-a853-2645184006cf.jpg?v=1753847654",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/10_5f76f03b-57be-4c75-9261-965dac44745d.jpg?v=1753847654",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/11_4024c2e1-d50c-4185-96d2-a7efab336a26.jpg?v=1753847654",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/12_4538a966-0391-48f3-961f-9e9e8a413366.jpg?v=1753847654",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/13_fd7fdd4d-026a-4ded-8389-106ab5abf6ac.jpg?v=1753847654",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/14_7637005f-fbe8-4dc5-8b5c-e0e0f29db0ee.jpg?v=1753847654",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/15_a4937e69-5a59-4eeb-b6ef-0f4351382fc8.jpg?v=1753847654",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/16_8c49d448-afc5-4d87-bb66-5afb252ab3de.jpg?v=1753847654",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/17_ff3c234a-a5ed-4899-a046-9a207e41d2e8.jpg?v=1753847654",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/18_835aadbd-b144-464f-bc9f-b9bf6a4151db.jpg?v=1753847654",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/19_a6ee2f38-8259-4852-9491-d24d8e19d6f6.jpg?v=1753847654",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/20_4cff8a0e-c340-42c9-9680-1600f63b7798.jpg?v=1753847654",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/21_7a61bb2d-9ec0-45b6-9957-104cac78a9e0.jpg?v=1753847654",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/22_c858e67d-75fc-47d2-9168-bd76f4eafb0a.jpg?v=1753847654",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/23_77ae3754-d92d-475f-8ad6-fc9ea26c25bc.jpg?v=1753847654",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/24_2b476eb0-e983-4016-a60f-a9236c92b7a7.jpg?v=1753847654",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/25_db6bdb34-015e-458b-a41a-9eba80fee032.jpg?v=1753847654",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/26_e51eb16c-fe40-4b6d-880d-77be039ec480.jpg?v=1753847654",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/27_abbabda7-cbad-4360-a6fa-b1534da8d9f9.jpg?v=1753847654",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/28_ee78d236-a03a-426c-bcf0-a22ffee72f70.jpg?v=1753847654",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/29_45d0dc8f-d461-4006-af3c-997448f345c6.jpg?v=1753847654",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/30_2cc644d6-1948-48c9-84d7-6f80ed274242.jpg?v=1753847654",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/31_b42233d2-e56f-45cd-9b60-e1bb37714f85.jpg?v=1753847654",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/32_a283eb0d-ae36-477b-bd51-03003dbf2d9b.jpg?v=1753847654",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/33_8baaa087-0502-4353-9215-f3db433155e1.jpg?v=1753847654",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/34_c468f110-718e-4c23-a1c4-3d8a178b0866.jpg?v=1753847654",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/35_ec83460c-bd1d-4a5a-be9d-6e0fe95b0e1c.jpg?v=1753847654",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/36_46133fe2-aa33-4ba4-8295-83d9a841897a.jpg?v=1753847654",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/37_5f53bd26-80e4-4b7f-a129-6a8ac23d298e.jpg?v=1753847654",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/38_dabf30d4-bbcc-47cf-b5a5-87b7fb63b5e8.jpg?v=1753847654",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/39_5003daef-de27-48aa-9dae-eddd60326d44.jpg?v=1753847654",
      "https://cdn.shopify.com/s/files/1/0893/0603/8637/files/40_6604652c-5341-48c0-9821-f1da515067bc.jpg?v=1753847654",
    ];
    // 序列帧
    const currentList = isMobile()
      ? quickReleaseMobileList
      : quickReleasePcList;
    gsap.registerPlugin(ScrollTrigger);
    function setCanvasAnimate(
      { canvas_selector, frame_images, update, duration, lockFrames = [] },
      tl
    ) {
      const canvas_wrap = document.querySelector(canvas_selector);
      const canvas = canvas_wrap.querySelector("canvas");
      const context = canvas.getContext("2d");
      const images = [];
      let loaded = 0;
      let imgW = 0,
        imgH = 0;

      // 设置canvas容器样式
      canvas_wrap.style.position = "relative";
      canvas_wrap.style.width = "100%";
      canvas_wrap.style.height = "100vh";
      canvas_wrap.style.overflow = "hidden";

      // 预加载所有图片
      frame_images.forEach((src, idx) => {
        const img = new Image();
        img.src = src;
        img.onload = function () {
          loaded++;
          if (loaded === 1) {
            imgW = img.naturalWidth || img.width;
            imgH = img.naturalHeight || img.height;

            if (isMobile()) {
              // 移动端按原比例显示
              canvas.width = imgW;
              canvas.height = imgH;
              canvas.style.width = "100%";
              canvas.style.height = "auto";
              canvas.style.position = "absolute";
              canvas.style.bottom = "8%";
            } else {
              // PC端保持原有逻辑
              const containerWidth = canvas_wrap.offsetWidth;
              const containerHeight = canvas_wrap.offsetHeight;
              const scaleX = containerWidth / imgW;
              const scaleY = containerHeight / imgH;
              const scale = Math.min(scaleX, scaleY);
              canvas.width = imgW * scale;
              canvas.height = imgH * scale;
              canvas.style.width = "100%";
              canvas.style.height = "100%";
            }
            // canvas.style.objectFit = "contain";
            // 立即绘制第一帧，避免黑屏
            context.drawImage(img, 0, 0, canvas.width, canvas.height);
          }
          if (loaded === frame_images.length) {
            console.log("所有图片加载完成");
          }
        };
        images.push(img);
      });

      let obj = { frame: 0 };

      // 等待所有图片加载完成后再创建动画
      const checkImagesLoaded = setInterval(() => {
        if (loaded === frame_images.length) {
          clearInterval(checkImagesLoaded);

          // 创建动画，在特定帧添加停留时间
          for (let i = 0; i < images.length; i++) {
            const isLockFrame = lockFrames.includes(i);

            // 先播放到当前帧
            tl.to(obj, {
              frame: i,
              duration: 0.5, // 快速切换到目标帧
              roundProps: "frame",
              ease: "none",
              onUpdate: function () {
                if (images[obj.frame] && images[obj.frame].complete) {
                  context.clearRect(0, 0, canvas.width, canvas.height);
                  context.drawImage(
                    images[obj.frame],
                    0,
                    0,
                    canvas.width,
                    canvas.height
                  );
                }
              },
            });

            // 如果是锁定帧，添加停留时间
            if (isLockFrame) {
              tl.to({}, { duration: 2 }); // 停留2秒
            }
          }
        }
      }, 100);
    }
    function initFourteenSectionAnimation() {
      let t15 = gsap.timeline({});
      setCanvasAnimate(
        {
          canvas_selector: ".quick-container",
          frame_images: currentList,
          duration: currentList.length,
        },
        t15
      );
    
          ScrollTrigger.create({
            animation: t15,
            trigger: ".section6",
            start: "top top",
            scrub: true,
            pin: true,
            end: `+=${currentList.length * 160}`,
            pinSpacing: true,
          });
    }
 //控制序列帧加载时机
    /**
     * 等待指定ID的元素出现并渲染完成
     * @param {string} id 元素ID
     * @param {number} timeout 超时时间（毫秒），默认10秒
     * @returns {Promise<HTMLElement>}
     */
     function waitForElement(id, timeout = 10000) {
      return new Promise((resolve, reject) => {
        const startTime = Date.now();

        // 检查元素是否已经存在
        const existingElement = document.getElementById(id);
        if (existingElement) {
          resolve(existingElement);
          return;
        }

        // 创建MutationObserver监听DOM变化
        const observer = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
              if (node.nodeType === Node.ELEMENT_NODE) {
                const element = node;
                if (element.id === id) {
                  observer.disconnect();
                  resolve(element);
                  return;
                }
                // 检查子元素
                const targetElement = element.querySelector(`#${id}`);
                if (targetElement) {
                  observer.disconnect();
                  resolve(targetElement);
                  return;
                }
              }
            });
          });
        });

        // 开始观察
        observer.observe(document.body, {
          childList: true,
          subtree: true,
        });

        // 设置超时
        const timeoutId = setTimeout(() => {
          observer.disconnect();
          reject(
            new Error(`Element with id "${id}" not found within ${timeout}ms`)
          );
        }, timeout);

        // 清理函数
        const cleanup = () => {
          observer.disconnect();
          clearTimeout(timeoutId);
        };

        // 如果Promise被拒绝，清理资源
        Promise.resolve().catch(() => cleanup());
      });
    }

    /**
     * 等待元素渲染完成（包括样式和布局）
     * @param {HTMLElement} element 目标元素
     * @param {number} timeout 超时时间（毫秒），默认5秒
     * @returns {Promise<void>}
     */
    function waitForElementRender(element, timeout = 5000) {
      return new Promise((resolve, reject) => {
        const startTime = Date.now();

        // 检查元素是否已经渲染
        const checkRender = () => {
          const rect = element.getBoundingClientRect();
          const computedStyle = window.getComputedStyle(element);

          // 检查元素是否有尺寸和可见性
          if (
            rect.width > 0 &&
            rect.height > 0 &&
            computedStyle.display !== "none"
          ) {
            resolve();
            return;
          }

          // 检查是否超时
          if (Date.now() - startTime > timeout) {
            reject(new Error("Element render timeout"));
            return;
          }

          // 继续等待
          requestAnimationFrame(checkRender);
        };

        checkRender();
      });
    }

       waitForElement("gsap1")
      .then((element) => waitForElementRender(element))
        .then(() => {
        initFourteenSectionAnimation();

      });