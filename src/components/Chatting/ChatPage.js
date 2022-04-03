import React from "react";
import styled from "styled-components";
import Header from "../Header";
import Sidebar from "./Sidebar/Sidebar";

const ChatPage = () => {
  return (
    <>
      <Header />
      <Container>
        <Innerbox>
          <Chatbox>
            <ChatWrapper>
              <Sidebar />
              <ChatMain>
                <ChatContent></ChatContent>
                <Chatting></Chatting>
              </ChatMain>
              <Test></Test>
            </ChatWrapper>
          </Chatbox>
        </Innerbox>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Innerbox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Chatbox = styled.div`
  height: 100%;
`;

const ChatWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8rem;
  border-radius: 11px;
  box-shadow: 2px 2px 12px 5px #f0f0f0;
`;

const ChatMain = styled.div``;

const ChatContent = styled.div`
  padding: 20rem 20rem 20rem 20rem;

  background-color: #fcfcfc;
`;

const Chatting = styled.footer`
  width: 100%;
  height: 4rem;
  background-color: black;
`;

const Test = styled.div`
  height: 100%;
  width: 15rem;
`;

export default ChatPage;
