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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Home */ \"./src/client/components/Home.tsx\");\n/* harmony import */ var _components_LiederList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/LiederList */ \"./src/client/components/LiederList.tsx\");\n/* harmony import */ var _components_NoMatch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/NoMatch */ \"./src/client/components/NoMatch.tsx\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar routes = [_objectSpread(_objectSpread({}, _components_Home__WEBPACK_IMPORTED_MODULE_0__[\"default\"]), {}, {\n  path: '/'\n}), _objectSpread(_objectSpread({}, _components_LiederList__WEBPACK_IMPORTED_MODULE_1__[\"default\"]), {}, {\n  path: '/leader'\n}), {\n  path: '*',\n  element: _components_NoMatch__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n}];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);\n\n//# sourceURL=webpack://server-side-rendering/./src/client/Routes.ts?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"/\"\n  }, \"Home\"), \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"/leader\"\n  }, \"Lieder\"));\n});\n\n//# sourceURL=webpack://server-side-rendering/./src/client/components/Header.tsx?");

/***/ }),

/***/ "./src/client/components/Home.tsx":
/*!****************************************!*\
  !*** ./src/client/components/Home.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var store_actions_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! store/actions/settings */ \"./src/store/actions/settings.ts\");\n// import axios from 'axios';\n\n\n\n\nvar Home = function Home() {\n  function authUser() {\n    var data = {\n      login: 'Maxim',\n      password: 'Stovba1234'\n    };\n    axios__WEBPACK_IMPORTED_MODULE_1___default().post('/signin', data, {\n      withCredentials: true\n    }).then(function (res) {\n      console.log(res.data);\n    })[\"catch\"](function (err) {\n      console.log(err);\n    });\n  }\n\n  function LogOut() {\n    axios__WEBPACK_IMPORTED_MODULE_1___default().post('/logout', {}, {\n      withCredentials: true\n    }).then(function (res) {\n      console.log(res.data);\n    })[\"catch\"](function (err) {\n      console.log(err);\n    });\n  }\n\n  function getUsers() {\n    axios__WEBPACK_IMPORTED_MODULE_1___default().post('/leaderboard', {}, {\n      withCredentials: true\n    }).then(function (res) {\n      console.log(res);\n    })[\"catch\"](function (err) {\n      console.log(err);\n    });\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, \"Home!\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    onClick: function onClick() {\n      return authUser();\n    }\n  }, \"SignIn!\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    onClick: function onClick() {\n      return LogOut();\n    }\n  }, \"LogOut!\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    onClick: function onClick() {\n      return getUsers();\n    }\n  }, \"getLeader!\"));\n};\n\nfunction loadData(store) {\n  return store.dispatch((0,store_actions_settings__WEBPACK_IMPORTED_MODULE_2__.getUserActions)());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  element: Home // loadData,\n\n});\n\n//# sourceURL=webpack://server-side-rendering/./src/client/components/Home.tsx?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _store_actions_mode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/actions/mode */ \"./src/store/actions/mode.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar LiederList = function LiederList() {\n  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {\n    return state.mode;\n  }),\n      leader = _useSelector.leader;\n\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n  react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(function () {\n    dispatch((0,_store_actions_mode__WEBPACK_IMPORTED_MODULE_0__.getLeader)());\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, leader && leader.map(function (user) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"li\", {\n      key: user.data.rating\n    }, user.data.first_name);\n  }));\n};\n\nfunction loadData(store) {\n  return store.dispatch((0,_store_actions_mode__WEBPACK_IMPORTED_MODULE_0__.getLeader)());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  element: LiederList,\n  loadData: loadData\n});\n\n//# sourceURL=webpack://server-side-rendering/./src/client/components/LiederList.tsx?");

/***/ }),

/***/ "./src/client/components/NoMatch.tsx":
/*!*******************************************!*\
  !*** ./src/client/components/NoMatch.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ NoMatch)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction NoMatch() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h2\", {\n    className: \"heading-center\"\n  }, \"Four Oh Four\");\n}\n\n//# sourceURL=webpack://server-side-rendering/./src/client/components/NoMatch.tsx?");

/***/ }),

/***/ "./src/controllers/index.ts":
/*!**********************************!*\
  !*** ./src/controllers/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"leaderboardControllers\": () => (/* binding */ leaderboardControllers),\n/* harmony export */   \"logOutControllers\": () => (/* binding */ logOutControllers),\n/* harmony export */   \"signInControllers\": () => (/* binding */ signInControllers)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var set_cookie_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! set-cookie-parser */ \"set-cookie-parser\");\n/* harmony import */ var set_cookie_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(set_cookie_parser__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar __DATA__ = {\n  ratingFieldName: 'rating',\n  cursor: 0,\n  limit: 5\n};\nvar signInControllers = function signInControllers(request, response) {\n  axios__WEBPACK_IMPORTED_MODULE_0___default().post('https://ya-praktikum.tech/api/v2/auth/signin', request.body, {\n    withCredentials: true\n  }).then(function (res) {\n    // @ts-ignore\n    var cookies = set_cookie_parser__WEBPACK_IMPORTED_MODULE_1___default().parse(res, {\n      decodeValues: true // default: true\n\n    });\n    cookies.forEach(function (cookieObject) {\n      return response.cookie(cookieObject.name, cookieObject.value);\n    });\n    response.send(res.data);\n  })[\"catch\"](function (err) {\n    console.log(err);\n    return err;\n  });\n};\nvar logOutControllers = function logOutControllers(request, response) {\n  axios__WEBPACK_IMPORTED_MODULE_0___default().post('https://ya-praktikum.tech/api/v2/auth/logout', {}, {\n    withCredentials: true,\n    headers: {\n      'Access-Control-Allow-Origin': '*',\n      'Content-Type': 'application/json',\n      // @ts-ignore\n      Cookie: request.headers.cookie ? request.headers.cookie : ''\n    }\n  }).then(function (res) {\n    // @ts-ignore\n    var cookies = set_cookie_parser__WEBPACK_IMPORTED_MODULE_1___default().parse(res, {\n      decodeValues: true // default: true\n\n    });\n    cookies.forEach(function (cookieObject) {\n      return response.cookie(cookieObject.name, cookieObject.value, {\n        maxAge: 0,\n        httpOnly: true\n      });\n    });\n    response.send(res.data);\n  })[\"catch\"](function (err) {\n    console.log(err);\n    return err;\n  });\n};\nvar leaderboardControllers = function leaderboardControllers(request, response) {\n  axios__WEBPACK_IMPORTED_MODULE_0___default().post('https://ya-praktikum.tech/api/v2/leaderboard/starship', __DATA__, {\n    withCredentials: true,\n    headers: {\n      'Access-Control-Allow-Origin': '*',\n      'Content-Type': 'application/json',\n      // @ts-ignore\n      Cookie: request.headers.cookie ? request.headers.cookie : ''\n    }\n  }).then(function (res) {\n    response.send(res.data);\n  })[\"catch\"](function (err) {\n    console.log(err);\n    return err;\n  });\n};\n\n//# sourceURL=webpack://server-side-rendering/./src/controllers/index.ts?");

/***/ }),

/***/ "./src/init/index.ts":
/*!***************************!*\
  !*** ./src/init/index.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"User\": () => (/* binding */ User),\n/* harmony export */   \"dbConnect\": () => (/* binding */ dbConnect),\n/* harmony export */   \"sequelize\": () => (/* binding */ sequelize)\n/* harmony export */ });\n/* harmony import */ var sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize-typescript */ \"sequelize-typescript\");\n/* harmony import */ var sequelize_typescript__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/user */ \"./src/models/user.ts\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\nvar sequelizeOptions = {\n  host: 'localhost',\n  port: 5432,\n  username: 'postgres',\n  password: 'newPassword',\n  database: 'my-db-name',\n  dialect: 'postgres' // 'mysql', 'sqlite', 'mariadb', 'mssql'\n\n}; // Создаем инстанс Sequelize\n\nvar sequelize = new sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.Sequelize(sequelizeOptions); // Инициализируем модели\n\nvar User = sequelize.define('User', _models_user__WEBPACK_IMPORTED_MODULE_1__.userModel, {});\nfunction dbConnect() {\n  return _dbConnect.apply(this, arguments);\n}\n\nfunction _dbConnect() {\n  _dbConnect = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return sequelize.authenticate();\n\n          case 3:\n            _context.next = 5;\n            return sequelize.sync();\n\n          case 5:\n            // Синхронизация базы данных\n            console.log('Connection has been established successfully.');\n            _context.next = 11;\n            break;\n\n          case 8:\n            _context.prev = 8;\n            _context.t0 = _context[\"catch\"](0);\n            console.error('Unable to connect to the database:', _context.t0);\n\n          case 11:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 8]]);\n  }));\n  return _dbConnect.apply(this, arguments);\n}\n\n//# sourceURL=webpack://server-side-rendering/./src/init/index.ts?");

/***/ }),

/***/ "./src/middlewares/auth.ts":
/*!*********************************!*\
  !*** ./src/middlewares/auth.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth)\n/* harmony export */ });\nvar auth = function auth(req, res, next) {\n  var uuid = req.cookies && req.cookies.uuid ? req.cookies.uuid : null;\n  console.log(uuid); // if (!uuid) {\n  //   return res\n  //     .status(401)\n  //     .send({ message: 'Необходима авторизация' });\n  // }\n\n  next(); // пропускаем запрос дальше\n\n  return null;\n};\n\n//# sourceURL=webpack://server-side-rendering/./src/middlewares/auth.ts?");

/***/ }),

/***/ "./src/models/user.ts":
/*!****************************!*\
  !*** ./src/models/user.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"userModel\": () => (/* binding */ userModel)\n/* harmony export */ });\n/* harmony import */ var sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize-typescript */ \"sequelize-typescript\");\n/* harmony import */ var sequelize_typescript__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__);\n\nvar userModel = {\n  firstName: {\n    type: sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.DataType.STRING,\n    allowNull: false\n  },\n  lastName: {\n    type: sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__.DataType.STRING\n  }\n};\n\n//# sourceURL=webpack://server-side-rendering/./src/models/user.ts?");

/***/ }),

/***/ "./src/server.tsx":
/*!************************!*\
  !*** ./src/server.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createUser\": () => (/* binding */ createUser),\n/* harmony export */   \"deleteUserById\": () => (/* binding */ deleteUserById),\n/* harmony export */   \"getUserById\": () => (/* binding */ getUserById),\n/* harmony export */   \"getUsersByFirstName\": () => (/* binding */ getUsersByFirstName),\n/* harmony export */   \"updateUserById\": () => (/* binding */ updateUserById)\n/* harmony export */ });\n/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-polyfill */ \"babel-polyfill\");\n/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom/server */ \"react-router-dom/server\");\n/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom_server__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _client_Routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./client/Routes */ \"./src/client/Routes.ts\");\n/* harmony import */ var _store_createStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store/createStore */ \"./src/store/createStore.ts\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var client_components_App__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! client/components/App */ \"./src/client/components/App.tsx\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var middlewares_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! middlewares/auth */ \"./src/middlewares/auth.ts\");\n/* harmony import */ var controllers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! controllers */ \"./src/controllers/index.ts\");\n/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./init */ \"./src/init/index.ts\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n // pg\n\n\n\n// Создание пользователя\nfunction createUser(_x, _x2) {\n  return _createUser.apply(this, arguments);\n} // Обновление пользователя по ID\n\nfunction _createUser() {\n  _createUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(firstName, lastName) {\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            return _context2.abrupt(\"return\", _init__WEBPACK_IMPORTED_MODULE_16__.User.create({\n              firstName: firstName,\n              lastName: lastName\n            }));\n\n          case 1:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n  return _createUser.apply(this, arguments);\n}\n\nfunction updateUserById(_x3, _x4) {\n  return _updateUserById.apply(this, arguments);\n} // Удаление пользователя по ID\n\nfunction _updateUserById() {\n  _updateUserById = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(id, data) {\n    return regeneratorRuntime.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            return _context3.abrupt(\"return\", _init__WEBPACK_IMPORTED_MODULE_16__.User.update(data, {\n              where: {\n                id: id\n              }\n            }));\n\n          case 1:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n  return _updateUserById.apply(this, arguments);\n}\n\nfunction deleteUserById(_x5) {\n  return _deleteUserById.apply(this, arguments);\n} // Получение пользователя по ID\n\nfunction _deleteUserById() {\n  _deleteUserById = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(id) {\n    return regeneratorRuntime.wrap(function _callee4$(_context4) {\n      while (1) {\n        switch (_context4.prev = _context4.next) {\n          case 0:\n            return _context4.abrupt(\"return\", _init__WEBPACK_IMPORTED_MODULE_16__.User.destroy({\n              where: {\n                id: id\n              }\n            }));\n\n          case 1:\n          case \"end\":\n            return _context4.stop();\n        }\n      }\n    }, _callee4);\n  }));\n  return _deleteUserById.apply(this, arguments);\n}\n\nfunction getUserById(_x6) {\n  return _getUserById.apply(this, arguments);\n} // Получение пользователей по ID\n\nfunction _getUserById() {\n  _getUserById = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(id) {\n    return regeneratorRuntime.wrap(function _callee5$(_context5) {\n      while (1) {\n        switch (_context5.prev = _context5.next) {\n          case 0:\n            return _context5.abrupt(\"return\", _init__WEBPACK_IMPORTED_MODULE_16__.User.findOne({\n              where: {\n                id: id\n              }\n            }));\n\n          case 1:\n          case \"end\":\n            return _context5.stop();\n        }\n      }\n    }, _callee5);\n  }));\n  return _getUserById.apply(this, arguments);\n}\n\nfunction getUsersByFirstName(_x7) {\n  return _getUsersByFirstName.apply(this, arguments);\n}\n\nfunction _getUsersByFirstName() {\n  _getUsersByFirstName = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(firstName) {\n    return regeneratorRuntime.wrap(function _callee6$(_context6) {\n      while (1) {\n        switch (_context6.prev = _context6.next) {\n          case 0:\n            return _context6.abrupt(\"return\", _init__WEBPACK_IMPORTED_MODULE_16__.User.findAll({\n              where: {\n                firstName: firstName\n              }\n            }));\n\n          case 1:\n          case \"end\":\n            return _context6.stop();\n        }\n      }\n    }, _callee6);\n  }));\n  return _getUsersByFirstName.apply(this, arguments);\n}\n\n(0,_init__WEBPACK_IMPORTED_MODULE_16__.dbConnect)().then( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n  var users, id, findedUser, app;\n  return regeneratorRuntime.wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return createUser('Alex', 'Ivanov');\n\n        case 2:\n          _context.next = 4;\n          return getUsersByFirstName('Alex');\n\n        case 4:\n          users = _context.sent;\n\n          if (users.length) {\n            _context.next = 7;\n            break;\n          }\n\n          throw 'Not found';\n\n        case 7:\n          // Получаем id первого пользователя\n          id = users[0].id; // Обновляем пользователя по ID\n\n          _context.next = 10;\n          return updateUserById(id, {\n            firstName: 'Ivan',\n            lastName: 'Ivanov'\n          });\n\n        case 10:\n          _context.next = 12;\n          return getUserById(id);\n\n        case 12:\n          findedUser = _context.sent;\n          // Выводим в консоль найденного пользователя\n          console.log('Finded user: ', findedUser);\n          app = express__WEBPACK_IMPORTED_MODULE_2___default()();\n          app.use(cors__WEBPACK_IMPORTED_MODULE_11___default()());\n          app.use(cookie_parser__WEBPACK_IMPORTED_MODULE_13___default()());\n          app.use(body_parser__WEBPACK_IMPORTED_MODULE_12___default().json());\n          app.use('/signin', controllers__WEBPACK_IMPORTED_MODULE_15__.signInControllers);\n          app.use('/logout', controllers__WEBPACK_IMPORTED_MODULE_15__.logOutControllers);\n          app.use(middlewares_auth__WEBPACK_IMPORTED_MODULE_14__.auth);\n          app.use('/leaderboard', controllers__WEBPACK_IMPORTED_MODULE_15__.leaderboardControllers);\n          app.use(express__WEBPACK_IMPORTED_MODULE_2___default()[\"static\"]('public'));\n          app.get('*', function (req, res, next) {\n            var _matchRoutes;\n\n            var store = (0,_store_createStore__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(req);\n            var promises = (_matchRoutes = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.matchRoutes)(_client_Routes__WEBPACK_IMPORTED_MODULE_7__[\"default\"], req.url)) === null || _matchRoutes === void 0 ? void 0 : _matchRoutes.map(function (_ref2) {\n              var route = _ref2.route;\n              // const promises = routes.map((route) => {\n              // @ts-ignore\n              return route.loadData ? route.loadData(store) : null;\n            });\n            promises && Promise.all(promises).then(function () {\n              var content = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_5__.renderToString)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {\n                store: store\n              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom_server__WEBPACK_IMPORTED_MODULE_3__.StaticRouter, {\n                location: req.url\n              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(client_components_App__WEBPACK_IMPORTED_MODULE_10__[\"default\"], null))));\n              res.send(\"\\n        <html>\\n          <head></head>\\n          <body>\\n            <div id=\\\"root\\\">\".concat(content, \"</div>\\n            <script>\\n              window.INITIAL_STATE = \").concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_6___default()(store.getState()), \"\\n            </script>\\n            <script src=\\\"bundle.js\\\"></script>\\n          </body>\\n        </html>\\n      \"));\n            })[\"catch\"](next);\n          });\n          app.listen(3000, function () {\n            console.log('Listening on prot 3000');\n          });\n\n        case 25:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee);\n})));\n\n//# sourceURL=webpack://server-side-rendering/./src/server.tsx?");

/***/ }),

/***/ "./src/store/actions/auth.ts":
/*!***********************************!*\
  !*** ./src/store/actions/auth.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AUTH_ACTIONS\": () => (/* binding */ AUTH_ACTIONS),\n/* harmony export */   \"logOutActions\": () => (/* binding */ logOutActions),\n/* harmony export */   \"signInActions\": () => (/* binding */ signInActions)\n/* harmony export */ });\n/* eslint-disable import/prefer-default-export */\nvar AUTH_ACTIONS = {\n  LOGIN: 'LOGIN',\n  LOGOUT: 'LOGOUT',\n  REGISTER: 'REGISTER'\n};\nfunction signInActions(payload) {\n  return {\n    type: AUTH_ACTIONS.LOGIN,\n    payload: payload\n  };\n}\nfunction logOutActions() {\n  return {\n    type: AUTH_ACTIONS.LOGOUT\n  };\n}\n\n//# sourceURL=webpack://server-side-rendering/./src/store/actions/auth.ts?");

/***/ }),

/***/ "./src/store/actions/game.ts":
/*!***********************************!*\
  !*** ./src/store/actions/game.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ACTIONS\": () => (/* binding */ ACTIONS),\n/* harmony export */   \"setGameScore\": () => (/* binding */ setGameScore),\n/* harmony export */   \"setIsGameQuited\": () => (/* binding */ setIsGameQuited),\n/* harmony export */   \"setIsGameStarted\": () => (/* binding */ setIsGameStarted),\n/* harmony export */   \"toggleGameFullscreen\": () => (/* binding */ toggleGameFullscreen)\n/* harmony export */ });\n/* eslint-disable import/prefer-default-export */\nvar ACTIONS = {\n  TOGGLE_FULLSCREEN: 'TOGGLE_FULLSCREEN',\n  SET_SCORE: 'SET_SCORE',\n  SET_IS_GAME: 'SET_IS_GAME',\n  SET_IS_QUIT: 'SET_IS_QUIT'\n};\nfunction toggleGameFullscreen() {\n  return {\n    type: ACTIONS.TOGGLE_FULLSCREEN\n  };\n}\nfunction setGameScore(payload) {\n  return {\n    type: ACTIONS.SET_SCORE,\n    payload: payload\n  };\n}\nfunction setIsGameStarted(payload) {\n  return {\n    type: ACTIONS.SET_IS_GAME,\n    payload: payload\n  };\n}\nfunction setIsGameQuited(payload) {\n  return {\n    type: ACTIONS.SET_IS_QUIT,\n    payload: payload\n  };\n}\n\n//# sourceURL=webpack://server-side-rendering/./src/store/actions/game.ts?");

/***/ }),

/***/ "./src/store/actions/mode.ts":
/*!***********************************!*\
  !*** ./src/store/actions/mode.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ACTIONS\": () => (/* binding */ ACTIONS),\n/* harmony export */   \"getLeader\": () => (/* binding */ getLeader),\n/* harmony export */   \"setGeolocation\": () => (/* binding */ setGeolocation),\n/* harmony export */   \"toggleColorTheme\": () => (/* binding */ toggleColorTheme)\n/* harmony export */ });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n/* eslint-disable import/prefer-default-export */\nvar ACTIONS = {\n  TOGGLE_MODE: 'TOGGLE_MODE',\n  GEOLOCATION: 'GEOLOCATION',\n  GET_LEADER: 'GET_LEADER'\n};\nvar __DATA__ = {\n  ratingFieldName: 'rating',\n  cursor: 0,\n  limit: 5\n};\nfunction toggleColorTheme() {\n  return {\n    type: ACTIONS.TOGGLE_MODE\n  };\n}\nfunction setGeolocation(payload) {\n  return {\n    type: ACTIONS.GEOLOCATION,\n    payload: payload\n  };\n}\nvar getLeader = function getLeader() {\n  return /*#__PURE__*/function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, axiosInstance) {\n      var res;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return axiosInstance.post('/leaderboard/starship', __DATA__, {\n                withCredentials: true\n              });\n\n            case 2:\n              res = _context.sent;\n              dispatch({\n                type: ACTIONS.GET_LEADER,\n                payload: res.data\n              });\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function (_x, _x2, _x3) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n};\n\n//# sourceURL=webpack://server-side-rendering/./src/store/actions/mode.ts?");

/***/ }),

/***/ "./src/store/actions/settings.ts":
/*!***************************************!*\
  !*** ./src/store/actions/settings.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ACTIONS\": () => (/* binding */ ACTIONS),\n/* harmony export */   \"deleteUserSettings\": () => (/* binding */ deleteUserSettings),\n/* harmony export */   \"getUserActions\": () => (/* binding */ getUserActions),\n/* harmony export */   \"setUserSettings\": () => (/* binding */ setUserSettings)\n/* harmony export */ });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n/* eslint-disable import/prefer-default-export */\nvar ACTIONS = {\n  GET_USER: 'GET_USER',\n  SAVE: 'SAVE',\n  RESET: 'RESET'\n};\nfunction setUserSettings(payload) {\n  return {\n    type: ACTIONS.SAVE,\n    payload: payload\n  };\n}\nfunction deleteUserSettings() {\n  return {\n    type: ACTIONS.RESET\n  };\n}\nvar getUserActions = function getUserActions() {\n  return /*#__PURE__*/function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, axiosInstance) {\n      var res;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return axiosInstance.get('/auth/user', {}, {\n                withCredentials: true\n              });\n\n            case 2:\n              res = _context.sent;\n              dispatch({\n                type: ACTIONS.GET_USER,\n                payload: res.data\n              });\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function (_x, _x2, _x3) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n};\n\n//# sourceURL=webpack://server-side-rendering/./src/store/actions/settings.ts?");

/***/ }),

/***/ "./src/store/createStore.ts":
/*!**********************************!*\
  !*** ./src/store/createStore.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ \"./src/store/reducers/index.ts\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (req) {\n  var axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n    baseURL: 'https://ya-praktikum.tech/api/v2',\n    headers: {\n      cookie: req.get('cookie') || ''\n    }\n  });\n  var store = (0,redux__WEBPACK_IMPORTED_MODULE_1__.createStore)(_reducers__WEBPACK_IMPORTED_MODULE_3__.rootReducer, {}, (0,redux__WEBPACK_IMPORTED_MODULE_1__.applyMiddleware)(redux_thunk__WEBPACK_IMPORTED_MODULE_2___default().withExtraArgument(axiosInstance)));\n  return store;\n});\n\n//# sourceURL=webpack://server-side-rendering/./src/store/createStore.ts?");

/***/ }),

/***/ "./src/store/reducers/auth.ts":
/*!************************************!*\
  !*** ./src/store/reducers/auth.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authReducer\": () => (/* binding */ authReducer)\n/* harmony export */ });\n/* harmony import */ var store_actions_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! store/actions/auth */ \"./src/store/actions/auth.ts\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/* eslint-disable import/prefer-default-export */\n\nvar defaultState = {\n  isLogined: false,\n  signInError: ''\n};\nfunction authReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n\n  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},\n      type = _ref.type,\n      payload = _ref.payload;\n\n  switch (type) {\n    // Авторизация\n    case store_actions_auth__WEBPACK_IMPORTED_MODULE_0__.AUTH_ACTIONS.LOGIN:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLogined: payload.isLogined,\n        signInError: payload.error\n      });\n    // Выход\n\n    case store_actions_auth__WEBPACK_IMPORTED_MODULE_0__.AUTH_ACTIONS.LOGOUT:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLogined: false\n      });\n    // Регистрация\n\n    case store_actions_auth__WEBPACK_IMPORTED_MODULE_0__.AUTH_ACTIONS.REGISTER:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isRegistered: payload.isRegistered,\n        signUpError: payload.error\n      });\n\n    default:\n      return state;\n  }\n} // // Асинхронная авторизация\n// export function logIn(loginData: TCredintials) {\n//   return async (dispatch: Dispatch) => {\n//     try {\n//       await Auth.signIn(loginData)\n//         .then((response) => {\n//           // Если авторизация успешна\n//           if (response.status === 200) {\n//             dispatch({\n//               type: ACTIONS.LOGIN,\n//               payload: {\n//                 isLogined: true,\n//                 error: '',\n//               },\n//             });\n//             return;\n//           }\n//           if (response.status === 400) {\n//             dispatch(logOut() as any);\n//             throw new Error('Юзер уже авторизован, и не должен попадать на эту страницу');\n//           }\n//           if (response.status === 401) {\n//             dispatch({\n//               type: ACTIONS.LOGIN,\n//               payload: {\n//                 isLogined: false,\n//                 error: 'Неверные имя пользователя или пароль',\n//               },\n//             });\n//             throw new Error('Неверные имя пользователя или пароль');\n//           }\n//         })\n//         .then(() => Auth.getUserData()\n//           .then((response) => {\n//             if (response.status === 200) {\n//               return response.data;\n//             }\n//             throw new Error('Ошибка при получении данных пользователя');\n//           })\n//           .then((userData) => {\n//             dispatch(setUserSettings(userData));\n//           }));\n//     } catch (error) {\n//       console.log(error);\n//     }\n//   };\n// }\n// // Асинхронный выход\n// export function logOut() {\n//   return async (dispatch: Dispatch) => {\n//     // Выполяем логаут\n//     try {\n//       await Auth.logOut();\n//       dispatch(deleteUserSettings());\n//       // Обновляем стейт\n//       dispatch({\n//         type: ACTIONS.LOGOUT,\n//       });\n//     } catch (error) {\n//       console.log(error);\n//     }\n//   };\n// }\n// // Асинхронная регистрация\n// export function registerUser(userData: TCredintials) {\n//   return async (dispatch: Dispatch) => {\n//     try {\n//       await Auth.signUp(userData)\n//         .then((response) => {\n//           if (response.status === 200) {\n//             // Успешная регистрация\n//             dispatch({\n//               type: ACTIONS.REGISTER,\n//               isRegistered: true,\n//               signUpError: '',\n//             });\n//           }\n//           if (response.status === 400) {\n//             // FIXME: Авторизованый юзер не должен попадать в этот роут\n//             dispatch(logOut() as any);\n//             // Успешная регистрация\n//             dispatch({\n//               type: ACTIONS.REGISTER,\n//               isRegistered: false,\n//               signUpError: 'Ошибка при создании пользователя (уже авторизован)',\n//             });\n//           }\n//           if (response.status === 409) {\n//             dispatch({\n//               type: ACTIONS.REGISTER,\n//               isRegistered: false,\n//               signUpError: 'Пользователь с таким имейлом уже существует',\n//             });\n//           }\n//           return response.data;\n//         }).then((parsedResponse) => {\n//           console.log(parsedResponse);\n//         });\n//     } catch (error) {\n//       console.log(error);\n//     }\n//   };\n// }\n\n//# sourceURL=webpack://server-side-rendering/./src/store/reducers/auth.ts?");

/***/ }),

/***/ "./src/store/reducers/game.ts":
/*!************************************!*\
  !*** ./src/store/reducers/game.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gameReducer\": () => (/* binding */ gameReducer)\n/* harmony export */ });\n/* harmony import */ var store_actions_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! store/actions/game */ \"./src/store/actions/game.ts\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/* eslint-disable import/prefer-default-export */\n\nvar defaultState = {\n  isFullscreen: false,\n  score: 0,\n  isGameStarted: false,\n  isGameQuited: false\n};\nfunction gameReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n\n  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},\n      type = _ref.type,\n      payload = _ref.payload;\n\n  switch (type) {\n    case store_actions_game__WEBPACK_IMPORTED_MODULE_0__.ACTIONS.TOGGLE_FULLSCREEN:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isFullscreen: !state.isFullscreen\n      });\n\n    case store_actions_game__WEBPACK_IMPORTED_MODULE_0__.ACTIONS.SET_SCORE:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        score: payload.score\n      });\n\n    case store_actions_game__WEBPACK_IMPORTED_MODULE_0__.ACTIONS.SET_IS_GAME:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isGameStarted: payload.isGameStarted\n      });\n\n    case store_actions_game__WEBPACK_IMPORTED_MODULE_0__.ACTIONS.SET_IS_QUIT:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isGameQuited: payload.isGameQuited\n      });\n\n    default:\n      return state;\n  }\n}\n\n//# sourceURL=webpack://server-side-rendering/./src/store/reducers/game.ts?");

/***/ }),

/***/ "./src/store/reducers/index.ts":
/*!*************************************!*\
  !*** ./src/store/reducers/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"rootReducer\": () => (/* binding */ rootReducer)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth */ \"./src/store/reducers/auth.ts\");\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings */ \"./src/store/reducers/settings.ts\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game */ \"./src/store/reducers/game.ts\");\n/* harmony import */ var _mode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mode */ \"./src/store/reducers/mode.ts\");\n\n\n\n\n\nvar rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({\n  auth: _auth__WEBPACK_IMPORTED_MODULE_1__.authReducer,\n  settings: _settings__WEBPACK_IMPORTED_MODULE_2__.settingsReducer,\n  game: _game__WEBPACK_IMPORTED_MODULE_3__.gameReducer,\n  mode: _mode__WEBPACK_IMPORTED_MODULE_4__.modeReducer\n});\n\n//# sourceURL=webpack://server-side-rendering/./src/store/reducers/index.ts?");

/***/ }),

/***/ "./src/store/reducers/mode.ts":
/*!************************************!*\
  !*** ./src/store/reducers/mode.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"modeReducer\": () => (/* binding */ modeReducer)\n/* harmony export */ });\n/* harmony import */ var store_actions_mode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! store/actions/mode */ \"./src/store/actions/mode.ts\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/* eslint-disable import/prefer-default-export */\n\nvar defaultState = {\n  mode: 'light',\n  city: '',\n  leader: []\n};\nfunction modeReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n\n  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},\n      type = _ref.type,\n      payload = _ref.payload;\n\n  switch (type) {\n    case store_actions_mode__WEBPACK_IMPORTED_MODULE_0__.ACTIONS.TOGGLE_MODE:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        mode: state.mode === 'light' ? 'dark' : 'light'\n      });\n\n    case store_actions_mode__WEBPACK_IMPORTED_MODULE_0__.ACTIONS.GEOLOCATION:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        city: payload.city\n      });\n\n    case store_actions_mode__WEBPACK_IMPORTED_MODULE_0__.ACTIONS.GET_LEADER:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        leader: payload\n      });\n\n    default:\n      return state;\n  }\n}\n\n//# sourceURL=webpack://server-side-rendering/./src/store/reducers/mode.ts?");

/***/ }),

/***/ "./src/store/reducers/settings.ts":
/*!****************************************!*\
  !*** ./src/store/reducers/settings.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"settingsReducer\": () => (/* binding */ settingsReducer)\n/* harmony export */ });\n/* harmony import */ var store_actions_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! store/actions/settings */ \"./src/store/actions/settings.ts\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n// eslint-disable-next-line import/prefer-default-export\n\nvar defaultState = {\n  first_name: '',\n  second_name: '',\n  login: '',\n  email: '',\n  phone: '',\n  avatar: '',\n  display_name: '',\n  id: ''\n};\nfunction settingsReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n\n  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},\n      type = _ref.type,\n      payload = _ref.payload;\n\n  switch (type) {\n    case store_actions_settings__WEBPACK_IMPORTED_MODULE_0__.ACTIONS.GET_USER:\n      return _objectSpread(_objectSpread({}, state), payload);\n\n    case store_actions_settings__WEBPACK_IMPORTED_MODULE_0__.ACTIONS.SAVE:\n      return _objectSpread(_objectSpread({}, state), payload);\n\n    case store_actions_settings__WEBPACK_IMPORTED_MODULE_0__.ACTIONS.RESET:\n      return {\n        state: defaultState\n      };\n\n    default:\n      return state;\n  }\n}\n\n//# sourceURL=webpack://server-side-rendering/./src/store/reducers/settings.ts?");

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

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("body-parser");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("cookie-parser");

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

/***/ "sequelize-typescript":
/*!***************************************!*\
  !*** external "sequelize-typescript" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("sequelize-typescript");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("serialize-javascript");

/***/ }),

/***/ "set-cookie-parser":
/*!************************************!*\
  !*** external "set-cookie-parser" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("set-cookie-parser");

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