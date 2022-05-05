import styled from "styled-components";
import { Avatar, IconButton, Button } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import * as EmailValidator from "email-validator";
import {auth,db} from "../firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import {useCollection} from "react-firebase-hooks/firestore";
import Chat from "./Chat";
 


function Sidebar() {
    const [user] = useAuthState(auth);
    const userChatRef = db.collection('chats').where('users','array-contains',user.email);
    const[chatsSnapshot] = useCollection(userChatRef);
     
    const createChat =() => {
        const input = prompt(
            "Please enter your email address for the user you want to chat with"
        )
        if (!input) return null;

        if(EmailValidator.validate(input) && !chatAlreadyExists(input) && input !== user.email) {
            db.collection('chats').add({
             users: [user.email,input],   
            });
        }
    }

    const chatAlreadyExists = (recipientsEmail) => {
        !!chatsSnapshot?.docs.find(chat => chat.data().users.find(user => user === recipientsEmail)?.length > 0
        );
    }
    return (
        <Container>
            <Header>
                <UserAvatar onClick={()=> auth.signOut()} />
                <IconsContainer>

                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>

                </IconsContainer>
            </Header>
            
            <Search>
                <SearchIcon/>
                <SearchInput placeholder="Search in chats" />
            </Search>
            <SidebarButton onClick={createChat}> Start new chat</SidebarButton>

            {/*Chats after this*/}
            {chatsSnapshot?.docs.map(chat => (
                <Chat key={chat.id} id={chat.id} user={chat.users} />
            ) )}
        </Container>
    )
}

export default Sidebar; 

const Search = styled.div`
display: flex;
align-items: center;
    padding: 20px;
    border-radius: 2px;
`;

const SearchInput = styled.input`
 outline-width: 0;
 border : none;
 flex:1;

`;

const Container = styled.div`
 `;

 const SidebarButton = styled(Button)`
 width :100%;
 &&&{
 border-bottom: 1px solid whitesmoke;
 border-top: 1px solid whitesmoke;}`;

const Header = styled.div`
display:flex;
position: sticky;
top: 0;
background-color: white;
z-index: 1;
justify-content: space-between;
align-items: center;
padding: 15px;
height: 80px;
border-bottom: 1px solid whitesmoke;

`;

const UserAvatar = styled(Avatar)`
 cursor: pointer;
 :hover{
     opacity: 0.8;
 }
 `; 

const IconsContainer = styled.div``;