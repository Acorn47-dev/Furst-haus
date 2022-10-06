import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();
// let center = [53.338764, 9.875054];

// function init() {
//   let map = new ymaps.Map('map-test', {
//     center: center,
//     zoom: 17
//   });

//   map.controls.remove('geolocationControl'); // удаляем геолокацию
//   map.controls.remove('searchControl'); // удаляем поиск
//   map.controls.remove('trafficControl'); // удаляем контроль трафика
//   map.controls.remove('typeSelector'); // удаляем тип
//   map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
//   map.controls.remove('zoomControl'); // удаляем контрол зуммирования
//   map.controls.remove('rulerControl'); // удаляем контрол правил
//   map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
// }

// ymaps.ready(init);


document.addEventListener("DOMContentLoaded", (e) => {
  var header_feedback = document.querySelector(".header-feedback");
  var dialog = document.querySelector(".dialog");
  var dialog_bckgr = document.querySelector(".dialog-background");
  var dialog_close = document.querySelector(".dialog-close");
header_feedback.addEventListener("click", (e) => {

  dialog.classList.add("--active")
  dialog_bckgr.classList.add("--active")
})
  dialog_close.addEventListener("click", (e) => {
    dialog.classList.remove("--active")
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
  // if (window.location.pathname = "index.html") {
  // button.addEventListener("click", (e) => {
  //   about.scrollIntoView({
  //     duration: 2000
  // })
  // })
  // }



})
// var swiper = new Swiper(".mySwiper", {
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

// var video_inside = document.querySelector(".video-inside");
// var video = document.querySelector(".houses-video__video");
// var video_btn = document.querySelector(".houses-video__video-pause");

// video_inside.addEventListener("click", (e) => {и
//   if (video.paused) {
//     video_btn.style.display = "none";
//     video.play();
//   } else {

//     video_btn.style.display = "block";
//     video.pause();
//   }
 
// })

$(document).ready(function() {
  // Assign some jquery elements we'll need
  var $swiper = $(".swiper-container");
  var $bottomSlide = null; // Slide whose content gets 'extracted' and placed
  // into a fixed position for animation purposes
  var $bottomSlideContent = null; // Slide content that gets passed between the
  // panning slide stack and the position 'behind'
  // the stack, needed for correct animation style

  var mySwiper = new Swiper(".swiper-container", {
    spaceBetween: 0,
    slidesPerView: 3,
    
    centeredSlides: true,
    roundLengths: true,
    loop: false,
    loopAdditionalSlides: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
});
