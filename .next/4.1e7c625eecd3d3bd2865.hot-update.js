webpackHotUpdate(4,{

/***/ "./pages/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PostsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_react__ = __webpack_require__("./node_modules/mobx-react/index.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mobx_state_tree__ = __webpack_require__("./node_modules/mobx-state-tree/dist/mobx-state-tree.module.js");
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
    _this.props.initialState && Object(__WEBPACK_IMPORTED_MODULE_3_mobx_state_tree__["a" /* applySnapshot */])(__WEBPACK_IMPORTED_MODULE_4__src_models_store__["a" /* alStore */], _this.props.initialState);
    _this.store = __WEBPACK_IMPORTED_MODULE_4__src_models_store__["a" /* alStore */];
    return _this;
  }

  _createClass(PostsPage, [{
    key: "render",
    value: function render() {
      var initialState = this.props.initialState;
      console.log('%s ================= This store', this.store);
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_mobx_react__["a" /* Provider */], {
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


    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_state_tree__ = __webpack_require__("./node_modules/mobx-state-tree/dist/mobx-state-tree.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_node_fetch__ = __webpack_require__("./node_modules/node-fetch/browser.js");
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
var Album = __WEBPACK_IMPORTED_MODULE_1_mobx_state_tree__["c" /* types */].model('Album', {
  id: __WEBPACK_IMPORTED_MODULE_1_mobx_state_tree__["c" /* types */].number,
  userId: __WEBPACK_IMPORTED_MODULE_1_mobx_state_tree__["c" /* types */].number,
  title: __WEBPACK_IMPORTED_MODULE_1_mobx_state_tree__["c" /* types */].string
});
var Post = __WEBPACK_IMPORTED_MODULE_1_mobx_state_tree__["c" /* types */].model('Post', {
  id: __WEBPACK_IMPORTED_MODULE_1_mobx_state_tree__["c" /* types */].number,
  userId: __WEBPACK_IMPORTED_MODULE_1_mobx_state_tree__["c" /* types */].number,
  title: __WEBPACK_IMPORTED_MODULE_1_mobx_state_tree__["c" /* types */].string
});
var albumStore = __WEBPACK_IMPORTED_MODULE_1_mobx_state_tree__["c" /* types */].model('store', {
  albums: __WEBPACK_IMPORTED_MODULE_1_mobx_state_tree__["c" /* types */].optional(__WEBPACK_IMPORTED_MODULE_1_mobx_state_tree__["c" /* types */].array(Album), []),
  posts: __WEBPACK_IMPORTED_MODULE_1_mobx_state_tree__["c" /* types */].optional(__WEBPACK_IMPORTED_MODULE_1_mobx_state_tree__["c" /* types */].array(Post), []),
  toggle: __WEBPACK_IMPORTED_MODULE_1_mobx_state_tree__["c" /* types */].optional(__WEBPACK_IMPORTED_MODULE_1_mobx_state_tree__["c" /* types */].boolean, false)
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
  initialState && Object(__WEBPACK_IMPORTED_MODULE_1_mobx_state_tree__["a" /* applySnapshot */])(alStore, initialState);
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
            _context3.next = 2;
            return getAlbums();

          case 2:
            hellomyoldfirend = _context3.sent;
            _context3.next = 5;
            return getPosts();

          case 5:
            posts = _context3.sent;
            console.log();
            store = albumStore.create({
              albums: hellomyoldfirend || [],
              posts: posts || []
            });
            return _context3.abrupt("return", {
              initialState: Object(__WEBPACK_IMPORTED_MODULE_1_mobx_state_tree__["b" /* getSnapshot */])(store)
            });

          case 9:
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

/***/ })

})
//# sourceMappingURL=4.1e7c625eecd3d3bd2865.hot-update.js.map