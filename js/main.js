/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_components.js":
/*!*******************************!*\
  !*** ./src/js/_components.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/date */ "./src/js/components/date.js");
/* harmony import */ var _components_date__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_date__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/map */ "./src/js/components/map.js");
/* harmony import */ var _components_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_map__WEBPACK_IMPORTED_MODULE_1__);
//import './components/slider';

// import './components/video';


/***/ }),

/***/ "./src/js/_functions.js":
/*!******************************!*\
  !*** ./src/js/_functions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/burger */ "./src/js/functions/burger.js");
// Данный файл - лишь собрание подключений готовых компонентов.
// Рекомендуется создавать отдельный файл в папке components и подключать все там

// Определение операционной системы на мобильных
//import { mobileCheck } from "./functions/mobile-check";
//console.log(mobileCheck());

// Определение ширины экрана
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// //import { btnUp } from './components/arrowUp';
// if (isDesktop()) {
//   console.log('desktop');
//   // btnUp.addBtn();
// } else if (isTablet()) {
//   console.log('tablet');
//   // btnUp.addBtn();
// } else console.log('mobile');

// Троттлинг функции (для ресайза, ввода в инпут, скролла и т.д.)
// import { throttle } from './functions/throttle';
// let yourFunc = () => { console.log('throttle') };
// let func = throttle(yourFunc);
// window.addEventListener('resize', func);

// Фикс фулскрин-блоков
// import './functions/fix-fullheight';

// Реализация бургер-меню


// Реализация остановки скролла (не забудьте вызвать функцию)
// import { disableScroll } from './functions/disable-scroll';

// Реализация включения скролла (не забудьте вызвать функцию)
// import { enableScroll } from './functions/enable-scroll';

// Реализация модального окна
//import GraphModal from 'graph-modal';
// const modal = new GraphModal();

// Реализация табов
// import GraphTabs from 'graph-tabs';
// const tabs = new GraphTabs('tab');

// Получение высоты шапки сайта (не забудьте вызвать функцию)
// import { getHeaderHeight } from './functions/header-height';

// Подключение плагина кастом-скролла
// import 'simplebar';

// Подключение плагина для позиционирования тултипов
// import { createPopper, right} from '@popperjs/core';
// createPopper(el, tooltip, {
//   placement: 'right'
// });

// Подключение свайпера
//  import Swiper, { Navigation, Pagination } from 'swiper';
//  Swiper.use([Navigation, Pagination]);
//  const swiper = new Swiper(el, {
//    slidesPerView: 'auto',
//  });

// Подключение анимаций по скроллу
// import AOS from 'aos';
// AOS.init();

// Подключение параллакса блоков при скролле
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');

// Подключение плавной прокрутки к якорям
// import SmoothScroll from "smooth-scroll";
// const scroll = new SmoothScroll('a[href*="#"]');

// Подключение событий свайпа на мобильных
// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//   console.log(e.target);
//   console.log(e.detail);
//   console.log(e.detail.dir);
// });

// import { validateForms } from "./functions/validate-forms";
// const rules1 = [
//   {
//     ruleSelector: ".input-name",
//     name: true,
//     telError: "Введите корректное имя",
//     rules: [
//       {
//         rule: "minLength",
//         value: 3,
//         errorMessage: "Введите 3 и более символов!",
//       },
//       {
//         rule: "maxLength",
//         value: 30,
//         errorMessage: "Запрещено вводить более 15 символов!",
//       },
//       {
//         rule: "required",
//         value: true,
//         errorMessage: "Введите имя!",
//       },
//     ],
//   },
//   {
//     ruleSelector: ".input-ratio",
//     telError: "Введите корректный телефон",
//     rules: [
//       {
//         rule: "required",
//         value: true,
//         errorMessage: "Обязательное поле.",
//       },
//     ],
//   },
//   {
//     ruleSelector: ".input-tel",
//     tel: true,
//     telError: "Введите корректный телефон",
//     rules: [
//       {
//         rule: "required",
//         value: true,
//         errorMessage: "Ошибка, телефон не введен.",
//       },
//     ],
//   },
// ];
// const rules2 = [
//   {
//     ruleSelector: ".input-name",
//     name: true,
//     telError: "Введите корректное имя",
//     rules: [
//       {
//         rule: "minLength",
//         value: 3,
//         errorMessage: "Введите 3 и более символов!",
//       },
//       {
//         rule: "maxLength",
//         value: 30,
//         errorMessage: "Запрещено вводить более 15 символов!",
//       },
//       {
//         rule: "required",
//         value: true,
//         errorMessage: "Введите имя!",
//       },
//     ],
//   },
//   {
//     ruleSelector: ".input-ratio",
//     telError: "Введите корректный телефон",
//     rules: [
//       {
//         rule: "required",
//         value: true,
//         errorMessage: "Обязательное поле.",
//       },
//     ],
//   },
//   {
//     ruleSelector: ".input-tel",
//     tel: true,
//     telError: "Введите корректный телефон",
//     rules: [
//       {
//         rule: "required",
//         value: true,
//         errorMessage: "Ошибка, телефон не введен.",
//       },
//     ],
//   },
//   {
//     ruleSelector: ".input-mail",
//     email: true,
//     telError: "Введите корректный email",
//     rules: [
//       {
//         rule: "email",
//         errorMessage: "Email не верный формат!",
//       },
//       {
//         rule: "required",
//         value: true,
//         errorMessage: "Ошибка, email не введен.",
//       },
//     ],
//   },
// ];
// const afterForm = () => {
//   console.log("Произошла отправка, тут можно писать любые действия");
// };
// validateForms(".form", rules1, afterForm);
// validateForms(".form-main", rules2, afterForm);

/***/ }),

/***/ "./src/js/_vendor.js":
/*!***************************!*\
  !*** ./src/js/_vendor.js ***!
  \***************************/
/***/ (() => {

// import "./vendor/focus-visible.js";
// import "./vendor/dynamic_adapt.js";

/***/ }),

/***/ "./src/js/components/date.js":
/*!***********************************!*\
  !*** ./src/js/components/date.js ***!
  \***********************************/
/***/ (() => {

document.getElementById("year").innerHTML = new Date().getFullYear();

/***/ }),

/***/ "./src/js/components/map.js":
/*!**********************************!*\
  !*** ./src/js/components/map.js ***!
  \**********************************/
/***/ (() => {

// координаты центра на карте
let center = [53.518004, 49.275404];
//Функция создания карты сайта и затем вставки ее в блок
function init() {
  let map = new ymaps.Map('map', {
    center: center,
    zoom: 16
  });
  let placemark = new ymaps.Placemark(center, {}, {
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: 'default#image',
    // Своё изображение иконки метки.
    iconImageHref: 'https://cdn-icons-png.flaticon.com/512/3944/3944427.png',
    // Размеры метки.
    iconImageSize: [40, 40],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    iconImageOffset: [-19, -44]
  });
  map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил
  map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

  map.geoObjects.add(placemark); // помещаем флажок на карту

  // Получаем первый экземпляр коллекции слоев, потом первый слой коллекции
  var layer = map.layers.get(0).get(0);

  // Решение по callback-у для определения полной загрузки карты
  waitForTilesLoad(layer).then(function () {
    // Скрываем индикатор загрузки после полной загрузки карты
    spinner.classList.remove('is-active');
  });
}

// Функция для определения полной загрузки карты (на самом деле проверяется загрузка тайлов)
function waitForTilesLoad(layer) {
  return new ymaps.vow.Promise(function (resolve, reject) {
    let tc = getTileContainer(layer),
      readyAll = true;
    tc.tiles.each(function (tile, number) {
      if (!tile.isReady()) {
        readyAll = false;
      }
    });
    if (readyAll) {
      resolve();
    } else {
      tc.events.once("ready", function () {
        resolve();
      });
    }
  });
}
function getTileContainer(layer) {
  for (var k in layer) {
    if (layer.hasOwnProperty(k)) {
      if (layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer || layer[k] instanceof ymaps.layer.tileContainer.DomContainer) {
        return layer[k];
      }
    }
  }
  return null;
}
// Функция загрузки API Яндекс.Карт по требованию (в нашем случае при наведении)
function loadScript(url, callback) {
  let script = document.createElement("script");
  if (script.readyState) {
    // IE
    script.onreadystatechange = function () {
      if (script.readyState == "loaded" || script.readyState == "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    // Другие браузеры
    script.onload = function () {
      callback();
    };
  }
  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
}
//Переменная для включения/отключения индикатора загрузки
let spinner = document?.querySelector('.loader');
console.log(spinner);
let map_container = document.getElementById('map');

// map_container.addEventListener('click', start_lazy_map);
map_container.addEventListener('mouseenter', start_lazy_map);
map_container.addEventListener('touchstart', start_lazy_map);
map_container.addEventListener('touchmove', start_lazy_map);

//Переменная для определения была ли хоть раз загружена Яндекс.Карта (чтобы избежать повторной загрузки при наведении)
let check_if_load = false;
// Основная функция, которая проверяет когда мы навели,кликнули  на блок
function start_lazy_map() {
  if (!check_if_load) {
    // проверяем первый ли раз загружается Яндекс.Карта, если да, то загружаем
    // Чтобы не было повторной загрузки карты, мы изменяем значение переменной
    check_if_load = true;

    // Показываем индикатор загрузки до тех пор, пока карта не загрузится
    // spinner.addClass('is-active');
    spinner.classList.add('is-active');

    // Загружаем API Яндекс.Карт
    loadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;loadByRequire=1", function () {
      // Как только API Яндекс.Карт загрузились, сразу формируем карту и помещаем в блок с идентификатором map
      ymaps.load(init);
    });
    console.log('YMAP LOADED');
  }
}

// ymaps.ready(init);

/***/ }),

/***/ "./src/js/functions/burger.js":
/*!************************************!*\
  !*** ./src/js/functions/burger.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_disable_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/disable-scroll */ "./src/js/functions/disable-scroll.js");
/* harmony import */ var _functions_enable_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/enable-scroll */ "./src/js/functions/enable-scroll.js");


(function () {
  const burger = document?.querySelector("[data-burger]");
  const menu = document?.querySelector("[data-menu]");
  const menuItems = document?.querySelectorAll("[data-menu-item]");
  const overlay = document?.querySelector("[data-menu-overlay]");
  burger?.addEventListener("click", e => {
    burger?.classList.toggle("burger--active");
    menu?.classList.toggle("menu--active");
    if (menu?.classList.contains("menu--active")) {
      burger?.setAttribute("aria-expanded", "true");
      burger?.setAttribute("aria-label", "Закрыть меню");
      (0,_functions_disable_scroll__WEBPACK_IMPORTED_MODULE_0__.disableScroll)();
    } else {
      burger?.setAttribute("aria-expanded", "false");
      burger?.setAttribute("aria-label", "Открыть меню");
      (0,_functions_enable_scroll__WEBPACK_IMPORTED_MODULE_1__.enableScroll)();
    }
  });
  overlay?.addEventListener("click", () => {
    burger?.setAttribute("aria-expanded", "false");
    burger?.setAttribute("aria-label", "Открыть меню");
    burger.classList.remove("burger--active");
    menu.classList.remove("menu--active");
    (0,_functions_enable_scroll__WEBPACK_IMPORTED_MODULE_1__.enableScroll)();
  });
  menuItems?.forEach(el => {
    el.addEventListener("click", () => {
      burger?.setAttribute("aria-expanded", "false");
      burger?.setAttribute("aria-label", "Открыть меню");
      burger.classList.remove("burger--active");
      menu.classList.remove("menu--active");
      (0,_functions_enable_scroll__WEBPACK_IMPORTED_MODULE_1__.enableScroll)();
    });
  });
})();

/***/ }),

/***/ "./src/js/functions/disable-scroll.js":
/*!********************************************!*\
  !*** ./src/js/functions/disable-scroll.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "disableScroll": () => (/* binding */ disableScroll)
/* harmony export */ });
const disableScroll = () => {
  const fixBlocks = document?.querySelectorAll('.fixed-block');
  const pagePosition = window.scrollY;
  const paddingOffset = `${window.innerWidth - document.body.offsetWidth}px`;
  document.documentElement.style.scrollBehavior = 'none';
  fixBlocks.forEach(el => {
    el.style.paddingRight = paddingOffset;
  });
  document.body.style.paddingRight = paddingOffset;
  document.body.classList.add('dis-scroll');
  document.body.dataset.position = pagePosition;
  document.body.style.top = `-${pagePosition}px`;
};

/***/ }),

/***/ "./src/js/functions/enable-scroll.js":
/*!*******************************************!*\
  !*** ./src/js/functions/enable-scroll.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "enableScroll": () => (/* binding */ enableScroll)
/* harmony export */ });
const enableScroll = () => {
  const fixBlocks = document?.querySelectorAll('.fixed-block');
  const pagePosition = parseInt(document.body.dataset.position, 10);
  fixBlocks.forEach(el => {
    el.style.paddingRight = '0px';
  });
  document.body.style.paddingRight = '0px';
  document.body.style.top = 'auto';
  document.body.classList.remove('dis-scroll');
  window.scroll({
    top: pagePosition,
    left: 0
  });
  document.body.removeAttribute('data-position');
  document.documentElement.style.scrollBehavior = 'smooth';
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_vendor */ "./src/js/_vendor.js");
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_functions */ "./src/js/_functions.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_components */ "./src/js/_components.js");



})();

/******/ })()
;
//# sourceMappingURL=main.js.map