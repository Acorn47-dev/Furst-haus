import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

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

document.addEventListener("DOMContentLoaded", (e) => {
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
  button.addEventListener("click", (e) => {
    about.scrollIntoView({
      duration: 2000
  })
  })
})