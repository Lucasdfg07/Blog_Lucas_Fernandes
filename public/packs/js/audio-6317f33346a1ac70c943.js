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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/audio.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/audio.js":
/*!***************************************!*\
  !*** ./app/javascript/packs/audio.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/lucas/Projetos/my_portfolio/app/javascript/packs/audio.js: Unexpected token, expected \",\" (5:8)\n\n  3 | $(() =>\n  4 |         audio = new Audio('/audio.mp3')\n> 5 |         audio.play()\n    |         ^\n  6 | );\n  7 |\n  8 | $(() =>\n    at Parser._raise (/home/lucas/Projetos/my_portfolio/node_modules/@babel/parser/lib/index.js:810:17)\n    at Parser.raiseWithData (/home/lucas/Projetos/my_portfolio/node_modules/@babel/parser/lib/index.js:803:17)\n    at Parser.raise (/home/lucas/Projetos/my_portfolio/node_modules/@babel/parser/lib/index.js:764:17)\n    at Parser.unexpected (/home/lucas/Projetos/my_portfolio/node_modules/@babel/parser/lib/index.js:9967:16)\n    at Parser.expect (/home/lucas/Projetos/my_portfolio/node_modules/@babel/parser/lib/index.js:9941:28)\n    at Parser.parseCallExpressionArguments (/home/lucas/Projetos/my_portfolio/node_modules/@babel/parser/lib/index.js:11126:14)\n    at Parser.parseCoverCallAndAsyncArrowHead (/home/lucas/Projetos/my_portfolio/node_modules/@babel/parser/lib/index.js:11050:29)\n    at Parser.parseSubscript (/home/lucas/Projetos/my_portfolio/node_modules/@babel/parser/lib/index.js:10985:19)\n    at Parser.parseSubscripts (/home/lucas/Projetos/my_portfolio/node_modules/@babel/parser/lib/index.js:10958:19)\n    at Parser.parseExprSubscripts (/home/lucas/Projetos/my_portfolio/node_modules/@babel/parser/lib/index.js:10947:17)\n    at Parser.parseUpdate (/home/lucas/Projetos/my_portfolio/node_modules/@babel/parser/lib/index.js:10921:21)\n    at Parser.parseMaybeUnary (/home/lucas/Projetos/my_portfolio/node_modules/@babel/parser/lib/index.js:10899:23)\n    at Parser.parseExprOps (/home/lucas/Projetos/my_portfolio/node_modules/@babel/parser/lib/index.js:10756:23)\n    at Parser.parseMaybeConditional (/home/lucas/Projetos/my_portfolio/node_modules/@babel/parser/lib/index.js:10730:23)\n    at Parser.parseMaybeAssign (/home/lucas/Projetos/my_portfolio/node_modules/@babel/parser/lib/index.js:10693:21)\n    at Parser.parseExpressionBase (/home/lucas/Projetos/my_portfolio/node_modules/@babel/parser/lib/index.js:10638:23)\n    at /home/lucas/Projetos/my_portfolio/node_modules/@babel/parser/lib/index.js:10632:39\n    at Parser.allowInAnd (/home/lucas/Projetos/my_portfolio/node_modules/@babel/parser/lib/index.js:12350:16)\n    at Parser.parseExpression (/home/lucas/Projetos/my_portfolio/node_modules/@babel/parser/lib/index.js:10632:17)\n    at Parser.parseStatementContent (/home/lucas/Projetos/my_portfolio/node_modules/@babel/parser/lib/index.js:12682:23)\n    at Parser.parseStatement (/home/lucas/Projetos/my_portfolio/node_modules/@babel/parser/lib/index.js:12551:17)\n    at Parser.parseBlockOrModuleBlockBody (/home/lucas/Projetos/my_portfolio/node_modules/@babel/parser/lib/index.js:13140:25)\n    at Parser.parseBlockBody (/home/lucas/Projetos/my_portfolio/node_modules/@babel/parser/lib/index.js:13131:10)\n    at Parser.parseProgram (/home/lucas/Projetos/my_portfolio/node_modules/@babel/parser/lib/index.js:12478:10)\n    at Parser.parseTopLevel (/home/lucas/Projetos/my_portfolio/node_modules/@babel/parser/lib/index.js:12469:25)\n    at Parser.parse (/home/lucas/Projetos/my_portfolio/node_modules/@babel/parser/lib/index.js:14195:10)\n    at parse (/home/lucas/Projetos/my_portfolio/node_modules/@babel/parser/lib/index.js:14247:38)\n    at parser (/home/lucas/Projetos/my_portfolio/node_modules/@babel/core/lib/parser/index.js:52:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (/home/lucas/Projetos/my_portfolio/node_modules/@babel/core/lib/transformation/normalize-file.js:82:38)");

/***/ })

/******/ });
//# sourceMappingURL=audio-6317f33346a1ac70c943.js.map