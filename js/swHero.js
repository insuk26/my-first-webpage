const mainVisualBg = document.querySelector(
  ".hero .main-visual .main-visual-bg",
);
// console.log(mainVisualBg);
const heroBtns = document.querySelectorAll(".visual-inner .sw-hero-btn");
// console.log(heroBtns);
const playStopBtn = document.querySelector(
  ".swHero .pagination .play-stop-btn",
);

// 히어로 슬라이드 버튼 호버 인터랙션
heroBtns.forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    btn.querySelector(".off").style.opacity = 1;
  });

  btn.addEventListener("mouseout", () => {
    btn.querySelector(".off").style.opacity = 0;
  });
});

// 스와이퍼 설정
const swHero = new Swiper(".sw-hero", {
  speed: 1000,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".hero-next-btn",
    prevEl: ".hero-prev-btn",
  },

  on: {
    slideChangeTransitionStart: function (swiper) {
      // const activeSilde = swiper.activeIndex + 1;
      // console.log(activeSilde);
      // mainVisualBg.style.backgroundImage = `url(assets/images/slide_${activeSilde}.png)`;
      const activeSlide = swiper.slides[swiper.activeIndex];
      // console.log(activeSlide);
      const activeSlideImgUrl =
        activeSlide.querySelector(".slide-image img").src;
      // console.log(activeSlideImg.src);
      mainVisualBg.style.backgroundImage = `url(${activeSlideImgUrl})`;
    },
  },
});

// 재생, 정지 버튼
playStopBtn.addEventListener("clik", () => {
  const isRunning = swHero.autoplay.running;
  // console.log(isRunning);

  if (isRunning) {
    swHero.autoplay.stop();
  } else {
    swHero.autoplay;
  }
});
