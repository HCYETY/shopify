class NavSwiper {
  constructor(selector) {
    this.swiper = new Swiper(selector, {
      slidesPerView: 2,
      spaceBetween: 60,
      centeredSlides: true,
      on: {
        slideChangeTransitionStart: () => {
          let selectEl = this.parent.find(".cl-swiper--nav-item")[
            this.swiper.activeIndex
          ];
          $(selectEl)
            .addClass("cl-swiper-active")
            .siblings()
            .removeClass("cl-swiper-active");
          $(selectEl).click();
        },
      },
    });
    this.parent = $(selector).parent();
    this.active = this.parent.find(".cl-swiper-active");
    this.activeSwiperIndex = 0;
    this.mgLeft = this.active.position().left;
    this.drag = this.parent.find(".cl-swiper-nav-scrollbar-drag");
    this.init();
  }

  init() {
    this.drag.css({ width: this.active.innerWidth() + "px" });
    this.parent.find(".cl-swiper-nav-list").on("click", (e) => {
      if (e.target.classList.contains("cl-swiper--nav-item")) {
        this.active = $(e.target);
        this.activeSwiperIndex = this.active.data("index");
        this.swiper.slideTo(this.activeSwiperIndex);
        this.active
          .addClass("cl-swiper-active")
          .siblings()
          .removeClass("cl-swiper-active");
        this.drag.css({
          width: this.active.innerWidth() + "px",
          transform: `translateX(${
            this.active.position().left - this.mgLeft
          }px)`,
        });
      }
    });
  }
}

class ClLink extends HTMLElement {
  constructor() {
    super();
    const styles = document.createElement("style");
    styles.textContent = `
        .cl-nav-containe{
          display: flex;
        }
        .cl-nav-progress-line{
            width: 2px;
            background-color: #a0a0a0;
            border-radius: 2px;
        }
        .cl-nav-scrollbar-drag{
            width: 4px;
            margin-left: -1px;
            height: 40px;
            border-radius: 5px;
            background-color: #303030;
            transition: all .35s;
        }
  
        .cl-nav-list{
            display: inline-flex;
            flex-direction: column;
            justify-content: space-between;
            margin-left: 20px;
        }
        .cl-nav-item{
            width: 100%;
            height: 40px;
            cursor: pointer;
            text-align: left;
            background: none;
            border: none;
            opacity: .4;
            font-size: 16px;
            transition: all .35s;
        }
        .cl-active{
            opacity: 1;
        }
      `;
    this.style.display = "block";
    const shadow = this.attachShadow({ mode: "open" });

    const jumpLink = $(`
        <div class="cl-nav-containe">
          <div class="cl-nav-progress-line">
              <div class="cl-nav-scrollbar-drag"></div>
          </div>
          <nav class="cl-nav-list">
          </nav>
        </div>  
      `);

    const autoScrollbarMove = (index) => {
      const el = $(jumpLink).find(".cl-nav-item")[index];
      $(el).addClass("cl-active").siblings().removeClass("cl-active");
      $(jumpLink)
        .find(".cl-nav-scrollbar-drag")
        .css("transform", `translateY(${el.dataset.index * 100}%)`);
    };

    Array.from(this.children).map((child, index) => {
      const link = $(child).attr("link");
      $(jumpLink)
        .find(".cl-nav-list")
        .append(
          $(
            `<button class="cl-nav-item ${
              index === 0 ? " cl-active" : ""
            }" data-index="${index}" data-link="${link}">${
              child.textContent
            }</button>`
          )
        );

      ScrollTrigger.create({
        trigger: link,
        start: "top center",
        end: "bottom center",
        onEnter: () => autoScrollbarMove(index),
        onEnterBack: () => autoScrollbarMove(index),
      });
    });

    $(jumpLink)
      .find(".cl-nav-list")
      .click((e) => {
        $(e.target).addClass("cl-active").siblings().removeClass("cl-active");
        $(jumpLink)
          .find(".cl-nav-scrollbar-drag")
          .css("transform", `translateY(${e.target.dataset.index * 100}%)`);
        gsap.to(window, {
          duration: 0.35,
          scrollTo: { y: `${e.target.dataset.link}`, ease: "power2.out" },
        });
      });

    ScrollTrigger.create({
      trigger: this,
      start: "top center-=20%",
      endTrigger: $(this.children).last().attr("link"),
      end: "bottom center",
      pin: this,
    });

    $(shadow).append(jumpLink);
    $(shadow).append(styles);
  }
}
customElements.define("cl-jlink", ClLink);
