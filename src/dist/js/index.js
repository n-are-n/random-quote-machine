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

/***/ "./src/assets/js/API.js":
/*!******************************!*\
  !*** ./src/assets/js/API.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction GET () {\r\n  const _URL = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'\r\n  return fetch(_URL).then(Response => Response.json()).catch(Error => console.log(Error))\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GET);\n\n\n//# sourceURL=webpack://random-quote-machine/./src/assets/js/API.js?");

/***/ }),

/***/ "./src/assets/js/index.js":
/*!********************************!*\
  !*** ./src/assets/js/index.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _API_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./API.js */ \"./src/assets/js/API.js\");\n\r\nlet data\r\nconst author = document.getElementById('author')\r\nconst quote = document.getElementById('quote')\r\nconst tweet = document.getElementById('tweet-quote')\r\nconst tumblr = document.getElementById('tumblr-quote')\r\nconst tweetURL = 'https://www.twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=\"'\r\nconst tumblrURL = 'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption='\r\nconst color = ['red', 'blue', 'green', 'yellow', 'pink']\r\nconst generateRandomNumber = (num) => Math.floor(Math.random() * num)\r\nconst applyAnimation = (...elements) => elements.forEach(element => element.classList.toggle('animate'))\r\nfunction updateElementContent (elements, contents) {\r\n  elements.forEach((element, index) => {\r\n    element.innerText = contents[index]\r\n  })\r\n}\r\nfunction getData () {\r\n  try {\r\n    (0,_API_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then(Response => {\r\n      data = Response\r\n      applyAnimation(quote, author)\r\n      updateElementContent([author, quote], ['- '.concat(data.quotes[0].author), '\" '.concat(data.quotes[0].quote)])\r\n      tweet.setAttribute('href', tweetURL.concat(data.quotes[0].quote).concat('\" ').concat(data.quotes[0].author))\r\n      tumblr.setAttribute('href', tumblrURL.concat(data.quotes[0].author.concat('&content=').concat(data.quotes[0].quote.concat('&canonicalUrl=https://www.tumblr.com/buttons&shareSource=tumblr_share_button'))))\r\n      document.getElementsByTagName('body')[0].style.backgroundColor = document.getElementById('new-quote').style.backgroundColor = tweet.style.backgroundColor = tumblr.style.backgroundColor = author.style.color = quote.style.color = color[0]\r\n    })\r\n  } catch (error) {\r\n    console.log(error)\r\n  }\r\n}\r\n\r\nfunction getQuote () {\r\n  let randomQuote = generateRandomNumber(101)\r\n  let randomColor = generateRandomNumber(5)\r\n  try {\r\n    applyAnimation(quote, author)\r\n    quote.offsetWidth\r\n    author.offsetWidth\r\n    applyAnimation(quote, author)\r\n    updateElementContent([author, quote], ['- '.concat(data.quotes[randomQuote].author), '\" '.concat(data.quotes[randomQuote].quote)])\r\n    tweet.href = tweetURL.concat(data.quotes[randomQuote].quote).concat(data.quotes[randomQuote].author)\r\n    tumblr.href = tumblrURL.concat(data.quotes[randomQuote].author.concat('&content=').concat(data.quotes[randomQuote].quote.concat('&canonicalUrl=https://www.tumblr.com/buttons&shareSource=tumblr_share_button')))\r\n    document.getElementsByTagName('body')[0].style.backgroundColor = document.getElementById('new-quote').style.backgroundColor = tweet.style.backgroundColor = tumblr.style.backgroundColor = author.style.color = quote.style.color = color[randomColor]\r\n  } catch (error) {\r\n    console.log(error)\r\n  } finally {\r\n    randomQuote = undefined\r\n    randomColor = undefined\r\n  }\r\n}\r\n\r\nwindow.addEventListener('DOMContentLoaded', getData)\r\ndocument.getElementsByTagName('button')[0].addEventListener('click', getQuote)\r\n\n\n//# sourceURL=webpack://random-quote-machine/./src/assets/js/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/assets/js/index.js");
/******/ 	
/******/ })()
;