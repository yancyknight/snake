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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./game/scripts/game.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./framework/LocalStorage.js":
/*!***********************************!*\
  !*** ./framework/LocalStorage.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction get(path) {\n    let settingsString = localStorage.getItem(path);\n    if (settingsString === null) {\n        return {};\n    }\n    else {\n        return JSON.parse(settingsString);\n    }\n}\n\nfunction set(path, {\n    field,\n    value\n} = {}) {\n    let settingsString = localStorage.getItem(path);\n    if (settingsString === null) {\n        var settings = {};\n    }\n    else {\n        var settings = JSON.parse(settingsString);\n    }\n    settings[field] = value;\n    localStorage.setItem(path, JSON.stringify(settings));\n    return settings;\n}\n\nfunction remove(path, setting) {\n    let settingsString = localStorage.getItem(path);\n    if (settingsString === null) {\n        return;\n    }\n    var settings = JSON.parse(settingsString);\n    delete settings[setting];\n    localStorage.setItem(path, JSON.stringify(settings));\n}\n\nfunction removeAll(path) {\n    localStorage.removeItem(path);\n}\n\n\nmodule.exports = {\n    get,\n    set,\n    remove,\n    removeAll\n};\n\n\n//# sourceURL=webpack:///./framework/LocalStorage.js?");

/***/ }),

/***/ "./framework/graphics.js":
/*!*******************************!*\
  !*** ./framework/graphics.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar canvas = document.getElementById('fw-canvas');\nvar context = canvas.getContext('2d');\n\n// Place a 'clear' function on the Canvas prototype, this makes it a part\n// of the canvas, rather than making a function that calls and does it.\nCanvasRenderingContext2D.prototype.clear = function () {\n\tthis.save();\n\tthis.setTransform(1, 0, 0, 1, 0, 0);\n\tthis.clearRect(0, 0, canvas.width, canvas.height);\n\tthis.restore();\n};\n\nfunction clear() {\n\tcontext.clear();\n}\n\n\nfunction drawCircle({\n\tx,\n\ty,\n\tradius,\n\tfill = '#000000',\n\tstroke = '#000000',\n} = {}) {\n\tcontext.save();\n\tcontext.beginPath();\n\n\tcontext.fillStyle = fill;\n\tcontext.strokeStyle = stroke;\n    context.arc(x, y, radius, 0, Math.PI * 2);\n    context.fill();\n\n\tcontext.stroke();\n\tcontext.restore();\n};\n\nfunction drawRectangle({\n\tx = 0,\n\ty = 0,\n\tw = 20,\n\th = 20,\n\tfill = '#000000',\n\tstroke = '#000000',\n} = {}) {\n\tcontext.save();\n\tcontext.beginPath();\n\n\tcontext.strokeStyle = stroke;\n\tcontext.fillStyle = fill;\n\tcontext.strokeRect(x, y, w, h);\n\tcontext.fillRect(x, y, w, h);\n\n\tcontext.closePath();\n\tcontext.restore();\n}\n\nfunction drawText({\n\ttext,\n\tx = 0,\n\ty = 0,\n\tfill = '#000000',\n\tfont = '48px serif',\n} = {}) {\n\tcontext.save();\n\n\tcontext.fillStyle = fill;\n\tcontext.font = font;\n\tcontext.fillText(text, x, y);\n\n\tcontext.restore();\n}\n\nfunction Img(src) {\n\treturn new Promise(function(resolve, reject) {\n\t\tvar img = new Image();\n\t\timg.src = src;\n\t\timg.onload = function() {\n\t\t\tresolve(img);\n\t\t}\n\t});\n}\n\nfunction drawImage({\n\timage,\n\tdx,\n\tdy,\n\tsx = 0,\n\tsy = 0,\n\tsWidth,\n\tsHeight,\n\tdWidth,\n\tdHeight,\n\trotation = 0,\n} = {}) {\n\tvar self = this;\n\timage.then(function(img){\n\t\tif (typeof sWidth === 'undefined') sWidth = img.naturalWidth;\n\t\tif (typeof dWidth === 'undefined') dWidth = img.naturalWidth;\n\t\tif (typeof sHeight === 'undefined') sHeight = img.naturalHeight;\n\t\tif (typeof dHeight === 'undefined') dHeight = img.naturalHeight;\n\n\t\tvar center = {\n\t\t\tx: dx + (dWidth * .5),\n\t\t\ty: dy + (dHeight * .5),\n\t\t}\n\n\t\tcontext.save();\n\t\tcontext.translate(center.x, center.y);\n\t\tcontext.rotate(rotation * (Math.PI / 180));\n\t\tcontext.translate(-center.x, -center.y);\n\n\n\t\tcontext.drawImage(img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);\n\t\n\t\tcontext.restore();\n\t})\n}\n\nmodule.exports = {\n\tclear,\n\tcanvas,\n\tcontext,\n\tdrawRectangle,\n\tImg,\n\tdrawImage,\n\tdrawText,\n\tdrawCircle,\n};\n\n\n\n//# sourceURL=webpack:///./framework/graphics.js?");

/***/ }),

/***/ "./framework/input.js":
/*!****************************!*\
  !*** ./framework/input.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function Mouse() {\n\tlet that = {\n\t\tmouseDown: [],\n\t\tmouseUp: [],\n\t\tmouseMove: [],\n\t\thandlersDown: [],\n\t\thandlersUp: [],\n\t\thandlersMove: []\n\t};\n\t\n\tfunction mouseDown(e) {\n\t\tthat.mouseDown.push(e);\n\t}\n\t\n\tfunction mouseUp(e) {\n\t\tthat.mouseUp.push(e);\n\t}\n\t\n\tfunction mouseMove(e) {\n\t\tthat.mouseMove.push(e);\n\t}\n\t\n\tthat.update = function(elapsedTime) {\n\t\tlet event;\n\t\tlet handler;\n\n\t\t//\n\t\t// Process the mouse events for each of the different kinds of handlers\n\t\tfor (event = 0; event < that.mouseDown.length; event++) {\n\t\t\tfor (handler = 0; handler < that.handlersDown.length; handler++) {\n\t\t\t\tthat.handlersDown[handler](that.mouseDown[event], elapsedTime);\n\t\t\t}\n\t\t}\n\t\t\n\t\tfor (event = 0; event < that.mouseUp.length; event++) {\n\t\t\tfor (handler = 0; handler < that.handlersUp.length; handler++) {\n\t\t\t\tthat.handlersUp[handler](that.mouseUp[event], elapsedTime);\n\t\t\t}\n\t\t}\n\t\t\n\t\tfor (event = 0; event < that.mouseMove.length; event++) {\n\t\t\tfor (handler = 0; handler < that.handlersMove.length; handler++) {\n\t\t\t\tthat.handlersMove[handler](that.mouseMove[event], elapsedTime);\n\t\t\t}\n\t\t}\n\t\t\n\t\t//\n\t\t// Now that we have processed all the inputs, reset everything back to the empty state\n\t\tthat.mouseDown.length = 0;\n\t\tthat.mouseUp.length = 0;\n\t\tthat.mouseMove.length = 0;\n\t};\n\t\n\tthat.registerCommand = function(type, handler) {\n\t\tif (type === 'mousedown') {\n\t\t\tthat.handlersDown.push(handler);\n\t\t}\n\t\telse if (type === 'mouseup') {\n\t\t\tthat.handlersUp.push(handler);\n\t\t}\n\t\telse if (type === 'mousemove') {\n\t\t\tthat.handlersMove.push(handler);\n\t\t}\n\t};\n\t\n\twindow.addEventListener('mousedown', mouseDown);\n\twindow.addEventListener('mouseup', mouseUp);\n\twindow.addEventListener('mousemove', mouseMove);\n\t\n\treturn that;\n}\n\nfunction Keyboard() {\n\tlet that = {\n\t\t\tkeys: {},\n\t\t\thandlers: []\n\t\t};\n\t\n\tfunction keyPress(e) {\n\t\tthat.keys[e.keyCode] = e.timeStamp;\n\t}\n\t\n\tfunction keyRelease(e) {\n\t\tdelete that.keys[e.keyCode];\n\t}\n\t\n\t// ------------------------------------------------------------------\n\t//\n\t// Allows the client code to register a keyboard handler\n\t//\n\t// ------------------------------------------------------------------\n\tthat.registerCommand = function(key, handler) {\n\t\tthat.handlers.push({ key: key, handler: handler });\n\t};\n\t\n\t// ------------------------------------------------------------------\n\t//\n\t// Allows the client to invoke all the handlers for the registered key/handlers.\n\t//\n\t// ------------------------------------------------------------------\n\tthat.update = function(elapsedTime) {\n\t\tlet key = 0;\n\n\t\tfor (key = 0; key < that.handlers.length; key++) {\n\t\t\tif (typeof that.keys[that.handlers[key].key] !== 'undefined') {\n\t\t\t\tthat.handlers[key].handler(elapsedTime);\n\t\t\t}\n\t\t}\n\t};\n\t\n\t//\n\t// These are used to keep track of which keys are currently pressed\n\twindow.addEventListener('keydown', keyPress);\n\twindow.addEventListener('keyup', keyRelease);\n\t\n\treturn that;\n}\n\n//------------------------------------------------------------------\n//\n// Source: http://stackoverflow.com/questions/1465374/javascript-event-keycode-constants\n//\n//------------------------------------------------------------------\nlet KeyEvent = {\n\tDOM_VK_CANCEL: 3,\n\tDOM_VK_HELP: 6,\n\tDOM_VK_BACK_SPACE: 8,\n\tDOM_VK_TAB: 9,\n\tDOM_VK_CLEAR: 12,\n\tDOM_VK_RETURN: 13,\n\tDOM_VK_ENTER: 14,\n\tDOM_VK_SHIFT: 16,\n\tDOM_VK_CONTROL: 17,\n\tDOM_VK_ALT: 18,\n\tDOM_VK_PAUSE: 19,\n\tDOM_VK_CAPS_LOCK: 20,\n\tDOM_VK_ESCAPE: 27,\n\tDOM_VK_SPACE: 32,\n\tDOM_VK_PAGE_UP: 33,\n\tDOM_VK_PAGE_DOWN: 34,\n\tDOM_VK_END: 35,\n\tDOM_VK_HOME: 36,\n\tDOM_VK_LEFT: 37,\n\tDOM_VK_UP: 38,\n\tDOM_VK_RIGHT: 39,\n\tDOM_VK_DOWN: 40,\n\tDOM_VK_PRINTSCREEN: 44,\n\tDOM_VK_INSERT: 45,\n\tDOM_VK_DELETE: 46,\n\tDOM_VK_0: 48,\n\tDOM_VK_1: 49,\n\tDOM_VK_2: 50,\n\tDOM_VK_3: 51,\n\tDOM_VK_4: 52,\n\tDOM_VK_5: 53,\n\tDOM_VK_6: 54,\n\tDOM_VK_7: 55,\n\tDOM_VK_8: 56,\n\tDOM_VK_9: 57,\n\tDOM_VK_SEMICOLON: 59,\n\tDOM_VK_EQUALS: 61,\n\tDOM_VK_A: 65,\n\tDOM_VK_B: 66,\n\tDOM_VK_C: 67,\n\tDOM_VK_D: 68,\n\tDOM_VK_E: 69,\n\tDOM_VK_F: 70,\n\tDOM_VK_G: 71,\n\tDOM_VK_H: 72,\n\tDOM_VK_I: 73,\n\tDOM_VK_J: 74,\n\tDOM_VK_K: 75,\n\tDOM_VK_L: 76,\n\tDOM_VK_M: 77,\n\tDOM_VK_N: 78,\n\tDOM_VK_O: 79,\n\tDOM_VK_P: 80,\n\tDOM_VK_Q: 81,\n\tDOM_VK_R: 82,\n\tDOM_VK_S: 83,\n\tDOM_VK_T: 84,\n\tDOM_VK_U: 85,\n\tDOM_VK_V: 86,\n\tDOM_VK_W: 87,\n\tDOM_VK_X: 88,\n\tDOM_VK_Y: 89,\n\tDOM_VK_Z: 90,\n\tDOM_VK_CONTEXT_MENU: 93,\n\tDOM_VK_NUMPAD0: 96,\n\tDOM_VK_NUMPAD1: 97,\n\tDOM_VK_NUMPAD2: 98,\n\tDOM_VK_NUMPAD3: 99,\n\tDOM_VK_NUMPAD4: 100,\n\tDOM_VK_NUMPAD5: 101,\n\tDOM_VK_NUMPAD6: 102,\n\tDOM_VK_NUMPAD7: 103,\n\tDOM_VK_NUMPAD8: 104,\n\tDOM_VK_NUMPAD9: 105,\n\tDOM_VK_MULTIPLY: 106,\n\tDOM_VK_ADD: 107,\n\tDOM_VK_SEPARATOR: 108,\n\tDOM_VK_SUBTRACT: 109,\n\tDOM_VK_DECIMAL: 110,\n\tDOM_VK_DIVIDE: 111,\n\tDOM_VK_F1: 112,\n\tDOM_VK_F2: 113,\n\tDOM_VK_F3: 114,\n\tDOM_VK_F4: 115,\n\tDOM_VK_F5: 116,\n\tDOM_VK_F6: 117,\n\tDOM_VK_F7: 118,\n\tDOM_VK_F8: 119,\n\tDOM_VK_F9: 120,\n\tDOM_VK_F10: 121,\n\tDOM_VK_F11: 122,\n\tDOM_VK_F12: 123,\n\tDOM_VK_F13: 124,\n\tDOM_VK_F14: 125,\n\tDOM_VK_F15: 126,\n\tDOM_VK_F16: 127,\n\tDOM_VK_F17: 128,\n\tDOM_VK_F18: 129,\n\tDOM_VK_F19: 130,\n\tDOM_VK_F20: 131,\n\tDOM_VK_F21: 132,\n\tDOM_VK_F22: 133,\n\tDOM_VK_F23: 134,\n\tDOM_VK_F24: 135,\n\tDOM_VK_NUM_LOCK: 144,\n\tDOM_VK_SCROLL_LOCK: 145,\n\tDOM_VK_COMMA: 188,\n\tDOM_VK_PERIOD: 190,\n\tDOM_VK_SLASH: 191,\n\tDOM_VK_BACK_QUOTE: 192,\n\tDOM_VK_OPEN_BRACKET: 219,\n\tDOM_VK_BACK_SLASH: 220,\n\tDOM_VK_CLOSE_BRACKET: 221,\n\tDOM_VK_QUOTE: 222,\n\tDOM_VK_META: 224\n};\n\nmodule.exports = {\n\tKeyboard,\n\tKeyEvent,\n\tMouse,\n};\n\n//# sourceURL=webpack:///./framework/input.js?");

/***/ }),

/***/ "./game/scripts/about.js":
/*!*******************************!*\
  !*** ./game/scripts/about.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\r\nfunction initialize() {\r\n\tconst showScreen = __webpack_require__(/*! ./showScreen */ \"./game/scripts/showScreen.js\");\r\n\tconst mainMenu = __webpack_require__(/*! ./mainmenu */ \"./game/scripts/mainmenu.js\");\r\n\tdocument.getElementById('id-about-back').addEventListener(\r\n\t\t'click',\r\n\t\tfunction() { showScreen(mainMenu); });\r\n}\r\n\r\nfunction run() {\r\n\t//\r\n\t// I know this is empty, there isn't anything to do.\r\n}\r\n\r\nmodule.exports = {\r\n\tinitialize: initialize,\r\n\trun: run,\r\n\tid: 'about'\r\n};\r\n\n\n//# sourceURL=webpack:///./game/scripts/about.js?");

/***/ }),

/***/ "./game/scripts/game.js":
/*!******************************!*\
  !*** ./game/scripts/game.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const screens = __webpack_require__(/*! ./screens */ \"./game/scripts/screens.js\");\r\nconst showScreen = __webpack_require__(/*! ./showScreen */ \"./game/scripts/showScreen.js\");\r\nconst mainMenu = __webpack_require__(/*! ./mainmenu */ \"./game/scripts/mainmenu.js\");\r\n\r\n//------------------------------------------------------------------\r\n//\r\n// This function performs the one-time game initialization.\r\n//\r\n//------------------------------------------------------------------\r\nfunction initialize() {\r\n\tlet screen = null;\r\n\r\n\t// Go through each of the screens and tell them to initialize\r\n\tfor (screen in screens) {\r\n\t\tif (screens.hasOwnProperty(screen)) {\r\n\t\t\tscreens[screen].initialize();\r\n\t\t}\r\n\t}\r\n\t\r\n\t// Make the main-menu screen the active one\r\n\tshowScreen(mainMenu);\r\n}\r\n\r\nwindow.onload = function() {\r\n\tinitialize();\r\n};\r\n\n\n//# sourceURL=webpack:///./game/scripts/game.js?");

/***/ }),

/***/ "./game/scripts/gameObjects/cell.js":
/*!******************************************!*\
  !*** ./game/scripts/gameObjects/cell.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let cellType = {\n    blank: 0,\n    obstacle: 1,\n    food: 2,\n    snake: 3,\n    wall: 4\n}\n\nlet colors = [\n    // blank\n    {\n        fill: 'rgb(0,0,255)',\n        stroke: 'rgb(0,0,255)'\n    },\n    // obstacle\n    {\n        fill: 'rgb(0,255,0)',\n        stroke: '#000'\n    },\n    // food\n    {\n        fill: '#ff9900',\n        stroke: '#000'\n    },\n    // snake\n    {\n        fill: '#fff',\n        stroke: '#000',\n    },\n    // wall\n    {\n        fill: 'rgb(255,0,0)',\n        stroke: 'rgb(255,0,0)'\n    },\n    \n]\n\nmodule.exports = {\n    cellType,\n    colors\n}\n\n//# sourceURL=webpack:///./game/scripts/gameObjects/cell.js?");

/***/ }),

/***/ "./game/scripts/gameObjects/grid.js":
/*!******************************************!*\
  !*** ./game/scripts/gameObjects/grid.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const cell = __webpack_require__(/*! ./cell */ \"./game/scripts/gameObjects/cell.js\");\nconst { drawRectangle } = __webpack_require__(/*! ../../../framework/graphics */ \"./framework/graphics.js\");\n\ncells = [];\n\nfunction getRandomBlankCell() {\n    let row = Math.floor(Math.random() * cells.length);\n    let col = Math.floor(Math.random() * cells[0].length);\n    \n    if(cells[row][col] == cell.cellType.blank) {\n        return { row, col }\n    }\n    \n    return getRandomBlankCell();\n}\n\nfunction initialize() {\n    cells.length = 0;\n    for(let i = 0; i < 50; i++) {\n        let row = [];\n        for(let j = 0; j < 50; j++) {\n            if(i == 0 || i == 49 || j == 0 || j == 49) {\n                row.push(cell.cellType.wall);\n            } else {\n                row.push(cell.cellType.blank);\n            }\n        }\n        cells.push(row);\n    }\n\n    for(let i = 0; i < 15; i++) {\n        var { row, col } = getRandomBlankCell();\n        cells[row][col] = cell.cellType.obstacle;\n    }\n\n    var { row, col } = getRandomBlankCell();\n    cells[row][col] = cell.cellType.food;\n}\n\nfunction render() {\n    for(let i = 0; i < 50; i++) {\n        for(let j = 0; j < 50; j++) {\n            c = cells[i][j];\n\n            drawRectangle({\n                x: i * 20,\n                y: j * 20,\n                ...cell.colors[c]\n            });\n        }\n    }\n}\n\nmodule.exports = {\n    initialize,\n    cells,\n    render,\n    getRandomBlankCell\n}\n\n//# sourceURL=webpack:///./game/scripts/gameObjects/grid.js?");

/***/ }),

/***/ "./game/scripts/gameObjects/snake.js":
/*!*******************************************!*\
  !*** ./game/scripts/gameObjects/snake.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const grid = __webpack_require__(/*! ./grid */ \"./game/scripts/gameObjects/grid.js\");\nconst { drawRectangle } = __webpack_require__(/*! ../../../framework/graphics */ \"./framework/graphics.js\");\nconst cell = __webpack_require__(/*! ./cell */ \"./game/scripts/gameObjects/cell.js\");\n\nlet cells = [];\nlet currentDirection = ''\nlet needsToGrow = 0;\n\nfunction getBlankCell() {\n    let blankCell = grid.getRandomBlankCell();\n    for (let i = 0; i < cells.length; i++) {\n        if(cells[i].row == blankCell.row && cells[i].col == blankCell.col) {\n            return getBlankCell();\n        }\n    }\n    return blankCell;\n}\n\nfunction changeDirection(dir) {\n    if(dir == 'left' && currentDirection != 'right') {\n        currentDirection = dir\n    } else if(dir == 'right' && currentDirection != 'left') {\n        currentDirection = dir\n    } else if(dir == 'up' && currentDirection != 'down') {\n        currentDirection = dir\n    } else if(dir == 'down' && currentDirection != 'up') {\n        currentDirection = dir\n    }\n}\n\nfunction initialize() {\n    cells.length = 0;\n    cells.push(grid.getRandomBlankCell());\n    needsToGrow = 0;\n    currentDirection = '';\n}\n\nfunction move() {\n    let head = cells[cells.length -1];\n\n    if(needsToGrow) {\n        needsToGrow -= 1;\n    } else {\n        cells.shift();\n    }\n\n    switch (currentDirection) {\n        \n        case 'left':\n            cells.push({row: head.row - 1, col: head.col});\n            break;\n        \n        case 'right':\n            cells.push({row: head.row + 1, col: head.col});\n            break;\n        \n        case 'up':\n            cells.push({row: head.row, col: head.col - 1});\n            break;\n\n        case 'down':\n            cells.push({row: head.row, col: head.col + 1});\n            break;\n    }\n}\n\nfunction update(elapsedTime) {\n    if(!currentDirection) return true;\n    \n    move();\n\n    let head = cells[cells.length -1];\n\n    // If you hit an obstacle or a wall\n    if(grid.cells[head.row][head.col] == cell.cellType.obstacle || grid.cells[head.row][head.col] == cell.cellType.wall) {\n        return false;\n    }\n\n    // If you hit yourself\n    for (let i = 0; i < cells.length - 1; i++) {\n        if(cells[i].row == head.row && cells[i].col == head.col) {\n            return false;\n        }\n    }\n\n    // If you hit a food\n    if(grid.cells[head.row][head.col] == cell.cellType.food) {\n        needsToGrow = 3;\n\n        grid.cells[head.row][head.col] = cell.cellType.blank;\n\n        let newFood = getBlankCell();\n        grid.cells[newFood.row][newFood.col] = cell.cellType.food;\n    }\n    return true;\n}\n\nfunction render() {\n    for(let i = 0; i < cells.length; i++) {\n        c = cells[i];\n\n        drawRectangle({\n            x: c.row * 20,\n            y: c.col * 20,\n            ...cell.colors[cell.cellType.snake]\n        });\n    }\n}\n\nmodule.exports = {\n    cells,\n    initialize,\n    render,\n    changeDirection,\n    update\n}\n\n//# sourceURL=webpack:///./game/scripts/gameObjects/snake.js?");

/***/ }),

/***/ "./game/scripts/gameplay.js":
/*!**********************************!*\
  !*** ./game/scripts/gameplay.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const graphics = __webpack_require__(/*! ../../framework/graphics */ \"./framework/graphics.js\");\r\nconst input = __webpack_require__(/*! ../../framework/input */ \"./framework/input.js\");\r\nconst showScreen = __webpack_require__(/*! ./showScreen */ \"./game/scripts/showScreen.js\");\r\nconst mainMenu = __webpack_require__(/*! ./mainmenu */ \"./game/scripts/mainmenu.js\");\r\nconst highScores = __webpack_require__(/*! ./highscores */ \"./game/scripts/highscores.js\");\r\n\r\nconst grid = __webpack_require__(/*! ./gameObjects/grid */ \"./game/scripts/gameObjects/grid.js\");\r\nconst snake = __webpack_require__(/*! ./gameObjects/snake */ \"./game/scripts/gameObjects/snake.js\");\r\n\r\nlet myKeyboard = input.Keyboard();\r\nlet cancelNextRequest = false;\r\nlet lastTimeStamp;\r\nlet moveInterval = 150;\r\nlet timeSinceLastMove = 0;\r\nlet render = null;\r\nlet update = null;\r\n\r\nfunction initialize() {\r\n    console.log('game initializing...');\r\n\r\n    grid.initialize();\r\n    snake.initialize();\r\n    render = countdownRender;\r\n    update = countdownUpdate;\r\n\r\n    // Create the keyboard input handler and register the keyboard commands\r\n    myKeyboard.registerCommand(input.KeyEvent.DOM_VK_LEFT, function(){ snake.changeDirection('left')});\r\n    myKeyboard.registerCommand(input.KeyEvent.DOM_VK_RIGHT, function(){ snake.changeDirection('right')});\r\n    myKeyboard.registerCommand(input.KeyEvent.DOM_VK_UP, function(){ snake.changeDirection('up')});\r\n    myKeyboard.registerCommand(input.KeyEvent.DOM_VK_DOWN, function(){ snake.changeDirection('down')});\r\n}\r\n\r\nfunction gameOver() {\r\n    cancelNextRequest = true;\r\n\r\n    const ls = __webpack_require__(/*! ../../framework/LocalStorage */ \"./framework/LocalStorage.js\");\r\n    let highscores = ls.get('highscores');\r\n\r\n    // If there are no high scores yet\r\n    if(typeof highscores.scores === 'undefined' || highscores.scores.length == 0) {\r\n        let name = window.prompt('Congratulations! You made a high score!');\r\n\r\n        highscores.scores = [ { name, score: snake.cells.length} ];\r\n        ls.set('highscores', {field: 'scores', value: highscores.scores});\r\n    } else {\r\n        let lowest = highscores.scores[highscores.scores.length - 1];\r\n        if (snake.cells.length > lowest.score || highscores.scores.length < 5) {\r\n            let name = window.prompt('Congratulations! You made a high score!');\r\n            highscores.scores.push({ name, score: snake.cells.length});\r\n            highscores.scores.sort(function(a, b) {\r\n                return b.score - a.score;\r\n            });\r\n            highscores.scores = highscores.scores.slice(0, 5);\r\n        }\r\n        ls.set('highscores', {field: 'scores', value: highscores.scores});\r\n    }\r\n    initialize();\r\n    showScreen(highScores);\r\n}\r\n\r\nfunction gameUpdate(elapsedTime) {\r\n    myKeyboard.update(elapsedTime);\r\n\r\n    var successfulMove = true;\r\n    timeSinceLastMove += elapsedTime;\r\n    if(timeSinceLastMove > moveInterval) {\r\n        successfulMove = snake.update(elapsedTime);\r\n        timeSinceLastMove -= moveInterval;\r\n    }\r\n\r\n    if(!successfulMove) {\r\n        gameOver();\r\n    }\r\n}\r\n\r\nfunction gameRender() {\r\n    graphics.clear();\r\n    grid.render();\r\n    snake.render();\r\n}\r\n\r\nlet countdownTime = 0;\r\nfunction countdownUpdate(elapsedTime) {\r\n    countdownTime += elapsedTime;\r\n}\r\n\r\nfunction countdownRender() {\r\n    gameRender();\r\n    if(countdownTime < 1000) {\r\n        graphics.drawText({\r\n            text: 'Start in 3!',\r\n            x: 400,\r\n            y: 400,\r\n            fill: '#fff'\r\n        });\r\n    } else if (countdownTime < 2000) {\r\n        graphics.drawText({\r\n            text: 'Start in 2!',\r\n            x: 400,\r\n            y: 400,\r\n            fill: '#fff'\r\n        });\r\n    } else if (countdownTime < 3000) {\r\n        graphics.drawText({\r\n            text: 'Start in 1!',\r\n            x: 400,\r\n            y: 400,\r\n            fill: '#fff'\r\n        });\r\n    } else {\r\n        countdownTime = 0;\r\n        render = gameRender;\r\n        update = gameUpdate;\r\n    }\r\n}\r\n\r\n//------------------------------------------------------------------\r\n//\r\n// This is the Game Loop function!\r\n//\r\n//------------------------------------------------------------------\r\nfunction gameLoop(time) {\r\n    \r\n    update(time - lastTimeStamp);\r\n    lastTimeStamp = time;\r\n    \r\n    render();\r\n\r\n    if (!cancelNextRequest) {\r\n        requestAnimationFrame(gameLoop);\r\n    }\r\n}\r\n\r\nfunction run() {\r\n    lastTimeStamp = performance.now();\r\n\r\n    // Start the animation loop\r\n    cancelNextRequest = false;\r\n    requestAnimationFrame(gameLoop);\r\n}\r\n\r\nmodule.exports = {\r\n    initialize: initialize,\r\n    run: run,\r\n    id: 'game-play'\r\n};\r\n\n\n//# sourceURL=webpack:///./game/scripts/gameplay.js?");

/***/ }),

/***/ "./game/scripts/help.js":
/*!******************************!*\
  !*** ./game/scripts/help.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\r\nfunction initialize() {\r\n\tconst showScreen = __webpack_require__(/*! ./showScreen */ \"./game/scripts/showScreen.js\");\r\n\tconst mainMenu = __webpack_require__(/*! ./mainmenu */ \"./game/scripts/mainmenu.js\");\r\n\tdocument.getElementById('id-help-back').addEventListener(\r\n\t\t'click',\r\n\t\tfunction() { showScreen(mainMenu); });\r\n}\r\n\r\nfunction run() {\r\n\t//\r\n\t// I know this is empty, there isn't anything to do.\r\n}\r\n\r\nmodule.exports = {\r\n\tinitialize: initialize,\r\n\trun: run,\r\n\tid: 'help'\r\n};\r\n\n\n//# sourceURL=webpack:///./game/scripts/help.js?");

/***/ }),

/***/ "./game/scripts/highscores.js":
/*!************************************!*\
  !*** ./game/scripts/highscores.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\r\nfunction initialize() {\r\n\tconst showScreen = __webpack_require__(/*! ./showScreen */ \"./game/scripts/showScreen.js\");\r\n\tconst mainMenu = __webpack_require__(/*! ./mainmenu */ \"./game/scripts/mainmenu.js\");\r\n\tdocument.getElementById('id-high-scores-back').addEventListener(\r\n\t\t'click',\r\n\t\tfunction() { showScreen(mainMenu); });\r\n\tdocument.getElementById('highscores-reset').addEventListener(\r\n\t\t'click',\r\n\t\tfunction() { __webpack_require__(/*! ../../framework/LocalStorage */ \"./framework/LocalStorage.js\").set('highscores', {field: 'scores', value: []}); run();});\r\n}\r\n\r\nfunction run() {\r\n\tconst ls = __webpack_require__(/*! ../../framework/LocalStorage */ \"./framework/LocalStorage.js\");\r\n\t\r\n\tlet highscores = ls.get('highscores');\r\n\tif(typeof highscores.scores == 'undefined') highscores.scores = [];\r\n\r\n\tvar str = '';\r\n\tfor (let i = 0; i < highscores.scores.length; i++) {\r\n\t\tstr += `<li>${highscores.scores[i].name} - ${highscores.scores[i].score}</li>`\r\n\t}\r\n\tlet ol = document.getElementById('highscores-ol');\r\n\tol.innerHTML = str;\r\n}\r\n\r\nmodule.exports = {\r\n\tinitialize: initialize,\r\n\trun: run,\r\n\tid: 'high-scores'\r\n};\r\n\n\n//# sourceURL=webpack:///./game/scripts/highscores.js?");

/***/ }),

/***/ "./game/scripts/mainmenu.js":
/*!**********************************!*\
  !*** ./game/scripts/mainmenu.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\r\nfunction initialize() {\r\n\tconst showScreen = __webpack_require__(/*! ./showScreen */ \"./game/scripts/showScreen.js\");\r\n\tconst gamePlay = __webpack_require__(/*! ./gameplay */ \"./game/scripts/gameplay.js\");\r\n\tconst highScores = __webpack_require__(/*! ./highscores */ \"./game/scripts/highscores.js\");\r\n\tconst help = __webpack_require__(/*! ./help */ \"./game/scripts/help.js\");\r\n\tconst about = __webpack_require__(/*! ./about */ \"./game/scripts/about.js\");\r\n\t// Setup each of menu events for the screens\r\n\tdocument.getElementById('id-new-game').addEventListener(\r\n\t\t'click',\r\n\t\tfunction() {showScreen(gamePlay); });\r\n\t\r\n\tdocument.getElementById('id-high-scores').addEventListener(\r\n\t\t'click',\r\n\t\tfunction() { showScreen(highScores); });\r\n\t\r\n\tdocument.getElementById('id-about').addEventListener(\r\n\t\t'click',\r\n\t\tfunction() { showScreen(about); });\r\n}\r\n\r\nfunction run() {\r\n\t// I know this is empty, there isn't anything to do.\r\n}\r\n\r\nmodule.exports = {\r\n\tinitialize: initialize,\r\n\trun: run,\r\n\tid: 'main-menu'\r\n};\r\n\n\n//# sourceURL=webpack:///./game/scripts/mainmenu.js?");

/***/ }),

/***/ "./game/scripts/screens.js":
/*!*********************************!*\
  !*** ./game/scripts/screens.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const about = __webpack_require__(/*! ./about */ \"./game/scripts/about.js\");\nconst help = __webpack_require__(/*! ./help */ \"./game/scripts/help.js\");\nconst gameplay = __webpack_require__(/*! ./gameplay */ \"./game/scripts/gameplay.js\");\nconst mainmenu = __webpack_require__(/*! ./mainmenu */ \"./game/scripts/mainmenu.js\");\nconst highScores = __webpack_require__(/*! ./highscores */ \"./game/scripts/highscores.js\");\n\nconst screens = {\n    about,\n    help,\n    'game-play': gameplay,\n    'main-menu': mainmenu,\n    'high-scores': highScores\n};\n\nmodule.exports = screens;\n\n//# sourceURL=webpack:///./game/scripts/screens.js?");

/***/ }),

/***/ "./game/scripts/showScreen.js":
/*!************************************!*\
  !*** ./game/scripts/showScreen.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function showScreen(screen) {\n\tlet screenIndex = 0;\n\tlet active = null;\n\n\tactive = document.getElementsByClassName('active');\n\tfor (screenIndex = 0; screenIndex < active.length; screenIndex++) {\n\t\tactive[screenIndex].classList.remove('active');\n\t}\n\n\t// Tell the screen to start actively running\n\tscreen.run();\n\n\t// Then, set the new screen to be active\n\tdocument.getElementById(screen.id).classList.add('active');\n}\n\n//# sourceURL=webpack:///./game/scripts/showScreen.js?");

/***/ })

/******/ });