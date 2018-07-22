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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PostsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mobx_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mobx_state_tree__ = __webpack_require__("mobx-state-tree");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mobx_state_tree___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_mobx_state_tree__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_models_store__ = __webpack_require__("./src/models/store.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_components_albums__ = __webpack_require__("./src/components/albums.tsx");

var _jsxFileName = "/Users/tmulqueen/projects/hacks/next-typescript/pages/index.tsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var PostsPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PostsPage, _React$Component);

  _createClass(PostsPage, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
        var req;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req;
                _context.next = 3;
                return Object(__WEBPACK_IMPORTED_MODULE_4__src_models_store__["b" /* initStore */])();

              case 3:
                return _context.abrupt("return", _context.sent);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  function PostsPage(props) {
    var _this;

    _classCallCheck(this, PostsPage);

    _this = _possibleConstructorReturn(this, (PostsPage.__proto__ || Object.getPrototypeOf(PostsPage)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "store", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    _this.props.initialState && Object(__WEBPACK_IMPORTED_MODULE_3_mobx_state_tree__["applySnapshot"])(__WEBPACK_IMPORTED_MODULE_4__src_models_store__["a" /* alStore */], _this.props.initialState);
    _this.store = __WEBPACK_IMPORTED_MODULE_4__src_models_store__["a" /* alStore */];
    return _this;
  }

  _createClass(PostsPage, [{
    key: "render",
    value: function render() {
      var initialState = this.props.initialState;
      console.log('%s ================= This store', this.store);
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_mobx_react__["Provider"], {
        store: this.store || initialState,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__src_components_albums__["a" /* default */], {
        title: "Index Page",
        linkTo: "/posts",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }));
    }
  }]);

  return PostsPage;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ }),

/***/ "./src/components/albums.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react__ = __webpack_require__("mobx-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mobx_react__);
var _jsxFileName = "/Users/tmulqueen/projects/hacks/next-typescript/src/components/albums.tsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Albums =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Albums, _React$Component);

  function Albums() {
    _classCallCheck(this, Albums);

    return _possibleConstructorReturn(this, (Albums.__proto__ || Object.getPrototypeOf(Albums)).apply(this, arguments));
  }

  _createClass(Albums, [{
    key: "render",
    value: function render() {
      var store = this.props.store;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, this.props.title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("nav", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: this.props.linkTo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, "Navigate"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        onClick: store.toggler,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, store.toggle ? 'yay' : 'naha'), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, store && store.albums && store.albums.map(function (album) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
          key: album.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          }
        }, album.title);
      })));
    }
  }]);

  return Albums;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_mobx_react__["inject"])('store')(Object(__WEBPACK_IMPORTED_MODULE_2_mobx_react__["observer"])(Albums)));

/***/ }),

/***/ "./src/models/store.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getAlbums */
/* unused harmony export getPosts */
/* unused harmony export albumStore */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return alStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return rehydrateStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return initStore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_state_tree__ = __webpack_require__("mobx-state-tree");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_state_tree___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_state_tree__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_node_fetch__ = __webpack_require__("node-fetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_node_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_node_fetch__);


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

 // isomophic fetch since fetch only works only exists on the window


var store = null;
var getAlbums =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
    var res, albums;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2_node_fetch___default()('https://jsonplaceholder.typicode.com/albums');

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            albums = _context.sent;
            return _context.abrupt("return", albums);

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 10]]);
  }));

  return function getAlbums() {
    return _ref.apply(this, arguments);
  };
}();
var getPosts =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2() {
    var res, posts;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2_node_fetch___default()('https://jsonplaceholder.typicode.com/posts');

          case 3:
            res = _context2.sent;
            _context2.next = 6;
            return res.json();

          case 6:
            posts = _context2.sent;
            return _context2.abrupt("return", posts);

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[0, 10]]);
  }));

  return function getPosts() {
    return _ref2.apply(this, arguments);
  };
}();
var Album = __WEBPACK_IMPORTED_MODULE_1_mobx_state_tree__["types"].model('Album', {
  id: __WEBPACK_IMPORTED_MODULE_1_mobx_state_tree__["types"].number,
  userId: __WEBPACK_IMPORTED_MODULE_1_mobx_state_tree__["types"].number,
  title: __WEBPACK_IMPORTED_MODULE_1_mobx_state_tree__["types"].string
});
var Post = __WEBPACK_IMPORTED_MODULE_1_mobx_state_tree__["types"].model('Post', {
  id: __WEBPACK_IMPORTED_MODULE_1_mobx_state_tree__["types"].number,
  userId: __WEBPACK_IMPORTED_MODULE_1_mobx_state_tree__["types"].number,
  title: __WEBPACK_IMPORTED_MODULE_1_mobx_state_tree__["types"].string
});
var albumStore = __WEBPACK_IMPORTED_MODULE_1_mobx_state_tree__["types"].model('store', {
  albums: __WEBPACK_IMPORTED_MODULE_1_mobx_state_tree__["types"].optional(__WEBPACK_IMPORTED_MODULE_1_mobx_state_tree__["types"].array(Album), []),
  posts: __WEBPACK_IMPORTED_MODULE_1_mobx_state_tree__["types"].optional(__WEBPACK_IMPORTED_MODULE_1_mobx_state_tree__["types"].array(Post), []),
  toggle: __WEBPACK_IMPORTED_MODULE_1_mobx_state_tree__["types"].optional(__WEBPACK_IMPORTED_MODULE_1_mobx_state_tree__["types"].boolean, false)
}).actions(function (self) {
  return {
    toggler: function toggler() {
      self.toggle = !self.toggle;
    }
  };
}); // const fetchAlbums = flow(function* () {
//   const res = yield getAlbums();
//   console.log('FETCHED!!!!!!!!!!!!!!!!!')
//   applySnapshot(self.albums, res)
// });
// return ({
//   // afterCreate() {
//   //   fetchAlbums()
//   // },
//   fetchAlbums,
// });
// });

var alStore = albumStore.create(); // export const rehydrateStore = async (isServer: boolean, snapshot = null) => {
//   if (isServer || alStore.albums.length === 0) {
//     const hellomyoldfirend = await getAlbums();
//     const posts = await getPosts();
//     console.log()
//     store = albumStore.create({
//       albums: hellomyoldfirend || [],
//       posts: posts || [],
//     });
//     return { 
//       initialState: getSnapshot(store), 
//       isServer, 
//     };
//   }
//   // if (snapshot) {
//   //   console.log('is store alive?', alStore, snapshot)
//   //   return store
//   // }
//     // store = applySnapshot(alStore, snapshot)
//   return alStore;
// };

var rehydrateStore = function rehydrateStore(initialState) {
  initialState && Object(__WEBPACK_IMPORTED_MODULE_1_mobx_state_tree__["applySnapshot"])(alStore, initialState);
  return alStore;
};
var initStore =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee3() {
    var hellomyoldfirend, posts;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!(alStore.albums.length && alStore.posts.length)) {
              _context3.next = 2;
              break;
            }

            return _context3.abrupt("return", albumStore);

          case 2:
            _context3.next = 4;
            return getAlbums();

          case 4:
            hellomyoldfirend = _context3.sent;
            _context3.next = 7;
            return getPosts();

          case 7:
            posts = _context3.sent;
            console.log();
            store = albumStore.create({
              albums: hellomyoldfirend || [],
              posts: posts || []
            });
            return _context3.abrupt("return", {
              initialState: Object(__WEBPACK_IMPORTED_MODULE_1_mobx_state_tree__["getSnapshot"])(store)
            });

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function initStore() {
    return _ref3.apply(this, arguments);
  };
}();

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.tsx");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "mobx-react":
/***/ (function(module, exports) {

module.exports = require("mobx-react");

/***/ }),

/***/ "mobx-state-tree":
/***/ (function(module, exports) {

module.exports = require("mobx-state-tree");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "node-fetch":
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map