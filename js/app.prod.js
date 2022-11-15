"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var flsFunctions=_interopRequireWildcard(require("./modules/functions.js"));function _getRequireWildcardCache(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return _getRequireWildcardCache=function(){return e},e}function _interopRequireWildcard(e){if(e&&e.__esModule)return e;if(null===e||"object"!==_typeof(e)&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache();if(t&&t.has(e))return t.get(e);var o,n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e){Object.prototype.hasOwnProperty.call(e,i)&&((o=r?Object.getOwnPropertyDescriptor(e,i):null)&&(o.get||o.set)?Object.defineProperty(n,i,o):n[i]=e[i])}return n.default=e,t&&t.set(e,n),n}flsFunctions.isWebp();var swiper_page,swiper_subtitle,changetext,path_html=window.location.pathname,page_html=path_html.split("/").pop(),page_index=0,page=[1,2,3],name=["Terrasse","Eingang","Vorderansicht"];function adaptive_arrows(){var e=document.querySelectorAll(".swiper-slide");window.innerWidth<=780&&e.forEach(function(e){e.classList.add("container")});var t=document.querySelector(".swiper-buttons"),o=document.querySelector(".swiper-slide");t.style.minWidth=o.offsetWidth+250+"px"}window.onload=function(){document.querySelector(".preloader").style.opacity=0;document.body;document.getElementsByTagName("html")[0].classList.remove("--block"),gsap.registerPlugin(ScrollTrigger),gsap.to(".preloader",{scrollTrigger:{trigger:".animation-0",start:"top +=700",toggleActions:"play none none none"},display:"none",duration:1}),gsap.to(".header",{scrollTrigger:{trigger:".animation-0",start:"top +=700",toggleActions:"play none none none"},top:0,duration:.7}),""==page_html||"index.html"==page_html?(gsap.to(".info-item",{scrollTrigger:{trigger:".info-item",start:"top +=700",toggleActions:"play none none none"},scale:1,delay:1,duration:1}),gsap.to(".col-main__foreword",{scrollTrigger:{trigger:".animation-0",start:"top +=700",toggleActions:"play none none none"},translateX:0,delay:1,duration:1}),gsap.to(".col-main__title",{scrollTrigger:{trigger:".animation-0",start:"top +=700",toggleActions:"play none none none"},opacity:1,translateY:0,delay:1,duration:1}),gsap.to(".col-main__promise",{scrollTrigger:{trigger:".animation-0",start:"top +=700",toggleActions:"play none none none"},opacity:.8,delay:2,translateY:0,duration:1}),gsap.to(".col-main__button",{scrollTrigger:{trigger:".animation-0",start:"top +=700",toggleActions:"play none none none"},opacity:1,delay:2,translateY:0,duration:1}),gsap.to(".about-content__col",{scrollTrigger:{trigger:".about-content__col",start:"top +=700",toggleActions:"play none none none"},opacity:1,translateX:0,duration:1}),gsap.to(".advantages-item",{scrollTrigger:{trigger:".advantages-item",start:"top +=800",toggleActions:"play none none none"},opacity:1,duration:1}),gsap.to(".history-list__item",{scrollTrigger:{trigger:".history-list__item",start:"top +=1200",toggleActions:"play none none none"},opacity:1,y:0,duration:1}),gsap.to(".history-button",{scrollTrigger:{trigger:".history-button",start:"top +=900",toggleActions:"play none none none"},opacity:1,y:0,duration:1}),gsap.to(".certificates-col__image",{scrollTrigger:{trigger:".certificates-col__image",start:"top +=1100",toggleActions:"play none none none"},opacity:1,scale:1,duration:1})):"houses.html"==page_html&&adaptive_arrows()},document.addEventListener("DOMContentLoaded",function(e){var t=document.querySelector(".header-feedback"),o=document.querySelector(".dialog"),n=(document.body,document.getElementsByTagName("html")[0]),r=document.querySelector(".dialog-background"),i=document.querySelector(".dialog-close"),i=(document.querySelector(".swiper-button-next"),document.querySelector(".swiper-button-prev"),document.querySelector(".dialog-close"));swiper_page=document.querySelector(".swiper-page"),swiper_subtitle=document.querySelector(".swiper-subtitle"),t.addEventListener("click",function(e){n.classList.add("--block"),o.classList.add("--active"),r.classList.add("--active")}),i.addEventListener("click",function(e){o.classList.remove("--active"),n.classList.remove("--block"),r.classList.remove("--active")});document.querySelector(".about"),document.querySelector(".col-main__button"),document.querySelector(".col-main__button");var a,s,c,l,d,u,p,g=document.querySelector(".header-burger"),m=document.querySelector(".burger");g.addEventListener("click",function(e){g.classList.contains("header-burger--active")?(g.classList.remove("header-burger--active"),m.classList.remove("_active")):(g.classList.add("header-burger--active"),m.classList.add("_active"))}),""!=page_html&&"index.html"!=page_html||(new Swiper(".mySwiper",{spaceBetween:30,slidesPerView:3,autoHeight:!0,autoWeight:!0,loop:!0,pagination:{el:".swiper-pagination",type:"progressbar"},watchOverflow:!0,centeredSlides:!0,breakpoints:{0:{slidesPerView:1},666:{slidesPerView:1.4},768:{slidesPerView:1.6},1e3:{slidesPerView:2},1200:{slidesPerView:2.5},1300:{slidesPerView:2.7},1500:{slidesPerView:3},1700:{slidesPerView:3.5},1800:{slidesPerView:3.7}}}),document.querySelector(".col-main__button").addEventListener("click",function(e){var t=document.querySelector(".about"),o=(document.querySelector(".about").offsetHeight,t.getBoundingClientRect().top-80);window.scrollBy({top:o,behavior:"smooth"})}),a=[53.338764,9.875054],ymaps.ready(function(){var e=new ymaps.Map("map-test",{center:a,zoom:17});e.controls.remove("geolocationControl"),e.controls.remove("searchControl"),e.controls.remove("trafficControl"),e.controls.remove("typeSelector"),e.controls.remove("fullscreenControl"),e.controls.remove("zoomControl"),e.controls.remove("rulerControl"),e.behaviors.disable(["scrollZoom"])})),"houses.html"==page_html&&(s=document.querySelectorAll(".descr-two__item"),c=document.querySelector(".info-1"),l=document.querySelector(".info-2"),s.forEach(function(e,o){e.addEventListener("click",function(e){c.classList.remove("info--active"),l.classList.remove("info--active"),0==o&&c.classList.add("info--active"),1==o&&l.classList.add("info--active");var t=e.currentTarget;s.forEach(function(e){e.classList.remove("tab-active")}),t.classList.add("tab-active")})}),document.querySelector(".col-down__button").addEventListener("click",function(e){var t=document.querySelector(".houses-descr"),o=(document.querySelector(".houses-descr").offsetHeight,t.getBoundingClientRect().top-80);window.scrollBy({top:o,behavior:"smooth"})}),d=document.querySelector(".video-inside"),u=document.querySelector(".houses-video__video"),p=document.querySelector(".houses-video__video-pause"),d.addEventListener("click",function(e){u.paused?(p.style.display="none",u.play()):(p.style.display="block",u.pause())}))}),"houses.html"==page_html&&(addEventListener("resize",function(e){adaptive_arrows()}),addEventListener("scroll",function(e){adaptive_arrows()}),addEventListener("click",function(e){adaptive_arrows()})),"houses.html"==page_html&&(changetext=function(){swiper_subtitle.innerHTML=name[page_index],swiper_page.innerHTML="0"+page[page_index]+"<span>| 03</span>"},$(document).ready(function(){var t=new Swiper(".swiper-container",{spaceBetween:170,breakpoints:{310:{slidesPerView:1},1025:{slidesPerView:1.69}},autoHeight:!0,watchOverflow:!0,centeredSlides:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});t.on("slideChange",function(e){page_index=t.activeIndex,changetext(),adaptive_arrows()})}));