"use strict";
exports.id = 987;
exports.ids = [987];
exports.modules = {

/***/ 6228:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "db": () => (/* binding */ db),
/* harmony export */   "I": () => (/* binding */ auth),
/* harmony export */   "A": () => (/* binding */ provider)
/* harmony export */ });
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3860);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_0__);

const firebaseConfig = {
    apiKey: "AIzaSyAOgcegYZw7nA0UTAZmxyc9hcxeXUbg8Nk",
    authDomain: "whatsapp-2-e8435.firebaseapp.com",
    projectId: "whatsapp-2-e8435",
    storageBucket: "whatsapp-2-e8435.appspot.com",
    messagingSenderId: "603330114134",
    appId: "1:603330114134:web:6b51d6b44abf22641d01f7",
    measurementId: "G-K17YJLGJXZ"
};
const app = !(firebase__WEBPACK_IMPORTED_MODULE_0___default().apps.length) ? firebase__WEBPACK_IMPORTED_MODULE_0___default().initializeApp(firebaseConfig) : firebase__WEBPACK_IMPORTED_MODULE_0___default().app();
const db = app.firestore();
const auth = app.auth();
const provider = new (firebase__WEBPACK_IMPORTED_MODULE_0___default().auth.GoogleAuthProvider)();



/***/ }),

/***/ 4987:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_Login)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(8130);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./firebase.js
var firebase = __webpack_require__(6228);
;// CONCATENATED MODULE: ./public/icons8-google.svg
/* harmony default export */ const icons8_google = ({"src":"/_next/static/media/icons8-google.58e3d63e.svg","height":48,"width":48});
;// CONCATENATED MODULE: ./pages/Login.js







function Login() {
    const signIn = ()=>{
        firebase/* auth.signInWithPopup */.I.signInWithPopup(firebase/* provider */.A).catch(alert);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "Login | Whatsapp2.0"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(LoginContainer, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Logo, {
                        src: "https://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Button, {
                        onClick: signIn,
                        variant: "outlined",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                src: icons8_google,
                                alt: "Google Icon",
                                width: 25,
                                height: 25
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(ButtonText, {
                                children: "SignIn with Google"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const pages_Login = (Login);
const Container = (external_styled_components_default()).div`
 
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: whitesmoke;
  align-content: center;
  justify-items: stretch;
  justify-content: center;
`;
const LoginContainer = (external_styled_components_default()).div`
  display: flex;
  flex-direction: column;
  padding: 10rem;
  align-items: center;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, 0.7);
`;
const ButtonText = (external_styled_components_default()).span`
  margin-left: 1rem;
  font-size: 1.2rem;
  font-family: 'Inter', sans-serif;
`;
const Logo = (external_styled_components_default()).img`
  height: 20rem;
  width: 20rem;
  margin-bottom: 5rem;
`;
const SocialContainer = (external_styled_components_default()).div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 2rem;
  background-color: #fff;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, 0.7);
`;


/***/ })

};
;