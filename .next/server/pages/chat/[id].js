"use strict";
(() => {
var exports = {};
exports.id = 934;
exports.ids = [934];
exports.modules = {

/***/ 5360:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "react-firebase-hooks/auth"
var auth_ = __webpack_require__(830);
// EXTERNAL MODULE: ./firebase.js
var firebase = __webpack_require__(6228);
;// CONCATENATED MODULE: external "moment"
const external_moment_namespaceObject = require("moment");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_namespaceObject);
;// CONCATENATED MODULE: ./components/Message.js





function Message({ user , message  }) {
    const [userLoggedIn] = (0,auth_.useAuthState)(firebase/* auth */.I);
    // console.log(moment(message.timestamp).format('LL'));
    const TypeOfMessage = user === userLoggedIn.email ? Sender : Reciever;
    const msgt = user === userLoggedIn.email ? 'sender' : 'receiver';
    const isURL = (str)=>{
        // var pattern = new RegExp(
        //   '^(https?:\\/\\/)?' + // protocol
        //     '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        //     '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        //     '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        //     '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        //     '(\\#[-a-z\\d_]*)?$',
        //   'i'
        // ); // fragment locator
        // return !!pattern.test(str);
        const regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
        if (regexp.test(str)) {
            return true;
        } else {
            return false;
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(Container, {
        "data-msgType": msgt,
        id: "msg",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(TypeOfMessage, {
            children: [
                isURL(message.message) ? /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    rel: "noreferrer",
                    target: "_blank",
                    style: {
                        color: '#006aff',
                        cursor: 'pointer'
                    },
                    href: message.message.indexOf('https://') !== -1 || message.message.indexOf('http://') !== -1 ? message.message : 'https://' + message.message,
                    children: message.message
                }) : message.message,
                /*#__PURE__*/ jsx_runtime_.jsx(TimeStamp, {
                    children: message.timestamp ? external_moment_default()(message.timestamp).format('LT') : '...'
                })
            ]
        })
    });
}
/* harmony default export */ const components_Message = (Message);
const Container = (external_styled_components_default()).div``;
const MessageElement = (external_styled_components_default()).div`
  width: fit-content;
  max-width: 70ch;
  line-height: 1.5;
  padding: 1.5rem;
  border-radius: 0.8rem;
  margin: 1rem;
  min-width: 6rem;
  padding-bottom: 2.6rem;
  position: relative;
  text-align: right;
  font-size: 1.3rem;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Sender = external_styled_components_default()(MessageElement)`
  margin-left: auto;
  text-align: left;
  background-color: #dcf8c6;
`;
const Reciever = external_styled_components_default()(MessageElement)`
  text-align: left;
  background-color: whitesmoke;
`;
const TimeStamp = (external_styled_components_default()).span`
  color: gray;
  padding: 1rem;
  font-size: 0.9rem;
  position: absolute;
  bottom: 0;
  right: 0;
  text-align: right;
`;

;// CONCATENATED MODULE: external "timeago-react"
const external_timeago_react_namespaceObject = require("timeago-react");
var external_timeago_react_default = /*#__PURE__*/__webpack_require__.n(external_timeago_react_namespaceObject);
// EXTERNAL MODULE: external "firebase"
var external_firebase_ = __webpack_require__(3860);
var external_firebase_default = /*#__PURE__*/__webpack_require__.n(external_firebase_);
// EXTERNAL MODULE: ./utils/getRecipientEmail.js
var getRecipientEmail = __webpack_require__(3410);
;// CONCATENATED MODULE: external "uifx"
const external_uifx_namespaceObject = require("uifx");
var external_uifx_default = /*#__PURE__*/__webpack_require__.n(external_uifx_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/InsertEmoticon"
const InsertEmoticon_namespaceObject = require("@material-ui/icons/InsertEmoticon");
var InsertEmoticon_default = /*#__PURE__*/__webpack_require__.n(InsertEmoticon_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/StopRounded"
const StopRounded_namespaceObject = require("@material-ui/icons/StopRounded");
var StopRounded_default = /*#__PURE__*/__webpack_require__.n(StopRounded_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/SendRounded"
const SendRounded_namespaceObject = require("@material-ui/icons/SendRounded");
var SendRounded_default = /*#__PURE__*/__webpack_require__.n(SendRounded_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/MoreVert"
const MoreVert_namespaceObject = require("@material-ui/icons/MoreVert");
var MoreVert_default = /*#__PURE__*/__webpack_require__.n(MoreVert_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/AttachFile"
const AttachFile_namespaceObject = require("@material-ui/icons/AttachFile");
var AttachFile_default = /*#__PURE__*/__webpack_require__.n(AttachFile_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/Mic"
const Mic_namespaceObject = require("@material-ui/icons/Mic");
var Mic_default = /*#__PURE__*/__webpack_require__.n(Mic_namespaceObject);
// EXTERNAL MODULE: external "react-firebase-hooks/firestore"
var firestore_ = __webpack_require__(8829);
// EXTERNAL MODULE: ./node_modules/next/dist/client/router.js
var client_router = __webpack_require__(880);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(8130);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "emoji-mart"
const external_emoji_mart_namespaceObject = require("emoji-mart");
;// CONCATENATED MODULE: ./components/ChatScreen.js








// import moment from 'moment';













function ChatScreen({ chat , messages  }) {
    var ref4, ref1, ref2, ref3;
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    let recognition = new window.SpeechRecognition();
    let emojiPicker;
    const inputElement = document.getElementById('inputField');
    // const [tempDate, setTempDate] = useState('');
    const { 0: emojiPickerState , 1: SetEmojiPicker  } = (0,external_react_.useState)(false);
    // const [temp, setTemp] = useState(false);
    // const [dual, setDual] = useState('');
    // const [nodeLength, setNodeLength] = useState();
    const [user] = (0,auth_.useAuthState)(firebase/* auth */.I);
    const { 0: input , 1: setInput  } = (0,external_react_.useState)('');
    const endOfMessagesRef = (0,external_react_.useRef)(null);
    const router = (0,client_router.useRouter)();
    const [messagesSnapshot] = (0,firestore_.useCollection)(firebase.db.collection('chats').doc(router.query.id).collection('messages').orderBy('timestamp', 'asc'));
    const [recipientSnapshot] = (0,firestore_.useCollection)(firebase.db.collection('users').where('email', '==', (0,getRecipientEmail/* default */.Z)(chat.users, user)));
    if (emojiPickerState) {
        emojiPicker = /*#__PURE__*/ jsx_runtime_.jsx(external_emoji_mart_namespaceObject.Picker, {
            title: "Pick your emoji . . . ",
            emoji: "point_up",
            onSelect: (emoji)=>setInput(input + emoji.native)
        });
    }
    function triggerPicker(event) {
        event.preventDefault();
        SetEmojiPicker(!emojiPickerState);
        if (emojiPickerState) {
            document.getElementById('inputField').focus();
        } else {
            document.getElementById('inputField').blur();
        }
    }
    // const groupMessageByDate = (messageDate) => {
    //   (messageDate) => setTempDate(messageDate);
    //   if (tempDate === messageDate) {
    //     // console.log(tempDate, messageDate);
    //     // console.log('true');
    //     return true;
    //   } else {
    //     // console.log('false');
    //     return false;
    //   }
    // };
    const showMessages = ()=>{
        if (messagesSnapshot) {
            return messagesSnapshot.docs.map((message)=>{
                var ref;
                /*#__PURE__*/ return jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(components_Message, {
                        user: message.data().user,
                        message: {
                            ...message.data(),
                            timestamp: (ref = message.data().timestamp) === null || ref === void 0 ? void 0 : ref.toDate().getTime()
                        }
                    }, message.id)
                });
            });
        } else {
            return JSON.parse(messages).map((message)=>/*#__PURE__*/ jsx_runtime_.jsx(components_Message, {
                    user: message.user,
                    message: message
                }, message.id)
            );
        }
    };
    const scrollToBottom = ()=>{
        endOfMessagesRef.current.scrollIntoView({
            behaviour: 'smooth',
            block: 'start'
        });
    };
    const sendMessage = (e)=>{
        e.preventDefault();
        firebase.db.collection('users').doc(user.uid).set({
            lastSeen: external_firebase_default().firestore.FieldValue.serverTimestamp()
        }, {
            merge: true
        });
        firebase.db.collection('chats').doc(router.query.id).collection('messages').add({
            timestamp: external_firebase_default().firestore.FieldValue.serverTimestamp(),
            message: input,
            user: user.email,
            photoURL: user.photoURL
        });
        playMessageSentSound();
        setInput('');
        scrollToBottom();
    };
    const recipient = recipientSnapshot === null || recipientSnapshot === void 0 ? void 0 : (ref4 = recipientSnapshot.docs) === null || ref4 === void 0 ? void 0 : (ref1 = ref4[0]) === null || ref1 === void 0 ? void 0 : ref1.data();
    const recipientEmail = (0,getRecipientEmail/* default */.Z)(chat.users, user);
    const surname = recipientEmail.split('@');
    // const finder = () => {
    //   if (messagesSnapshot) {
    //     messagesSnapshot.docs.map(
    //       (message) => () => setDual(message.data().user)
    //     );
    //   } else {
    //     JSON.parse(messages).map((message) => () => setDual(message.user));
    //   }
    // };
    // finder();
    // const TypeOfMessage = dual !== user.email ? 'Sender' : 'Reciever';
    const playMessageSentSound = ()=>{
        const sm = new (external_uifx_default())('/send message.mp3');
        sm.play();
    };
    const openMenu = ()=>{
        // var x = e.clientX - e.target.offsetLeft + 10;
        // var y = e.clientY - e.target.offsetTop + 10;
        // // console.log(e.target);
        const menu = document.querySelector('.mc');
        // menu.style.bottom = `${y}px`;
        // menu.style.left = `${x}px`;
        const compStyles = getComputedStyle(menu);
        if (compStyles.display === 'none') {
            menu.style.display = 'flex';
            menu.style.justifyContent = 'center';
            menu.style.alignItems = 'center';
        } else {
            menu.style.display = 'none';
        }
    };
    const deleteChat = async ()=>{
        firebase.db.collection('chats').doc(`${chat.id}`).delete().then(()=>{
        // console.log('Document successfully deleted!');
        }).catch((error)=>{
            alert('Error removing chat: ', error);
        });
        router.push(`/`);
    };
    // () => {
    //   if (document.querySelectorAll('#msg').length > nodeLength) {
    //     const sm = new UIfx('/receive message.mp3');
    //     sm.play();
    //   }
    // };
    // const checkLength_and_CreateNewLine = (typeTerm) => {
    //   if (typeTerm.length > 75) {
    //     const inputElement = document.getElementById('inputField');
    //     inputElement.value = typeTerm + '\n';
    //     console.log(inputElement.value);
    //   }
    // };
    const startListening = ()=>{
        recognition.start();
        document.getElementById('stopper').style.display = 'block';
        recognition.addEventListener('result', onSpeak);
        function onSpeak(e) {
            const msg = e.results[0][0].transcript;
            inputElement.value += msg;
        }
        recognition.addEventListener('onspeechend', ()=>recognition.end()
        );
    };
    const stopListening = ()=>{
        recognition.stop();
        document.getElementById('stopper').style.display = 'none';
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ChatScreen_Container, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Header, {
                children: [
                    recipient ? /*#__PURE__*/ jsx_runtime_.jsx(core_.Avatar, {
                        src: recipient === null || recipient === void 0 ? void 0 : recipient.photoURL
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(core_.Avatar, {
                        children: recipientEmail[0]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(HeaderInfo, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: surname[0]
                            }),
                            recipientSnapshot ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                children: [
                                    "Last Active:",
                                    ' ',
                                    (recipient === null || recipient === void 0 ? void 0 : (ref2 = recipient.lastSeen) === null || ref2 === void 0 ? void 0 : ref2.toDate()) ? /*#__PURE__*/ jsx_runtime_.jsx((external_timeago_react_default()), {
                                        datetime: recipient === null || recipient === void 0 ? void 0 : (ref3 = recipient.lastSeen) === null || ref3 === void 0 ? void 0 : ref3.toDate()
                                    }) : 'Unavailable'
                                ]
                            }) : /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Loading Last Active..."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(HeaderIcons, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(core_.IconButton, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((AttachFile_default()), {
                                    style: {
                                        fontSize: 25
                                    }
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(core_.IconButton, {
                                onClick: openMenu,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((MoreVert_default()), {
                                    style: {
                                        fontSize: 25
                                    }
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MessageContainer, {
                children: [
                    showMessages(),
                    /*#__PURE__*/ jsx_runtime_.jsx(EndOfMessage, {
                        ref: endOfMessagesRef
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(InputContainer, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(IconContainer, {
                        children: emojiPicker
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(core_.IconButton, {
                        onClick: triggerPicker,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((InsertEmoticon_default()), {
                            style: {
                                fontSize: 25
                            }
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Input, {
                        // maxLength="75"
                        id: "inputField",
                        value: input,
                        onChange: (e)=>setInput(e.target.value)
                        ,
                        // onKeyDown={() => setTemp(true)}
                        // onKeyUp={() => setTimeout(() => setTemp(false), 3100)}
                        // onKeyDown={(e) => checkLength_and_CreateNewLine(e.target.value)}
                        placeholder: "Type a message...",
                        autoFocus: true
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        hidden: true,
                        disabled: !input,
                        type: "submit",
                        onClick: sendMessage,
                        children: "Send Message"
                    }),
                    input == '' ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.IconButton, {
                                onClick: startListening,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Mic_default()), {
                                        style: {
                                            fontSize: 25
                                        }
                                    }),
                                    ' '
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.IconButton, {
                                onClick: stopListening,
                                style: {
                                    display: 'none'
                                },
                                id: "stopper",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((StopRounded_default()), {
                                        style: {
                                            fontSize: 25
                                        }
                                    }),
                                    ' '
                                ]
                            })
                        ]
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(core_.IconButton, {
                        onClick: sendMessage,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((SendRounded_default()), {
                            style: {
                                fontSize: 25
                            }
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(MenuContainer, {
                className: "mc",
                onClick: deleteChat,
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: "Delete Chat"
                })
            })
        ]
    });
}
/* harmony default export */ const components_ChatScreen = (ChatScreen);
const ChatScreen_Container = (external_styled_components_default()).div``;
const DateIndictor = (external_styled_components_default()).div`
  background-color: lightblue;
  width: 8rem;
  height: 2rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
`;
const Header = (external_styled_components_default()).div`
  position: sticky;
  background-color: #fff;
  z-index: 100;
  top: 0;
  display: flex;
  padding: 1.1rem;
  height: 7rem;
  align-items: center;
  border-bottom: 1px solid whitesmoke;
`;
const HeaderInfo = (external_styled_components_default()).div`
  margin-left: 1.5rem;
  flex: 1;

  > h3 {
    margin-bottom: 0.3rem;
    color: #495057;
    font-size: 1.35rem;
  }

  > p {
    font-size: 1.2rem;
    color: gray;
  }
`;
const EndOfMessage = (external_styled_components_default()).div`
  margin-bottom: 6.5rem;
`;
const HeaderIcons = (external_styled_components_default()).div``;
const MessageContainer = (external_styled_components_default()).div`
  padding: 3rem;
  background-color: #e5ded8;
  min-height: 90vh;
  position: relative;
`;
const InputContainer = (external_styled_components_default()).form`
  display: flex;
  align-items: center;
  padding: 1rem;
  position: sticky;
  bottom: 0;
  background-color: #fff;
  z-index: 100;
`;
const Input = (external_styled_components_default()).input`
  flex: 1;
  border: none;
  outline: none;
  border-radius: 3rem;
  align-items: center;
  padding: 1.3rem 3rem 1.3rem 1.3rem;
  font-size: 1.55rem;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  background-color: whitesmoke;
  inline-size: min-content;
`;
const Typing = (external_styled_components_default()).div`
  color: #25d366;
  font-weight: bold;
  font-size: 1.3rem;
  /* margin: 0.2rem 0; */
`;
const IconContainer = (external_styled_components_default()).div`
  position: absolute;
  top: -45rem;
  left: 2rem;
  right: 0;
`;
const MenuContainer = (external_styled_components_default()).div`
  height: 3rem;
  width: 11rem;
  cursor: pointer;
  background-color: #fff;
  padding: 1rem;
  font-size: 1.45rem;
  z-index: 1000;
  box-shadow: 0px 4px 10px -3px rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 5.5rem;
  right: 4.5rem;
  border-radius: 0.7rem;
  display: none;
`;

// EXTERNAL MODULE: ./components/Sidebar.js + 1 modules
var Sidebar = __webpack_require__(8663);
;// CONCATENATED MODULE: ./pages/chat/[id].js









function Chat({ chat , messages  }) {
    const [user] = (0,auth_.useAuthState)(firebase/* auth */.I);
    const endOfMessagesRef = (0,external_react_.useRef)(null);
    const scrollToBottom = ()=>{
        endOfMessagesRef.current.scrollIntoView({
            behaviour: 'smooth',
            block: 'start'
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(_id_Container, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("title", {
                    children: [
                        "Chat",
                        ' ',
                        (0,getRecipientEmail/* default */.Z)(chat.users, user) !== undefined ? 'With ' + (0,getRecipientEmail/* default */.Z)(chat.users, user) : ''
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Sidebar/* default */.Z, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ChatContainer, {
                onLoad: scrollToBottom,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(components_ChatScreen, {
                        chat: chat,
                        messages: messages
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(_id_EndOfMessage, {
                        ref: endOfMessagesRef
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const _id_ = (Chat);
async function getServerSideProps(context) {
    const ref = firebase.db.collection('chats').doc(context.query.id);
    const messagesRef = await ref.collection('messages').orderBy('timestamp', 'asc').get();
    const messages1 = messagesRef.docs.map((doc)=>({
            id: doc.id,
            ...doc.data()
        })
    ).map((messages)=>({
            ...messages,
            timestamp: messages.timestamp.toDate().getTime()
        })
    );
    const chatRef = await ref.get();
    const chat = {
        id: chatRef.id,
        ...chatRef.data()
    };
    return {
        props: {
            messages: JSON.stringify(messages1),
            chat: chat
        }
    };
}
const _id_Container = (external_styled_components_default()).div`
  display: flex;
`;
const ChatContainer = (external_styled_components_default()).div`
  flex: 1;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100vh;

  ::-webkit-srollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;
const _id_EndOfMessage = (external_styled_components_default()).div``;


/***/ }),

/***/ 8130:
/***/ ((module) => {

module.exports = require("@material-ui/core");

/***/ }),

/***/ 1535:
/***/ ((module) => {

module.exports = require("@material-ui/icons/AddCircleRounded");

/***/ }),

/***/ 8386:
/***/ ((module) => {

module.exports = require("@material-ui/icons/ExitToApp");

/***/ }),

/***/ 7210:
/***/ ((module) => {

module.exports = require("@material-ui/icons/HomeOutlined");

/***/ }),

/***/ 6284:
/***/ ((module) => {

module.exports = require("@material-ui/icons/KeyboardArrowDownRounded");

/***/ }),

/***/ 4202:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Search");

/***/ }),

/***/ 1072:
/***/ ((module) => {

module.exports = require("email-validator");

/***/ }),

/***/ 3860:
/***/ ((module) => {

module.exports = require("firebase");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

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

/***/ 8829:
/***/ ((module) => {

module.exports = require("react-firebase-hooks/firestore");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [941,676,884,663], () => (__webpack_exec__(5360)));
module.exports = __webpack_exports__;

})();