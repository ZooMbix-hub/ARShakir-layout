/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("\r\nconst slider = __webpack_require__(/*! ./module/slider-company.js */ \"./src/js/module/slider-company.js\");\r\n(function () {\r\n    return slider;\r\n})();\r\n\r\nconsole.log(\"aboba\");\n\n//# sourceURL=webpack://test-2/./src/js/main.js?");

/***/ }),

/***/ "./src/js/module/slider-company.js":
/*!*****************************************!*\
  !*** ./src/js/module/slider-company.js ***!
  \*****************************************/
/***/ (function(module) {

eval("\r\nfunction SliderAdd() {\r\n    if (document.body.clientWidth < 1025){\r\n        //slider\r\n        const imagesSliders = document.querySelectorAll('.slider .slider-line .logo-company svg');\r\n        const sliderLine = document.querySelector('.slider .slider-line');\r\n        let count = 0;\r\n        let width;\r\n    \r\n        function init() {\r\n            width = document.querySelector('.slider').offsetWidth;\r\n            sliderLine.style.width = width * imagesSliders.length + 'px';\r\n            imagesSliders.forEach(item => {\r\n                item.style.width = width + 'px' ;\r\n                item.style.height = 'auto';\r\n            });\r\n            rollSlider();\r\n        }\r\n    \r\n        init();\r\n        window.addEventListener('resize', init);\r\n    \r\n        document.querySelector('.slider-next').addEventListener('click', function () {\r\n            count++;\r\n            if (count >= imagesSliders.length) {\r\n                count = 0;\r\n            }\r\n            rollSlider();\r\n        });\r\n    \r\n        document.querySelector('.slider-prev').addEventListener('click', function () {\r\n            count--;\r\n            if (count < 0) {\r\n                count = imagesSliders.length - 1;\r\n            }\r\n            rollSlider();\r\n        });\r\n    \r\n        function rollSlider() {\r\n            sliderLine.style.transform = 'translate(-' + count * width + 'px)';\r\n        }\r\n    \r\n    \r\n        //swipe slider\r\n        sliderLine.addEventListener('touchstart', handleTouchStart, false);\r\n        sliderLine.addEventListener('touchmove', handleTouchMove, false);\r\n    \r\n        let x1 = null;\r\n        let y1 = null;\r\n    \r\n        function handleTouchStart (event) {\r\n            const firstTouch = event.touches[0];\r\n            x1 = firstTouch.clientX;\r\n            y1 = firstTouch.clientY;\r\n        }\r\n    \r\n        function handleTouchMove (event) {\r\n            if (!x1 || !y1 ) {\r\n                return false;\r\n            }\r\n    \r\n            let x2 = event.touches[0].clientX;\r\n            let y2 = event.touches[0].clientY;\r\n    \r\n            let xDiff = x2 - x1;\r\n            let yDiff = y2 - y1;\r\n    \r\n            if (Math.abs(xDiff) > Math.abs(yDiff)) {\r\n                if (xDiff > 0) {\r\n                    count--;\r\n                    if (count < 0) {\r\n                        count = imagesSliders.length - 1;\r\n                    }\r\n                    rollSlider();\r\n                }\r\n                else {\r\n                    count++;\r\n                    if (count >= imagesSliders.length) {\r\n                        count = 0;\r\n                    }\r\n                    rollSlider();\r\n                }\r\n            }\r\n            x1 = null;\r\n            y1 = null;\r\n        }\r\n    }\r\n}\r\n\r\nmodule.exports = SliderAdd();\r\n\n\n//# sourceURL=webpack://test-2/./src/js/module/slider-company.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;