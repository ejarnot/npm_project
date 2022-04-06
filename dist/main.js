/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Wishlist.js":
/*!*************************!*\
  !*** ./src/Wishlist.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _car__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car */ \"./src/car.js\");\n\r\n\r\nclass Wishlist{\r\n    constructor(){\r\n        this.cars = []\r\n        this.nextId = 1;\r\n\r\n    }\r\n    add(make, model, year){\r\n        let newCar = new _car__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.nextId, make, model, year);\r\n        this.cars.push(newCar);\r\n\r\n        console.log(this.cars);\r\n\r\n        this.addToDOM(newCar);\r\n    }\r\n\r\n    remove(id){\r\n        this.cars = this.cars.filter((car) => car.id != id)\r\n        this.removeFromDOM(id);\r\n    }\r\n\r\n    removeFromDOM(id){\r\n        let ul = document.querySelector(\"#wishListContainer > ul\");\r\n        let li = document.querySelector(`#car${id}`);\r\n        ul.removeChild(li);\r\n\r\n    }\r\n\r\n    addToDOM(car){\r\n        let ul = document.querySelector(\"#wishListContainer > ul\")\r\n        let li = document.createElement(\"li\");\r\n        li.textContent = car.model; \r\n        li.id = `car${car.id}`;\r\n        li.addEventListener(\"click\", (event) =>{\r\n            car.display();\r\n            let removeBtn = document.querySelector(\"#removeBtn\")\r\n            removeBtn.disabled = false;\r\n            removeBtn.onclick = (event) => {\r\n                this.remove(car.id);\r\n                document.querySelector(\"#car-make\").textContent = \"\"\r\n        document.querySelector(\"#car-model\").textContent = \"\"\r\n        document.querySelector(\"#car-year\").textContent = \"\"\r\n\r\n                removeBtn.disabled = true\r\n            }\r\n        });\r\n        ul.appendChild(li);\r\n\r\n    }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wishlist);\n\n//# sourceURL=webpack://npm_project/./src/Wishlist.js?");

/***/ }),

/***/ "./src/car.js":
/*!********************!*\
  !*** ./src/car.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Car{\r\n    constructor(id, make, model, year){\r\n        this.id = id;\r\n        this.make = make;\r\n        this.model = model;\r\n        this.year = year;\r\n    }\r\n\r\n    display(){\r\n        document.querySelector(\"#car-make\").textContent = this.make;\r\n        document.querySelector(\"#car-model\").textContent = this.model;\r\n        document.querySelector(\"#car-year\").textContent = this.year;\r\n\r\n    }\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Car);\n\n//# sourceURL=webpack://npm_project/./src/car.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Wishlist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Wishlist */ \"./src/Wishlist.js\");\n//Grab the form values when the user submits the form\r\n//make, model, year\r\n//use those values to create a car\r\n//add the car to the wishlist\r\n//update the DOM\r\n\r\n\r\nlet wishList = new _Wishlist__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\n\r\nlet form = document.querySelector(\"#submitForm\");\r\n\r\nform.addEventListener(\"submit\", (event) =>{\r\n    event.preventDefault();\r\n    let make = document.querySelector(\"#makeInput\")\r\n    let model = document.querySelector(\"#modelInput\")\r\n    let year = document.querySelector(\"#yearInput\")\r\n\r\n    wishList.add(make.value, model.value, year.value);\r\n    \r\n    console.log(make.value, model.value, year.value);\r\n\r\n    make.value=\"\";\r\n    model.value=\"\";\r\n    year.value=\"\";\r\n})\n\n//# sourceURL=webpack://npm_project/./src/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;