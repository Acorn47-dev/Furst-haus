import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

var path_html = window.location.pathname;
var page_html = path_html.split("/").pop();



var page_index = 0;
var swiper_page, swiper_subtitle;
var page = [1, 2, 3];
var name = ["Terrasse", "Eingang", "Vorderansicht"];

window.onload = function () {
  let preloader = document.querySelector(".preloader");
  preloader.style.opacity = 0;
  var body = document.body;
  body.classList.remove("--block")
  gsap.registerPlugin(ScrollTrigger);
  gsap.to(".preloader", {
    scrollTrigger: {
      trigger: ".animation-0",
      start: "top +=700",
      toggleActions: "play none none none"
    },
    display: "none",
    duration: 1
  })
  gsap.to(".header", {
    scrollTrigger: {
      trigger: ".animation-0",
      start: "top +=700",
      toggleActions: "play none none none"
    },
    top: 0,
    delay: 1,
    duration: 1
  })
  if (page_html == "index.html") {
    gsap.to(".info-item", {
      scrollTrigger: {
        trigger: ".animation-0",
        start: "top +=700",
        toggleActions: "play none none none"
      },
      scale: 1,
      delay: 1,
      duration: 1
    })
    gsap.to(".col-main__foreword", {
      scrollTrigger: {
        trigger: ".animation-0",
        start: "top +=700",
        toggleActions: "play none none none"
      },
      translateX: 0,
      delay: 1,
      duration: 1
    })
    gsap.to(".col-main__title", {
      scrollTrigger: {
        trigger: ".animation-0",
        start: "top +=700",
        toggleActions: "play none none none"
      },
      opacity: 1,
      translateY: 0,
      delay: 1,
      duration: 1

    })
    gsap.to(".col-main__promise", {
      scrollTrigger: {
        trigger: ".animation-0",
        start: "top +=700",
        toggleActions: "play none none none"
      },
      opacity: 0.8,
      delay: 2,
      translateY: 0,
      duration: 1
    })
    gsap.to(".col-main__button", {
      scrollTrigger: {
        trigger: ".animation-0",
        start: "top +=700",
        toggleActions: "play none none none"
      },
      opacity: 1,
      delay: 2,
      translateY: 0,
      duration: 1
    })
    gsap.to(".about-content__col", {
      scrollTrigger: {
        trigger: ".about-content__col",
        start: "top +=700",
        toggleActions: "play none none none"
      },
      opacity: 1,
      translateX: 0,
      duration: 1
    })
    gsap.to(".advantages-item", {
      scrollTrigger: {
        trigger: ".advantages-item",
        start: "top +=700",
        toggleActions: "play none none none"
      },
      opacity: 1,
      scale: 1,
      duration: 1
    })

    gsap.to(".history-list__item", {
      scrollTrigger: {
        trigger: ".history-list__item",
        start: "top +=700",
        toggleActions: "play none none none"
      },
      opacity: 1,
      y: 0,
      duration: 1
    })
    gsap.to(".history-button", {
      scrollTrigger: {
        trigger: ".history-button",
        start: "top +=700",
        toggleActions: "play none none none"
      },
      opacity: 1,
      y: 0,
      duration: 1
    })
    gsap.to(".certificates-col__image", {
      scrollTrigger: {
        trigger: ".certificates-col__image",
        start: "top +=700",
        toggleActions: "play none none none"
      },
      opacity: 1,
      scale: 1,
      duration: 1
    })
  } else if (page_html == "houses.html") {
    adaptive_arrows();
  }
  
  //
  //certificates-col__image
  //partners-content__col


}

document.addEventListener("DOMContentLoaded", (e) => {
  var header_feedback = document.querySelector(".header-feedback");
  var dialog = document.querySelector(".dialog");
  var body = document.body;

  var dialog_bckgr = document.querySelector(".dialog-background");
  var dialog_close = document.querySelector(".dialog-close");
  var swiper_button_next = document.querySelector(".swiper-button-next");
  var swiper_button_prev = document.querySelector(".swiper-button-prev");
  var dialog_close = document.querySelector(".dialog-close");
  swiper_page = document.querySelector(".swiper-page");
  swiper_subtitle = document.querySelector(".swiper-subtitle");
  header_feedback.addEventListener("click", (e) => {
    body.classList.add("--block")
    dialog.classList.add("--active")
    dialog_bckgr.classList.add("--active")
  })
  dialog_close.addEventListener("click", (e) => {
    dialog.classList.remove("--active")
    body.classList.remove("--block")
    dialog_bckgr.classList.remove("--active")
  })
  var about = document.querySelector(".about");
  var button = document.querySelector(".col-main__button");
  var button = document.querySelector(".col-main__button");
  var header_burger = document.querySelector(".header-burger");
  var burger = document.querySelector(".burger");
  header_burger.addEventListener("click", (e) => {
    if (header_burger.classList.contains("header-burger--active")) {
      header_burger.classList.remove("header-burger--active");
      burger.classList.remove("_active");
    } else {
      header_burger.classList.add("header-burger--active");
      burger.classList.add("_active");
    }
  })
  if (page_html == "index.html") {

    var col_main_button = document.querySelector(".col-main__button");

    col_main_button.addEventListener("click", (e) => {

      const scrollTarget = document.querySelector(".about");

      const topOffset = document.querySelector('.about').offsetHeight;
      // const topOffset = 0; // если не нужен отступ сверху 
      const elementPosition = scrollTarget.getBoundingClientRect().top - 80;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
        top: elementPosition,
        behavior: 'smooth'
      });
    })

    let center = [53.338764, 9.875054];

    function init() {
      let map = new ymaps.Map('map-test', {
        center: center,
        zoom: 17
      });

      map.controls.remove('geolocationControl'); // удаляем геолокацию
      map.controls.remove('searchControl'); // удаляем поиск
      map.controls.remove('trafficControl'); // удаляем контроль трафика
      map.controls.remove('typeSelector'); // удаляем тип
      map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
      map.controls.remove('zoomControl'); // удаляем контрол зуммирования
      map.controls.remove('rulerControl'); // удаляем контрол правил
      map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
    }

    ymaps.ready(init);
  }
  if (page_html == "houses.html") {

    var descr_two_item = document.querySelectorAll(".descr-two__item");
    var info1 = document.querySelector(".info-1");
    var info2 = document.querySelector(".info-2");
    descr_two_item.forEach((el, index) => {
      el.addEventListener("click", (e) => {
        info1.classList.remove("info--active");
        info2.classList.remove("info--active");
        if (index == 0) {
          info1.classList.add("info--active");
        }
        if (index == 1) {
          info2.classList.add("info--active");
        }
        var current = e.currentTarget;
        descr_two_item.forEach(remove_el => {
          remove_el.classList.remove("tab-active")
        })
        current.classList.add("tab-active")
      })
    });

    var col_down_button = document.querySelector(".col-down__button");
    col_down_button.addEventListener("click", (e) => {

      const scrollTarget = document.querySelector(".houses-descr");
      const topOffset = document.querySelector('.houses-descr').offsetHeight;
      const elementPosition = scrollTarget.getBoundingClientRect().top - 80;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
        top: elementPosition,
        behavior: 'smooth'
      });
    })

    var video_inside = document.querySelector(".video-inside");
    var video = document.querySelector(".houses-video__video");
    var video_btn = document.querySelector(".houses-video__video-pause");

    video_inside.addEventListener("click", (e) => {
      if (video.paused) {
        video_btn.style.display = "none";
        video.play();
      } else {
        video_btn.style.display = "block";
        video.pause();
      }
    })
  }

})


if (page_html == "houses.html") {
  addEventListener("resize", (e) => {
    adaptive_arrows();
  })
  addEventListener("scroll", (e) => {
    adaptive_arrows();
  })
  addEventListener("click", (e) => {
    adaptive_arrows();
  })
}



function adaptive_arrows() {
  var slide = document.querySelectorAll(".swiper-slide");
  var size = window.innerWidth;
  if (size <= 780) {
    slide.forEach(element => {
      element.classList.add("container")
    });
  }
  var cont_buttons = document.querySelector(".swiper-buttons");
  var active_slide = document.querySelector(".swiper-slide");
  cont_buttons.style.minWidth = active_slide.offsetWidth + 250 + "px";
}


if (page_html == "houses.html") {
  // !!! при работе со swiper нельзя задавать свои размеры слайду в css
  $(document).ready(function () {

    var mySwiper = new Swiper('.swiper-container', {
      spaceBetween: 170, // расстояние между слайдарами
      // slidesPerView: 1.69, // размер слайдера 
      breakpoints: { // Breakpoint помогает делать swiper адаптивным
        310: {  // 310 - разрешение, при котором будут происходить изменение
          slidesPerView: 1,
        },
        1025: {
          slidesPerView: 1.69,
        },
      },
      autoHeight: true,  // авто размер слайдера

      watchOverflow: true,
      centeredSlides: true,  // центрирование слайда
      navigation: {   // с помощью navigation задаются кнопки, которые должны переключать слайды
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    })
    mySwiper.on('slideChange', function (e) { // слушатель переключений слайдов
      page_index = mySwiper.activeIndex;
      changetext();
      adaptive_arrows();
    });
  });
  function changetext() {
    swiper_subtitle.innerHTML = name[page_index];
    swiper_page.innerHTML = "0" + page[page_index] + "<span>| 03</span>";
  }
}
