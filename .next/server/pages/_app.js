"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888,208,667];
exports.modules = {

/***/ 8484:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(830);
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6228);
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4987);
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3182);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3860);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);








function MyApp({ Component , pageProps  }) {
    const [user, loading] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_1__.useAuthState)(_firebase__WEBPACK_IMPORTED_MODULE_2__/* .auth */ .I);
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        if (user) {
            _firebase__WEBPACK_IMPORTED_MODULE_2__.db.collection('users').doc(user.uid).set({
                email: user.email,
                lastSeen: firebase__WEBPACK_IMPORTED_MODULE_5___default().firestore.FieldValue.serverTimestamp(),
                photoURL: user.photoURL
            }, {
                merge: true
            });
        }
    }, [
        user
    ]);
    if (loading) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Loading__WEBPACK_IMPORTED_MODULE_4__["default"], {});
    if (!user) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Login__WEBPACK_IMPORTED_MODULE_3__["default"], {});
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
        ...pageProps
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);


/***/ }),

/***/ 8130:
/***/ ((module) => {

module.exports = require("@material-ui/core");

/***/ }),

/***/ 4112:
/***/ ((module) => {

module.exports = require("better-react-spinkit");

/***/ }),

/***/ 3860:
/***/ ((module) => {

module.exports = require("firebase");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 830:
/***/ ((module) => {

module.exports = require("react-firebase-hooks/auth");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [941,675,987,182], () => (__webpack_exec__(8484)));
module.exports = __webpack_exports__;

})();