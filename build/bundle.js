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

/***/ "./src/client/Routes.ts":
/*!******************************!*\
  !*** ./src/client/Routes.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Home */ \"./src/client/components/Home.tsx\");\n/* harmony import */ var _components_LiederList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/LiederList */ \"./src/client/components/LiederList.tsx\");\n/* harmony import */ var _components_NoMatch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/NoMatch */ \"./src/client/components/NoMatch.tsx\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar routes = [_objectSpread(_objectSpread({}, _components_Home__WEBPACK_IMPORTED_MODULE_0__[\"default\"]), {}, {\n  path: '/'\n}), _objectSpread(_objectSpread({}, _components_LiederList__WEBPACK_IMPORTED_MODULE_1__[\"default\"]), {}, {\n  path: '/lieder'\n}), {\n  path: '*',\n  element: _components_NoMatch__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n}];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);\n\n//# sourceURL=webpack://server-side-rendering/./src/client/Routes.ts?");

/***/ }),

/***/ "./src/client/components/App.tsx":
/*!***************************************!*\
  !*** ./src/client/components/App.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Routes */ \"./src/client/Routes.ts\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Layout */ \"./src/client/components/Layout.tsx\");\n\n\n\n\n\nvar App = function App() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {\n    path: \"/\",\n    element: _Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"].element()\n  }, _Routes__WEBPACK_IMPORTED_MODULE_1__[\"default\"].map(function (_ref) {\n    var path = _ref.path,\n        C = _ref.element;\n    return (\n      /*#__PURE__*/\n      // @ts-ignore\n      react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {\n        key: path,\n        path: path,\n        element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(C, null)\n      })\n    );\n  }))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://server-side-rendering/./src/client/components/App.tsx?");

/***/ }),

/***/ "./src/client/components/Header.tsx":
/*!******************************************!*\
  !*** ./src/client/components/Header.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"/\"\n  }, \"Home\"), \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"/lieder\"\n  }, \"Lieder\"));\n});\n\n//# sourceURL=webpack://server-side-rendering/./src/client/components/Header.tsx?");

/***/ }),

/***/ "./src/client/components/Home.tsx":
/*!****************************************!*\
  !*** ./src/client/components/Home.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar Home = function Home() {\n  function authUser() {\n    var data = {\n      login: 'Maxim',\n      password: 'Stovba1234'\n    };\n    axios__WEBPACK_IMPORTED_MODULE_0___default().post('https://ya-praktikum.tech/api/v2/auth/signin', data, {\n      withCredentials: true\n    }).then(function (res) {\n      console.log(res);\n    })[\"catch\"](function (err) {\n      console.log(err);\n    });\n  }\n\n  function LogOut() {\n    axios__WEBPACK_IMPORTED_MODULE_0___default().post('https://ya-praktikum.tech/api/v2/auth/logout', {}, {\n      withCredentials: true\n    }).then(function (res) {\n      console.log(res);\n    })[\"catch\"](function (err) {\n      console.log(err);\n    });\n  }\n\n  function getUsers() {\n    var data = {\n      ratingFieldName: 'rating',\n      cursor: 0,\n      limit: 5\n    };\n    axios__WEBPACK_IMPORTED_MODULE_0___default().post('https://ya-praktikum.tech/api/v2/leaderboard/starship', data, {\n      withCredentials: true\n    }).then(function (res) {\n      console.log(res.data);\n    })[\"catch\"](function (err) {\n      console.log(err);\n    });\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", null, \"Home!\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"button\", {\n    onClick: function onClick() {\n      return authUser();\n    }\n  }, \"SignIn!\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"button\", {\n    onClick: function onClick() {\n      return LogOut();\n    }\n  }, \"LogOut!\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"button\", {\n    onClick: function onClick() {\n      return getUsers();\n    }\n  }, \"GetLieder!\"));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  element: Home\n});\n\n//# sourceURL=webpack://server-side-rendering/./src/client/components/Home.tsx?");

/***/ }),

/***/ "./src/client/components/Layout.tsx":
/*!******************************************!*\
  !*** ./src/client/components/Layout.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ \"./src/client/components/Header.tsx\");\n\n\n\n\nvar Layout = function Layout() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Outlet, null)));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  element: Layout\n});\n\n//# sourceURL=webpack://server-side-rendering/./src/client/components/Layout.tsx?");

/***/ }),

/***/ "./src/client/components/LiederList.tsx":
/*!**********************************************!*\
  !*** ./src/client/components/LiederList.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var store_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! store/actions */ \"./src/store/actions/index.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar LiederList = function LiederList() {\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n  var users = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {\n    return state.users;\n  });\n  react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(function () {\n    dispatch((0,store_actions__WEBPACK_IMPORTED_MODULE_0__.fetchUsers)());\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, users && users.map(function (user) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"li\", {\n      key: user.data.rating\n    }, user.data.first_name);\n  }));\n};\n\nfunction loadData(store) {\n  return store.dispatch((0,store_actions__WEBPACK_IMPORTED_MODULE_0__.fetchUsers)());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  element: LiederList,\n  loadData: loadData\n});\n\n//# sourceURL=webpack://server-side-rendering/./src/client/components/LiederList.tsx?");

/***/ }),

/***/ "./src/client/components/NoMatch.tsx":
/*!*******************************************!*\
  !*** ./src/client/components/NoMatch.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ NoMatch)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction NoMatch() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h2\", {\n    className: \"heading-center\"\n  }, \"Four Oh Four\");\n}\n\n//# sourceURL=webpack://server-side-rendering/./src/client/components/NoMatch.tsx?");

/***/ }),

/***/ "./src/server.tsx":
/*!************************!*\
  !*** ./src/server.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-polyfill */ \"babel-polyfill\");\n/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom/server */ \"react-router-dom/server\");\n/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom_server__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _client_Routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./client/Routes */ \"./src/client/Routes.ts\");\n/* harmony import */ var _store_createStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store/createStore */ \"./src/store/createStore.ts\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var client_components_App__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! client/components/App */ \"./src/client/components/App.tsx\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var set_cookie_parser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! set-cookie-parser */ \"./node_modules/set-cookie-parser/lib/set-cookie.js\");\n/* harmony import */ var set_cookie_parser__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(set_cookie_parser__WEBPACK_IMPORTED_MODULE_13__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_2___default()();\napp.use(cors__WEBPACK_IMPORTED_MODULE_11___default()());\napp.use('/signin', function (request, response) {\n  var data = {\n    login: 'Maxim',\n    password: 'Stovba1234'\n  };\n  axios__WEBPACK_IMPORTED_MODULE_12___default().post('https://ya-praktikum.tech/api/v2/auth/signin', data, {\n    withCredentials: true\n  }).then(function (res) {\n    // @ts-ignore\n    var cookies = set_cookie_parser__WEBPACK_IMPORTED_MODULE_13___default().parse(res, {\n      decodeValues: true // default: true\n\n    });\n    console.log(cookies);\n    cookies.forEach(function (cookieObject) {\n      return response.cookie(cookieObject.name, cookieObject.value);\n    });\n    response.send(res.data);\n  })[\"catch\"](function (err) {\n    console.log(err);\n    return err;\n  });\n});\napp.use('/leaderboard', function (request, response) {\n  var data = {\n    ratingFieldName: 'rating',\n    cursor: 0,\n    limit: 5\n  };\n  axios__WEBPACK_IMPORTED_MODULE_12___default().post('https://ya-praktikum.tech/api/v2/leaderboard/starship', data, {\n    withCredentials: true,\n    headers: {\n      'Access-Control-Allow-Origin': '*',\n      'Content-Type': 'application/json',\n      // @ts-ignore\n      'Cookie': request.headers.cookie\n    }\n  }).then(function (res) {\n    response.send(res.data);\n  })[\"catch\"](function (err) {\n    console.log(err);\n    response.send(err);\n  });\n});\napp.use(express__WEBPACK_IMPORTED_MODULE_2___default()[\"static\"]('public'));\napp.get('*', function (req, res, next) {\n  var _matchRoutes;\n\n  var store = (0,_store_createStore__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(req);\n  var promises = (_matchRoutes = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.matchRoutes)(_client_Routes__WEBPACK_IMPORTED_MODULE_7__[\"default\"], req.path)) === null || _matchRoutes === void 0 ? void 0 : _matchRoutes.map(function (_ref) {\n    var route = _ref.route;\n    // @ts-ignore\n    return route.loadData ? route.loadData(store) : null;\n  });\n  promises && Promise.all(promises).then(function () {\n    var content = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_5__.renderToString)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {\n      store: store\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom_server__WEBPACK_IMPORTED_MODULE_3__.StaticRouter, {\n      location: req.url\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(client_components_App__WEBPACK_IMPORTED_MODULE_10__[\"default\"], null))));\n    res.send(\"\\n        <html>\\n          <head></head>\\n          <body>\\n            <div id=\\\"root\\\">\".concat(content, \"</div>\\n            <script>\\n              window.INITIAL_STATE = \").concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_6___default()(store.getState()), \"\\n            </script>\\n            <script src=\\\"bundle.js\\\"></script>\\n          </body>\\n        </html>\\n      \"));\n  })[\"catch\"](next);\n});\napp.listen(3000, function () {\n  console.log('Listening on prot 3000');\n});\n\n//# sourceURL=webpack://server-side-rendering/./src/server.tsx?");

/***/ }),

/***/ "./src/store/actions/index.ts":
/*!************************************!*\
  !*** ./src/store/actions/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FETCH_USERS\": () => (/* binding */ FETCH_USERS),\n/* harmony export */   \"fetchUsers\": () => (/* binding */ fetchUsers)\n/* harmony export */ });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar FETCH_USERS = 'FETCH_USERS';\nvar dataPost = {\n  ratingFieldName: 'rating',\n  cursor: 0,\n  limit: 5\n};\nvar fetchUsers = function fetchUsers() {\n  return /*#__PURE__*/function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, axiosInstance) {\n      var res;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return axiosInstance.post('/api/v2/leaderboard/starship', dataPost, {\n                withCredentials: true\n              });\n\n            case 2:\n              res = _context.sent;\n              dispatch({\n                type: FETCH_USERS,\n                payload: res.data\n              });\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function (_x, _x2, _x3) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n};\n\n//# sourceURL=webpack://server-side-rendering/./src/store/actions/index.ts?");

/***/ }),

/***/ "./src/store/createStore.ts":
/*!**********************************!*\
  !*** ./src/store/createStore.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ \"./src/store/reducers/index.ts\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (req) {\n  var axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n    baseURL: 'https://ya-praktikum.tech',\n    headers: {\n      cookie: req.get('cookie') || ''\n    }\n  });\n  var store = (0,redux__WEBPACK_IMPORTED_MODULE_1__.createStore)(_reducers__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, (0,redux__WEBPACK_IMPORTED_MODULE_1__.applyMiddleware)(redux_thunk__WEBPACK_IMPORTED_MODULE_2___default().withExtraArgument(axiosInstance)));\n  return store;\n});\n\n//# sourceURL=webpack://server-side-rendering/./src/store/createStore.ts?");

/***/ }),

/***/ "./src/store/reducers/index.ts":
/*!*************************************!*\
  !*** ./src/store/reducers/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _usersReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./usersReducer */ \"./src/store/reducers/usersReducer.ts\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({\n  users: _usersReducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n}));\n\n//# sourceURL=webpack://server-side-rendering/./src/store/reducers/index.ts?");

/***/ }),

/***/ "./src/store/reducers/usersReducer.ts":
/*!********************************************!*\
  !*** ./src/store/reducers/usersReducer.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ \"./src/store/actions/index.ts\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actions__WEBPACK_IMPORTED_MODULE_0__.FETCH_USERS:\n      return action.payload;\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack://server-side-rendering/./src/store/reducers/usersReducer.ts?");

/***/ }),

/***/ "./node_modules/set-cookie-parser/lib/set-cookie.js":
/*!**********************************************************!*\
  !*** ./node_modules/set-cookie-parser/lib/set-cookie.js ***!
  \**********************************************************/
/***/ ((module) => {

eval("\n\nvar defaultParseOptions = {\n  decodeValues: true,\n  map: false,\n  silent: false,\n};\n\nfunction isNonEmptyString(str) {\n  return typeof str === \"string\" && !!str.trim();\n}\n\nfunction parseString(setCookieValue, options) {\n  var parts = setCookieValue.split(\";\").filter(isNonEmptyString);\n  var nameValue = parts.shift().split(\"=\");\n  var name = nameValue.shift();\n  var value = nameValue.join(\"=\"); // everything after the first =, joined by a \"=\" if there was more than one part\n\n  options = options\n    ? Object.assign({}, defaultParseOptions, options)\n    : defaultParseOptions;\n\n  try {\n    value = options.decodeValues ? decodeURIComponent(value) : value; // decode cookie value\n  } catch (e) {\n    console.error(\n      \"set-cookie-parser encountered an error while decoding a cookie with value '\" +\n        value +\n        \"'. Set options.decodeValues to false to disable this feature.\",\n      e\n    );\n  }\n\n  var cookie = {\n    name: name, // grab everything before the first =\n    value: value,\n  };\n\n  parts.forEach(function (part) {\n    var sides = part.split(\"=\");\n    var key = sides.shift().trimLeft().toLowerCase();\n    var value = sides.join(\"=\");\n    if (key === \"expires\") {\n      cookie.expires = new Date(value);\n    } else if (key === \"max-age\") {\n      cookie.maxAge = parseInt(value, 10);\n    } else if (key === \"secure\") {\n      cookie.secure = true;\n    } else if (key === \"httponly\") {\n      cookie.httpOnly = true;\n    } else if (key === \"samesite\") {\n      cookie.sameSite = value;\n    } else {\n      cookie[key] = value;\n    }\n  });\n\n  return cookie;\n}\n\nfunction parse(input, options) {\n  options = options\n    ? Object.assign({}, defaultParseOptions, options)\n    : defaultParseOptions;\n\n  if (!input) {\n    if (!options.map) {\n      return [];\n    } else {\n      return {};\n    }\n  }\n\n  if (input.headers && input.headers[\"set-cookie\"]) {\n    // fast-path for node.js (which automatically normalizes header names to lower-case\n    input = input.headers[\"set-cookie\"];\n  } else if (input.headers) {\n    // slow-path for other environments - see #25\n    var sch =\n      input.headers[\n        Object.keys(input.headers).find(function (key) {\n          return key.toLowerCase() === \"set-cookie\";\n        })\n      ];\n    // warn if called on a request-like object with a cookie header rather than a set-cookie header - see #34, 36\n    if (!sch && input.headers.cookie && !options.silent) {\n      console.warn(\n        \"Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning.\"\n      );\n    }\n    input = sch;\n  }\n  if (!Array.isArray(input)) {\n    input = [input];\n  }\n\n  options = options\n    ? Object.assign({}, defaultParseOptions, options)\n    : defaultParseOptions;\n\n  if (!options.map) {\n    return input.filter(isNonEmptyString).map(function (str) {\n      return parseString(str, options);\n    });\n  } else {\n    var cookies = {};\n    return input.filter(isNonEmptyString).reduce(function (cookies, str) {\n      var cookie = parseString(str, options);\n      cookies[cookie.name] = cookie;\n      return cookies;\n    }, cookies);\n  }\n}\n\n/*\n  Set-Cookie header field-values are sometimes comma joined in one string. This splits them without choking on commas\n  that are within a single set-cookie field-value, such as in the Expires portion.\n\n  This is uncommon, but explicitly allowed - see https://tools.ietf.org/html/rfc2616#section-4.2\n  Node.js does this for every header *except* set-cookie - see https://github.com/nodejs/node/blob/d5e363b77ebaf1caf67cd7528224b651c86815c1/lib/_http_incoming.js#L128\n  React Native's fetch does this for *every* header, including set-cookie.\n\n  Based on: https://github.com/google/j2objc/commit/16820fdbc8f76ca0c33472810ce0cb03d20efe25\n  Credits to: https://github.com/tomball for original and https://github.com/chrusart for JavaScript implementation\n*/\nfunction splitCookiesString(cookiesString) {\n  if (Array.isArray(cookiesString)) {\n    return cookiesString;\n  }\n  if (typeof cookiesString !== \"string\") {\n    return [];\n  }\n\n  var cookiesStrings = [];\n  var pos = 0;\n  var start;\n  var ch;\n  var lastComma;\n  var nextStart;\n  var cookiesSeparatorFound;\n\n  function skipWhitespace() {\n    while (pos < cookiesString.length && /\\s/.test(cookiesString.charAt(pos))) {\n      pos += 1;\n    }\n    return pos < cookiesString.length;\n  }\n\n  function notSpecialChar() {\n    ch = cookiesString.charAt(pos);\n\n    return ch !== \"=\" && ch !== \";\" && ch !== \",\";\n  }\n\n  while (pos < cookiesString.length) {\n    start = pos;\n    cookiesSeparatorFound = false;\n\n    while (skipWhitespace()) {\n      ch = cookiesString.charAt(pos);\n      if (ch === \",\") {\n        // ',' is a cookie separator if we have later first '=', not ';' or ','\n        lastComma = pos;\n        pos += 1;\n\n        skipWhitespace();\n        nextStart = pos;\n\n        while (pos < cookiesString.length && notSpecialChar()) {\n          pos += 1;\n        }\n\n        // currently special character\n        if (pos < cookiesString.length && cookiesString.charAt(pos) === \"=\") {\n          // we found cookies separator\n          cookiesSeparatorFound = true;\n          // pos is inside the next cookie, so back up and return it.\n          pos = nextStart;\n          cookiesStrings.push(cookiesString.substring(start, lastComma));\n          start = pos;\n        } else {\n          // in param ',' or param separator ';',\n          // we continue from that comma\n          pos = lastComma + 1;\n        }\n      } else {\n        pos += 1;\n      }\n    }\n\n    if (!cookiesSeparatorFound || pos >= cookiesString.length) {\n      cookiesStrings.push(cookiesString.substring(start, cookiesString.length));\n    }\n  }\n\n  return cookiesStrings;\n}\n\nmodule.exports = parse;\nmodule.exports.parse = parse;\nmodule.exports.parseString = parseString;\nmodule.exports.splitCookiesString = splitCookiesString;\n\n\n//# sourceURL=webpack://server-side-rendering/./node_modules/set-cookie-parser/lib/set-cookie.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("babel-polyfill");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-router-dom");

/***/ }),

/***/ "react-router-dom/server":
/*!******************************************!*\
  !*** external "react-router-dom/server" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("react-router-dom/server");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("redux-thunk");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("serialize-javascript");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server.tsx");
/******/ 	
/******/ })()
;