import styled from "styled-components";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import { Avatar, IconButton } from "@material-ui/core";
import { useRouter } from "next/router";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AttachmentIcon from "@material-ui/icons/AttachFile";
import { useCollection } from "react-firebase-hooks/firestore";
import { Message } from "./Message";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import firebase from "../firebase";
import MicIcon from "@material-ui/icons/Mic";
import getRecipientEmail from "../utils/getRicipientEmail";
import { useState } from "react";

function ChatScreen({ chat, messages }) {
    const [user] = useAuthState(auth);
    const [input, setInput] = useState("");
    const router = useRouter();

    const [messagesSnapshot] = useCollection(
        db
            .collection("chats")
            .doc(router.query.id)
            .collection("messages")
            .orderBy("timestamp", "asc")
    );

    const showMessages = () => {
        if (messagesSnapshot) {
            return messagesSnapshot.docs.map((message) => (
                <Message
                    key={message.id}
                    user={message.data().user}
                    message={{
                        ...message.data(),
                        timestamp: message.data().timestamp?.toDate().getTime(),
                    }}
                />
            ));
        } else {
            return JSON.parse(messages).map((message) => (
                <Message key={message.id} user={message.user} message={message} />
            ));
        }
    };

    const sendMessage = (e) => {
        e.preventDefault();
        //Update last Active
        /* db.collection("users").doc(user.uid).set(
            {
                
                lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
            },
            {merge: true}
            );  */
        db.collection('chats').doc(router.query.id).collection('messages').add({
            // timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            user: user.email,
            photoURL: user.photoURL,
        });
        setInput('');
    };
    const recipientEmail = getRecipientEmail(chat.users, user);
    return (
        <Container>
            <Header>
                <Avatar />

                <HeaderInformation>
                    <h3>Recipiente Email</h3>
                    <p>Last Seen...</p>
                </HeaderInformation>

                <HeaderIcons>
                    <IconButton>
                        <AttachmentIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </HeaderIcons>
            </Header>

            <MessageContainer>
                {showMessages()}
                <EndOfMessage />
            </MessageContainer>

            <InputContainer>
                <InsertEmoticonIcon />
                <Input value={input} onChange={(e) => setInput(e.target.value)} />
                <button hidden disable={!input} type="submit" onClick={sendMessage}>
                    Send Message
                </button>
                <MicIcon />
            </InputContainer>
        </Container>
    );
}

export default ChatScreen;

const Input = styled.input`
  flex: 1;
  outline: 0;
  border-radius: 10px;
  border: none;
  background-color: whitesmoke;
  padding: 20px;
  margin-left: 15px;
  margin-right: 15px;
`;

const InputContainer = styled.form`
  display: flex;
  align-items: center;
  padding: 10px;
  position: sticky;
  bottom: 0;
  background-color: white;
  z-index: 100;
`;

const Container = styled.div``;

const Header = styled.div`
  position: sticky;
  background-color: white;
  z-index: 100;
  top: 0;
  display: flex;
  padding: 11px;
  height: 80px;
  align-items: center;
  border-bottom: 1px solid whitesmoke;
`;

const HeaderInformation = styled.div`
  margin-left: 15px;
  flex: 1;
  > h3 {
    margin-bottom: 3px;
  }
  > p {
    font-size: 14px;
    color: gray;
  }
`;
const HeaderIcons = styled.div``;

const MessageContainer = styled.div`
  padding: 30px;
  background-color: #e5ded8;
  min-height: 90vh;
`;
const EndOfMessage = styled.div``;
