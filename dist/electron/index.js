module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/applyDecoratedDescriptor.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/applyDecoratedDescriptor.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {\n  var desc = {};\n  Object.keys(descriptor).forEach(function (key) {\n    desc[key] = descriptor[key];\n  });\n  desc.enumerable = !!desc.enumerable;\n  desc.configurable = !!desc.configurable;\n\n  if ('value' in desc || desc.initializer) {\n    desc.writable = true;\n  }\n\n  desc = decorators.slice().reverse().reduce(function (desc, decorator) {\n    return decorator(target, property, desc) || desc;\n  }, desc);\n\n  if (context && desc.initializer !== void 0) {\n    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;\n    desc.initializer = undefined;\n  }\n\n  if (desc.initializer === void 0) {\n    Object.defineProperty(target, property, desc);\n    desc = null;\n  }\n\n  return desc;\n}\n\nmodule.exports = _applyDecoratedDescriptor;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/applyDecoratedDescriptor.js?");

/***/ }),

/***/ "./src/main/index.js":
/*!***************************!*\
  !*** ./src/main/index.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/applyDecoratedDescriptor */ \"./node_modules/@babel/runtime/helpers/applyDecoratedDescriptor.js\");\n/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar _class;\n\nlet electron = __webpack_require__(/*! electron */ \"electron\");\n\nlet {\n  app,\n  BrowserWindow,\n  dialog\n} = electron;\n\nlet path = __webpack_require__(/*! path */ \"path\");\n\nlet Atest = (_class = class Atest {\n  constructor() {\n    this.x = 100;\n  }\n\n  showX() {\n    return this.x;\n  }\n\n}, (_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class.prototype, \"showX\", [dec], Object.getOwnPropertyDescriptor(_class.prototype, \"showX\"), _class.prototype)), _class);\n\nfunction dec(target, name, desp) {\n  console.log({\n    target,\n    name\n  });\n  return desp;\n}\n\nlet ob = new Atest();\nconsole.log(ob.showX());\nconst WINURL =  true ? \"http://localhost:1900/index.html\" : undefined;\nconsole.log(\"development\", __dirname);\nlet mainWindow = null;\n\nfunction createWindow() {\n  mainWindow = new BrowserWindow({\n    width: 1980,\n    height: 1080,\n    useContentSize: true,\n    webPreferences: {\n      webSecurity: false,\n      nodeIntegration: true\n    }\n  });\n  mainWindow.loadURL(WINURL);\n  mainWindow.webContents.on('did-finish-load', () => {\n     true ? mainWindow.webContents.openDevTools() : undefined;\n  });\n  mainWindow.on('closed', () => {\n    mainWindow = null;\n    app.quit();\n  });\n}\n\napp.on('ready', createWindow);\napp.on('window-all-closed', () => {\n  if (process.platform !== 'darwin') {\n    app.quit();\n  }\n});\napp.on('activate', () => {\n  if (mainWindow === null) {\n    createWindow();\n  }\n});\napp.on('window-all-closed', () => {\n  if (process.platform !== 'darwin') {\n    app.quit();\n  }\n});\n/* WEBPACK VAR INJECTION */}.call(this, \"src/main\"))\n\n//# sourceURL=webpack:///./src/main/index.js?");

/***/ }),

/***/ 0:
/*!*********************************!*\
  !*** multi ./src/main/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /Users/admin/Documents/test/webpack/electron_vue_react_git/src/main/index.js */\"./src/main/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/main/index.js?");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"electron\");\n\n//# sourceURL=webpack:///external_%22electron%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ })

/******/ });