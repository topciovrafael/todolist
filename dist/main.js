/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body{\n    background-color: rgb(10, 10, 44);\n    display: flex;\n    margin: 0;\n    flex: 1;\n    align-items: center;\n    justify-content: space-evenly;\n    height: 100vh;\n    flex-direction: column;\n}\n\n#chenar{\n    width: 60vh;\n    height: 65vh;\n    border-radius: 10%;\n    display: flex;\n    margin: 0;\n    align-items: center;\n    justify-content: center;\n    background-image: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);\n    animation: color 3s ease-in-out infinite;\n    background-size: 200% 200%;\n    overflow: hidden;\n}\n\n@keyframes color{\n    0%{\n        background-position: 0 50%;\n    }\n    50%{\n        background-position: 100% 50%;\n    }\n    100%{\n        background-position: 0 50%;\n    }\n}\n\n#aldoileachenar{\n    width: 97%;\n    height: 97%;\n    border-radius: 9%;\n    background-color: whitesmoke;\n    align-items: start;\n    display: flex;\n    flex-direction: column-reverse;\n    justify-content: space-between;\n    overflow:auto;\n\n    scrollbar-width: thin;\n\n}\n\n#titlu{\n    color: white;\n    font-size: 60px;\n    font-family: \"Indie Flower\", cursive;\n  font-weight: 400;\n  font-style: normal;\n  margin: -4vh;\n\n}\n\n#addbtn{\n    height: 5vh;\n    width: 5vh;\n    background-color: rgb(187, 64, 89);\n    border-radius: 50%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 40px;\n    font-family: \"Indie Flower\", cursive;\n    font-weight: 400;\n    font-style: normal;\n    user-select: none;\n    margin: 2vh;\n\n    cursor: pointer;\n}\n\n#addbtn:hover{\n    background-color: rgb(196, 32, 64);\n    transition: 0.3s;\n}\n\n#addbtn:not(:hover){\n    background-color: rgb(187, 64, 89);\n    transition: 0.3s;\n}\n\ntextarea{\n    resize: both;\n}\n\n\n#popup,#areyousure-popup,#edit-task-popup{\n    background-color: white;\n    height: 38%;\n    width: 70vh;\n    position: fixed;\n    border: 1px solid black;\n    border-radius: 10px;\n    scale: 0;\n    transition: 200ms;\n    pointer-events: none;\n}\n\n#butoane-edit{\n    display: flex;\n    width: 30%;\n    justify-content: space-around;\n}\n\n#area-before-date{\n    margin-right: 20%;\n}\n\n#area-before-priority{\n    margin-right: 24%;\n}\n\ni{\n    width: 10px;\n}\n\ni{\n    cursor: pointer;\n    color: rgb(48, 68, 255);\n\n    margin-right: -1vh;\n}\n\n#edit-task-popup{\n    height: 50%;\n    width: 80vh;\n    scale: 0;\n    font-size: 24px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n    pointer-events: all;\n    text-align: right;\n}\n\n.area-before{\n    display: inline-block;\n  width: 140px;\n  text-align: right;\n}\n\n.slot-edit{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: right;\n}\n\n#areyousure-popup{\n    height: 20%;\n    width: 50vh;\n    scale: 0;\n    font-family: \"Roboto Slab\", serif;\n    font-optical-sizing: auto;\n    font-weight: 400;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n\n#dasaunu{\n    width: 40%;\n    display: flex;\n    justify-content: space-between;\n}\n\n#popupheader{\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 2vh;\n    border-bottom: 2px solid black;\n}\n\n#popupprompttext,label{\n    font-family: \"Roboto Slab\", serif;\n  font-weight: 400;\n  font-style: normal;\n  font-size: 1.5rem;\n  font-weight: 600;\n}\n\n#btnics, .stergere{\n    font-size: 2rem;\n    cursor: pointer;\n}\n\nform{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\n#loc-sloturi{\n    width: 100%;\n}\n\n#da,#nu{\n    max-width: 40%;\n    display: flex;\n  align-items: center;\n  justify-content: center;\n\n}\n\ninput{\n    border: 0;\n    border-bottom: 2px solid gray;\n    outline: 0;\n    color: white;\n    background: transparent;\n    color: black;\n    font-family: 'Gloria Hallelujah', cursive;\n    font-family: 'Quicksand', sans-serif;\n    font-size: 16px;\n}\n\nbutton {\n    font-family: inherit;\n    border: none;\n    outline: 1px dotted rgb(37, 37, 37);\n    outline-offset: -4px;\n    background: hsl(0deg 0% 75%);\n    box-shadow: inset -1px -1px #292929, inset 1px 1px #fff, inset -2px -2px rgb(158, 158, 158), inset 2px 2px #ffffff;\n    font-size: 14px;\n    text-transform: uppercase;\n    letter-spacing: 2px;\n    padding: 5px 30px;\n    cursor: pointer;\n    margin-top: 2vh;\n  }\n  \n  button:active {\n    box-shadow: inset -1px -1px #fff, inset 1px 1px #292929, inset -2px -2px #ffffff, inset 2px 2px rgb(158, 158, 158);\n}\n\n#ceata{\n    top: 0;\n    bottom: 0;\n    left: 0;\n    position: fixed;\n    right: 0;\n    opacity: 0;\n    transition: 200ms;\n    background-color: rgba(0, 0, 0, 0.5);\n    pointer-events: none;\n}\n\n.slot{\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    height: 6vh;  \n    width: 100%;\n    box-shadow: 0 4px 2px -2px gray;\n}\n\n#footer-chenar{\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n}\n\n#sort-priority{\n    height: 40%;\n    margin-bottom: 3%;\n}\n\n.element-slot{\n    font-family: \"Roboto Slab\", serif;\n    font-optical-sizing: auto;\n    font-weight: 400;\n    font-style: normal;\n    min-width: 18%;\n    max-width: 18%;\n    text-overflow: ellipsis;\n    width: fit-content;\n    overflow: hidden;\n    text-align: center;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todolist/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todolist/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todolist/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todolist/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/addTask.js":
/*!************************!*\
  !*** ./src/addTask.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _inchisPopUp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inchisPopUp */ \"./src/inchisPopUp.js\");\n/* harmony import */ var _surePopup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./surePopup */ \"./src/surePopup.js\");\n/* harmony import */ var _sureInchis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sureInchis */ \"./src/sureInchis.js\");\n/* harmony import */ var _inchisEdit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inchisEdit */ \"./src/inchisEdit.js\");\n/* harmony import */ var _editPopup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editPopup */ \"./src/editPopup.js\");\n\n\n\n\n\n\nvar storedTasks=[];\nvar listaTasks=[];\n\nstoredTasks = JSON.parse(localStorage.getItem(\"tasks\"));\nlistaTasks = storedTasks;\n\n\nstoredTasks.forEach(task => {\n    displayTask(task);\n});\n\nclass task {\n    constructor(title, description, date, priority) {\n        this.title = title;\n        this.description = description;\n        this.date = date;\n        this.priority = priority;\n    }\n}\n\n\nfunction adaugare() {\n    \n\n    const addButton = document.getElementById(\"pebuneadd\");\n\n    let titlu = document.getElementById(\"inputitle\").value;\n    let description = document.getElementById(\"inputdesc\").value;\n    let date = document.getElementById(\"inputdate\").value;\n    let priority = document.getElementById(\"inputpriority\").value;\n    let tasknou;\n    if (validare()) {\n        tasknou = new task(titlu, description, date, priority);\n        listaTasks.push(tasknou);\n        (0,_inchisPopUp__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    } else {\n        console.log(\"All fields must be filled out.\");\n    }\n    displayTask(tasknou);\n    localStorage.setItem(\"tasks\", JSON.stringify(listaTasks));\n    console.log(listaTasks);\n\n    \n}\n\nlet nr=0;\n\nconst butonSort=document.getElementById(\"sort-priority\");\nfunction sortare(tura){\n    if(tura%2==1){\n        listaTasks.sort((a, b) => a.priority - b.priority)\n    }\n    else{\n        listaTasks.sort((a, b) => b.priority - a.priority)\n    }\n}\n\n\nbutonSort.addEventListener(\"click\",function(){\n    sortare(nr);\n    nr++;\n    const locSloturi=document.getElementById(\"loc-sloturi\");\n    locSloturi.innerHTML='';\n    listaTasks.forEach(task => {\n        displayTask(task);\n    });\n}\n);\n\nconst pencils=document.querySelectorAll('i');\n\ndocument.getElementById(\"inchidere-task\").addEventListener(\"click\", function(){\n    document.getElementById(\"area-title\").innerText = '';\n    document.getElementById(\"area-description\").innerText = '';\n    document.getElementById(\"area-date\").innerText = '';\n    document.getElementById('pselect').value = '1';\n    (0,_inchisEdit__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n});\n\npencils.forEach(pencil => {\n    var children=pencil.parentElement.children;\n    var selectElement = document.getElementById('pselect');\n    \n    pencil.addEventListener(\"click\", function(){\n            document.getElementById(\"area-title\").innerText = '';\n            document.getElementById(\"area-description\").innerText = '';\n            document.getElementById(\"area-date\").innerText = '';\n            document.getElementById('pselect').value = '1'\n                ;(0,_editPopup__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n                \n                document.getElementById(\"area-title\").value=children[1].textContent.split(\": \").pop();\n                document.getElementById(\"area-description\").value=children[2].textContent.split(\": \").pop();\n                document.getElementById(\"area-date\").value=children[3].textContent.split(\": \").pop();\n                console.log(children[4].textContent.split(\": \").pop());\n                if(children[4].textContent.split(\": \").pop()=='Low'){\n                    selectElement.value='1';\n                }\n                if(children[4].textContent.split(\": \").pop()=='Medium'){\n                    selectElement.value='2';\n                }\n                if(children[4].textContent.split(\": \").pop()=='High'){\n                    selectElement.value='3';\n                }\n                const locSloturi=document.getElementById(\"loc-sloturi\");\n                const index = Array.from(locSloturi.children).indexOf(pencil.parentElement);\n\n\n                \n\n                document.getElementById(\"schimbare-task\").onclick= function(){\n                    console.log(pencil.parentElement);\n                    children[1].textContent=\"Title: \"+document.getElementById(\"area-title\").value;\n                    children[2].textContent=\"Description: \"+document.getElementById(\"area-description\").value;\n                    children[3].textContent=\"Date: \"+document.getElementById(\"area-date\").value;\n                    if(selectElement.value=='1'){children[4].textContent=\"Priority: Low\";}\n                    if(selectElement.value=='2'){children[4].textContent=\"Priority: Medium\";}\n                    if(selectElement.value=='3'){children[4].textContent=\"Priority: High\";}\n\n\n                let editedTask = new task(document.getElementById(\"area-title\").value, document.getElementById(\"area-description\").value, document.getElementById(\"area-date\").value, parseInt(selectElement.value));\n\n                listaTasks.splice(index,1,editedTask);\n                console.log(listaTasks);\n                    localStorage.setItem(\"tasks\", JSON.stringify(listaTasks));\n                    \n                    (0,_inchisEdit__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();    \n        };\n    });\n});\n\n\n\nfunction displayTask(task){\n    const locAfisare=document.getElementById(\"aldoileachenar\");\n    const locSloturi=document.getElementById(\"loc-sloturi\");\n    const slot=document.createElement(\"div\");\n    //slot.setAttribute(\"id\", `numarul-${i}`);\n    slot.classList.add(\"slot\");\n    const slotTitlu=document.createElement(\"div\");\n    const slotDesc=document.createElement(\"div\");\n    const slotDate=document.createElement(\"div\");\n    const slotPriority=document.createElement(\"div\");\n    const butonstergere=document.createElement(\"div\");\n    butonstergere.innerHTML ='&times;'\n    butonstergere.classList.add(\"stergere\");\n    const butonDa=document.getElementById(\"da\");\n    const butonNu=document.getElementById(\"nu\");\n\n    butonstergere.addEventListener(\"click\", function(){\n        (0,_surePopup__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        butonDa.addEventListener(\"click\", function(){\n            const index = Array.from(locSloturi.children).indexOf(butonstergere.parentElement);\n            if (index > -1){\n                butonstergere.parentElement.remove();\n            listaTasks.splice(index,1);\n            localStorage.setItem(\"tasks\", JSON.stringify(listaTasks));\n            }\n            \n            \n          });\n          butonNu.addEventListener(\"click\", _sureInchis__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n          butonDa.addEventListener(\"click\", _sureInchis__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n          \n    });\n\n    let i=document.createElement(\"i\");\n    i.classList.add('fa', 'fa-pencil');\n    i.addEventListener(\"click\", function(){\n        class task {\n            constructor(title, description, date, priority) {\n                this.title = title;\n                this.description = description;\n                this.date = date;\n                this.priority = priority;\n            }\n        }\n        \n        var copii=i.parentElement.children;\n        var selectElement = document.getElementById('pselect');\n        document.getElementById(\"area-title\").innerText = '';\n        document.getElementById(\"area-description\").innerText = '';\n        document.getElementById(\"area-date\").innerText = '';\n        document.getElementById('pselect').value = '1'\n            ;(0,_editPopup__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n            \n            document.getElementById(\"area-title\").value=copii[1].textContent.split(\": \").pop();\n            document.getElementById(\"area-description\").value=copii[2].textContent.split(\": \").pop();\n            document.getElementById(\"area-date\").value=copii[3].textContent.split(\": \").pop();\n            console.log(copii[4].textContent.split(\": \").pop());\n            if(copii[4].textContent.split(\": \").pop()=='Low'){\n                selectElement.value='1';\n            }\n            if(copii[4].textContent.split(\": \").pop()=='Medium'){\n                selectElement.value='2';\n            }\n            if(copii[4].textContent.split(\": \").pop()=='High'){\n                selectElement.value='3';\n            }\n            const locSloturi=document.getElementById(\"loc-sloturi\");\n            const index = Array.from(locSloturi.children).indexOf(i.parentElement);\n\n\n            \n\n            document.getElementById(\"schimbare-task\").onclick= function(){\n                console.log(i.parentElement);\n                copii[1].textContent=\"Title: \"+document.getElementById(\"area-title\").value;\n                copii[2].textContent=\"Description: \"+document.getElementById(\"area-description\").value;\n                copii[3].textContent=\"Date: \"+document.getElementById(\"area-date\").value;\n                if(selectElement.value=='1'){copii[4].textContent=\"Priority: Low\";}\n                if(selectElement.value=='2'){copii[4].textContent=\"Priority: Medium\";}\n                if(selectElement.value=='3'){copii[4].textContent=\"Priority: High\";}\n\n\n            let editedTask = new task(document.getElementById(\"area-title\").value, document.getElementById(\"area-description\").value, document.getElementById(\"area-date\").value, parseInt(selectElement.value));\n            listaTasks.splice(index,1,editedTask);\n            console.log(listaTasks);\n                localStorage.setItem(\"tasks\", JSON.stringify(listaTasks));\n                (0,_inchisEdit__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();    \n    };\n});\n    slotTitlu.innerText=\"Title: \"+task.title;\n    slotDesc.innerText=\"Description: \"+task.description;\n    slotDate.innerText=\"Date: \"+task.date;\n    if(task.priority==1){\n    slotPriority.innerText=\"Priority: Low\";}\n    if(task.priority==2){\n        slotPriority.innerText=\"Priority: Medium\";}\n    if(task.priority==3){\n    slotPriority.innerText=\"Priority: High\";}\n    \n\n    slotTitlu.classList.add(\"element-slot\");\n    slotDesc.classList.add(\"element-slot\");\n    slotDate.classList.add(\"element-slot\");\n    slotPriority.classList.add(\"element-slot\");\n    slot.appendChild(i);\n\n    slot.appendChild(slotTitlu);\n    slot.appendChild(slotDesc);\n    slot.appendChild(slotDate);\n    slot.appendChild(slotPriority);\n    slot.appendChild(butonstergere);\n    locSloturi.appendChild(slot);\n    locAfisare.appendChild(locSloturi);\n    \n}\n\n\n\nfunction validare() {\n    let titlu = document.getElementById(\"inputitle\").value;\n    let description = document.getElementById(\"inputdesc\").value;\n    let date = document.getElementById(\"inputdate\").value;\n    let priority = document.getElementById(\"inputpriority\").value;\n\n    if (titlu === '' || description === '' || date === '' || priority === '') {\n        return false;\n    } else {\n        return true;\n    }\n}\n\nfunction checkInputs() {\n    const addButton = document.getElementById(\"pebuneadd\");\n    if (validare()) {\n        addButton.disabled = false;\n    } else {\n        addButton.disabled = true;\n    }\n}\n\n// Add event listeners to input fields to monitor changes\ndocument.getElementById(\"inputitle\").addEventListener(\"input\", checkInputs);\ndocument.getElementById(\"inputdesc\").addEventListener(\"input\", checkInputs);\ndocument.getElementById(\"inputdate\").addEventListener(\"input\", checkInputs);\ndocument.getElementById(\"inputpriority\").addEventListener(\"input\", checkInputs);\n\n// Initialize the \"Add\" button as disabled\ndocument.getElementById(\"pebuneadd\").disabled = true;\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (adaugare);\n\n\n//# sourceURL=webpack://todolist/./src/addTask.js?");

/***/ }),

/***/ "./src/editPopup.js":
/*!**************************!*\
  !*** ./src/editPopup.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction editPopup(){\n    const ceata=document.getElementById(\"ceata\");\n    const popup=document.getElementById(\"edit-task-popup\");\n    \n\n    ceata.style.opacity=\"1\";\n    popup.style.scale=\"1\";\n    popup.style.pointerEvents=\"initial\";\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editPopup);\n\n\n//# sourceURL=webpack://todolist/./src/editPopup.js?");

/***/ }),

/***/ "./src/inchisEdit.js":
/*!***************************!*\
  !*** ./src/inchisEdit.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction editInchis(){\n    const ceata=document.getElementById(\"ceata\");\n    const popup=document.getElementById(\"edit-task-popup\");\n    ceata.style.opacity=\"0\";\n    popup.style.scale=\"0\";\n    popup.style.pointerEvents=\"none\";\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editInchis);\n\n//# sourceURL=webpack://todolist/./src/inchisEdit.js?");

/***/ }),

/***/ "./src/inchisPopUp.js":
/*!****************************!*\
  !*** ./src/inchisPopUp.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction inchisPopUp(){\n    const ceata=document.getElementById(\"ceata\");\n    const popup=document.getElementById(\"popup\");\n    ceata.style.opacity=\"0\";\n    popup.style.scale=\"0\";\n    popup.style.pointerEvents=\"none\";\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (inchisPopUp);\n\n//# sourceURL=webpack://todolist/./src/inchisPopUp.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup */ \"./src/popup.js\");\n/* harmony import */ var _inchisPopUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inchisPopUp */ \"./src/inchisPopUp.js\");\n/* harmony import */ var _addTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addTask */ \"./src/addTask.js\");\n/* harmony import */ var _sortare__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sortare */ \"./src/sortare.js\");\n/* harmony import */ var _sortare__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sortare__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nconst plus=document.getElementById(\"addbtn\");\nplus.addEventListener('click',_popup__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\nconst inchis=document.getElementById(\"btnics\");\ninchis.addEventListener('click', _inchisPopUp__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\nconst addButton=document.getElementById(\"pebuneadd\");\naddButton.addEventListener(\"click\", function(event){\n    event.preventDefault()\n});\n\naddButton.addEventListener(\"click\", _addTask__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ }),

/***/ "./src/popup.js":
/*!**********************!*\
  !*** ./src/popup.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction deschisPopUp(){\n    const ceata=document.getElementById(\"ceata\");\n    const popup=document.getElementById(\"popup\");\n    \n\n    ceata.style.opacity=\"1\";\n    popup.style.scale=\"1\";\n    popup.style.pointerEvents=\"initial\";\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deschisPopUp);\n\n\n//# sourceURL=webpack://todolist/./src/popup.js?");

/***/ }),

/***/ "./src/sortare.js":
/*!************************!*\
  !*** ./src/sortare.js ***!
  \************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://todolist/./src/sortare.js?");

/***/ }),

/***/ "./src/sureInchis.js":
/*!***************************!*\
  !*** ./src/sureInchis.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction sureInchis(){\n    const ceata=document.getElementById(\"ceata\");\n    const popup=document.getElementById(\"areyousure-popup\");\n    ceata.style.opacity=\"0\";\n    popup.style.scale=\"0\";\n    popup.style.pointerEvents=\"none\";\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sureInchis);\n\n//# sourceURL=webpack://todolist/./src/sureInchis.js?");

/***/ }),

/***/ "./src/surePopup.js":
/*!**************************!*\
  !*** ./src/surePopup.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction surePopup(){\n    const ceata=document.getElementById(\"ceata\");\n    const popup=document.getElementById(\"areyousure-popup\");\n    \n\n    ceata.style.opacity=\"1\";\n    popup.style.scale=\"1\";\n    popup.style.pointerEvents=\"initial\";\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (surePopup);\n\n\n//# sourceURL=webpack://todolist/./src/surePopup.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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