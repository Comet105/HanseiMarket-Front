import React, { useState } from "react";
import styled from "styled-components";
import Header from "../Header";
import Sidebar from "./Sidebar/Sidebar";

const ChatPage = () => {
  const [chatting, setChatting] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

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
                <ChattingWrapper onSubmit={onSubmitHandler}>
                  <Chatting
                    type="text"
                    value={chatting}
                    onChange={(e) => setChatting(e.currentTarget.value)}
                    placeholder="채팅을 입력해주세요..."
                  />
                </ChattingWrapper>
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

const ChattingWrapper = styled.footer`
  display: flex;
  align-items: center;
  width: 100%;
  height: 3.5rem;
  background-color: black;
`;

const Chatting = styled.input`
  width: 100%;
  height: 2rem;
  background-color: transparent;
  color: white;
  outline: 0;
  border: 0;
`;

const Test = styled.div`
  height: 100%;
  width: 15rem;
`;

export default ChatPage;
