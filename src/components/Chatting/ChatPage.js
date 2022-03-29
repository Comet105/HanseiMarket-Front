import React from "react";
import styled from "styled-components";

const ChatPage = () => {
  return (
    <Container>
      <ChatWrapper>
        <UserList>Users</UserList>
        <ChatMain>
          <ChatList>Have a good deal!</ChatList>
          <Chatting>Chatting</Chatting>
        </ChatMain>
      </ChatWrapper>
    </Container>
  );
};

const Container = styled.div`
  box-sizing: border-box;
  padding: 0;
  margin: 0;
`;

const ChatWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-areas: "sidebar main";
  width: 100vw;
  height: 100vh;
`;

const ChatMain = styled.div`
  grid-area: main;
`;

const UserList = styled.div`
  grid-area: sidebar;
  padding: 5px 0 0 5px;
  border-right: 1px solid #3f3f3f;
  height: 100%;
`;

const ChatList = styled.div`
  padding: 5px 0 0 5px;
  font-size: 2rem;
`;

const Chatting = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 2rem;
  border-top: 1px solid #3f3f3f;
`;

export default ChatPage;
