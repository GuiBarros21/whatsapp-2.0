"use strict";
exports.id = 663;
exports.ids = [663];
exports.modules = {

/***/ 8663:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Sidebar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(8130);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "@material-ui/icons/HomeOutlined"
var HomeOutlined_ = __webpack_require__(7210);
var HomeOutlined_default = /*#__PURE__*/__webpack_require__.n(HomeOutlined_);
// EXTERNAL MODULE: external "@material-ui/icons/Search"
var Search_ = __webpack_require__(4202);
var Search_default = /*#__PURE__*/__webpack_require__.n(Search_);
// EXTERNAL MODULE: external "@material-ui/icons/ExitToApp"
var ExitToApp_ = __webpack_require__(8386);
var ExitToApp_default = /*#__PURE__*/__webpack_require__.n(ExitToApp_);
// EXTERNAL MODULE: external "email-validator"
var external_email_validator_ = __webpack_require__(1072);
// EXTERNAL MODULE: external "react-firebase-hooks/auth"
var auth_ = __webpack_require__(830);
// EXTERNAL MODULE: external "react-firebase-hooks/firestore"
var firestore_ = __webpack_require__(8829);
// EXTERNAL MODULE: ./firebase.js
var firebase = __webpack_require__(6228);
// EXTERNAL MODULE: ./utils/getRecipientEmail.js
var getRecipientEmail = __webpack_require__(3410);
// EXTERNAL MODULE: ./node_modules/next/dist/client/router.js
var client_router = __webpack_require__(880);
// EXTERNAL MODULE: external "@material-ui/icons/KeyboardArrowDownRounded"
var KeyboardArrowDownRounded_ = __webpack_require__(6284);
var KeyboardArrowDownRounded_default = /*#__PURE__*/__webpack_require__.n(KeyboardArrowDownRounded_);
;// CONCATENATED MODULE: ./components/Chat.js









function Chat({ id , users , mh  }) {
    var ref, ref1;
    const router = (0,client_router.useRouter)();
    const falseArray = [];
    const keys = Object.keys(mh);
    const [user] = (0,auth_.useAuthState)(firebase/* auth */.I);
    const recipientEmail = (0,getRecipientEmail/* default */.Z)(users, user);
    const enterChat = ()=>{
        router.push(`/chat/${id}`);
    };
    const userChatRef = firebase.db.collection('users').where('email', '==', (0,getRecipientEmail/* default */.Z)(users, user));
    const [recipientSnapshot] = (0,firestore_.useCollection)(userChatRef);
    const recipientData = recipientSnapshot === null || recipientSnapshot === void 0 ? void 0 : (ref = recipientSnapshot.docs) === null || ref === void 0 ? void 0 : (ref1 = ref[0]) === null || ref1 === void 0 ? void 0 : ref1.data();
    keys.forEach((key)=>{
        if (mh[key] === false) {
            falseArray.push(key);
        }
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container, {
        onClick: enterChat,
        style: falseArray.includes(recipientEmail) ? hide : show,
        children: [
            recipientData ? /*#__PURE__*/ jsx_runtime_.jsx(UserAvatar, {
                src: recipientData === null || recipientData === void 0 ? void 0 : recipientData.photoURL
            }) : /*#__PURE__*/ jsx_runtime_.jsx(UserAvatar, {
                src: recipientEmail[0]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: recipientEmail
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ArrowContainer, {
                className: "ac",
                children: /*#__PURE__*/ jsx_runtime_.jsx((KeyboardArrowDownRounded_default()), {
                    style: {
                        fontSize: 25,
                        opacity: '0.6'
                    }
                })
            })
        ]
    });
}
/* harmony default export */ const components_Chat = (Chat);
const hide = {
    display: 'none'
};
const show = {
    display: 'flex'
};
const Container = (external_styled_components_default()).div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 1.5rem;
  word-break: break-word;
  font-size: 1.35rem;
  color: #495057;
  border-bottom: 1px solid #e9ecef;
  position: relative;

  :hover {
    background-color: #e9eaeb;

    & > .ac {
      display: flex;
    }
  }
`;
const UserAvatar = external_styled_components_default()(core_.Avatar)`
  margin: 0.5rem;
  margin-right: 1.5rem;
`;
const ArrowContainer = (external_styled_components_default()).div`
  position: absolute;
  bottom: 0.5rem;
  right: 0.8rem;
  display: none;
  height: 2.3rem;
  width: 2.3rem;
  background-color: #fff;
  border-radius: 50%;
  display: none;
  justify-content: center;
  align-items: center;
`;

// EXTERNAL MODULE: external "@material-ui/icons/AddCircleRounded"
var AddCircleRounded_ = __webpack_require__(1535);
var AddCircleRounded_default = /*#__PURE__*/__webpack_require__.n(AddCircleRounded_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/Sidebar.js




// import MoreVertIcon from '@material-ui/icons/MoreVert';











function Sidebar() {
    const [user1] = (0,auth_.useAuthState)(firebase/* auth */.I);
    const { 0: match , 1: setMatch  } = (0,external_react_.useState)('');
    const router = (0,client_router.useRouter)();
    const chatSearchObj = {};
    const userChatRef = firebase.db.collection('chats').where('users', 'array-contains', user1.email);
    const [chatsSnapshot] = (0,firestore_.useCollection)(userChatRef);
    const createChat = ()=>{
        const userEmailInput = prompt('Enter the gmail of the user to chat with: ');
        if (!userEmailInput) return null;
        if (external_email_validator_.validate(userEmailInput) && !chatAlreadyExsists(userEmailInput) && userEmailInput !== user1.email) {
            firebase.db.collection('chats').add({
                users: [
                    user1.email,
                    userEmailInput
                ]
            });
        }
    };
    const chatAlreadyExsists = (recipientEmail)=>{
        return !!(chatsSnapshot === null || chatsSnapshot === void 0 ? void 0 : chatsSnapshot.docs.find((chat)=>{
            var ref;
            return ((ref = chat.data().users.find((user)=>user === recipientEmail
            )) === null || ref === void 0 ? void 0 : ref.length) > 0;
        }));
    };
    chatsSnapshot === null || chatsSnapshot === void 0 ? void 0 : chatsSnapshot.docs.map((chat)=>{
        chatSearchObj[(0,getRecipientEmail/* default */.Z)(chat.data().users, user1)] = true;
    });
    const goToHome = ()=>{
        router.push(`/`);
    };
    const searchChats = (searchTerm)=>{
        const LCST = searchTerm.toLowerCase();
        for(const key in chatSearchObj){
            if (key.indexOf(LCST) > -1) {
                chatSearchObj[key] = true;
                setMatch(chatSearchObj);
            } else {
                chatSearchObj[key] = false;
                setMatch(chatSearchObj);
            }
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Sidebar_Container, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Header, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Sidebar_UserAvatar, {
                        src: user1.photoURL
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(IconsContainer, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(core_.IconButton, {
                                onClick: goToHome,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((HomeOutlined_default()), {
                                    style: {
                                        fontSize: 25
                                    }
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(core_.IconButton, {
                                onClick: ()=>{
                                    firebase/* auth.signOut */.I.signOut();
                                    router.push('/');
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx((ExitToApp_default()), {
                                    style: {
                                        fontSize: 25
                                    }
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Search, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Search_default()), {
                        style: {
                            fontSize: 22,
                            marginRight: '1rem'
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(SearchInput, {
                        placeholder: "Search for chats...",
                        onInput: (e)=>searchChats(e.target.value)
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ChatList, {
                children: chatsSnapshot === null || chatsSnapshot === void 0 ? void 0 : chatsSnapshot.docs.map((chat)=>/*#__PURE__*/ jsx_runtime_.jsx(components_Chat, {
                        id: chat.id,
                        users: chat.data().users,
                        mh: match
                    }, chat.id)
                )
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SidebarButton, {
                children: /*#__PURE__*/ jsx_runtime_.jsx((AddCircleRounded_default()), {
                    style: {
                        fontSize: 58,
                        color: '#25D366'
                    },
                    onClick: createChat
                })
            })
        ]
    });
}
/* harmony default export */ const components_Sidebar = (Sidebar);
const Sidebar_Container = (external_styled_components_default()).div`
  flex: 0.45;
  border-right: 2.5px solid whitesmoke;
  height: 100vh;
  min-width: 30rem;
  max-width: 40rem;
  overflow-y: hidden;
  position: relative;

  ::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;
const Search = (external_styled_components_default()).div`
  display: flex;
  align-items: center;
  padding: 1.4rem;
  border-radius: 0.2rem;
  background-color: #f1f3f5;
`;
const SidebarButton = (external_styled_components_default()).button`
  position: absolute;
  bottom: 1.85rem;
  right: 3.5rem;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  border: none;
  outline: none;
  padding: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 100;
`;
const SearchInput = (external_styled_components_default()).input`
  outline: none;
  border: none;
  flex: 1;
  font-size: 1.5rem;
  padding: 1rem;
  border-radius: 1rem;
`;
const ChatList = (external_styled_components_default()).div`
  height: calc(100vh - 147.6px);
  overflow-y: auto;
  overflow-x: hidden;
`;
const Header = (external_styled_components_default()).div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  height: 7rem;
  border-bottom: 2.5px solid whitesmoke;
`;
const Sidebar_UserAvatar = external_styled_components_default()(core_.Avatar)``;
const IconsContainer = (external_styled_components_default()).div``;
const yhidden = {
    overflowY: 'hidden'
};
const yscroll = {
    overflowY: 'scroll'
};


/***/ }),

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

/***/ 3410:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getRecipientEmail = (users, userLoggedIn)=>{
    return users === null || users === void 0 ? void 0 : users.filter((userToFilter)=>{
        return userToFilter !== (userLoggedIn === null || userLoggedIn === void 0 ? void 0 : userLoggedIn.email);
    })[0];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getRecipientEmail);


/***/ })

};
;