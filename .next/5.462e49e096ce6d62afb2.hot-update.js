webpackHotUpdate(5,{

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
            if (!(alStore.albums.length && alStore.posts.length)) {
              _context3.next = 11;
              break;
            }

            return _context3.abrupt("return", albumStore);

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
              initialState: Object(__WEBPACK_IMPORTED_MODULE_1_mobx_state_tree__["b" /* getSnapshot */])(store)
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

/***/ })

})
//# sourceMappingURL=5.462e49e096ce6d62afb2.hot-update.js.map