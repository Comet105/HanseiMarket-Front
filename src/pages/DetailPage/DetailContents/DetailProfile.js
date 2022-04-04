import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Img2 from "../../../assets/png/test4.png";
import ChatCircleDots from "../../../assets/svg/ChatCircleDots.svg";

const DetailProfile = () => {
  return (
    <ProfileWrapper>
      <Knot>
        <Profile src={Img2} />
        <ProgileContent>
          <div>엄준식화이팅!</div>
          <Department>해킹보안과 2반</Department>
        </ProgileContent>
      </Knot>
      <Link to="/chat">
        <ChatWrapper>
          <ChatDots src={ChatCircleDots} />
          <Chat>채팅하기</Chat>
        </ChatWrapper>
      </Link>
    </ProfileWrapper>
  );
};

const Profile = styled.img`
  width: 4rem;
  height: 4rem;
  margin-top: 1rem;
  margin-right: 0.5rem;
  border-radius: 50%;
`;

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ChatWrapper = styled.button`
  display: flex;
  align-items: center;
  padding: 0.3rem 1rem 0.3rem 1rem;
  border: 0;
  border-radius: 6px;
  background-color: black;
  cursor: pointer;
`;

const ChatDots = styled.img``;

const Chat = styled.div`
  color: white;
  padding-left: 7px;
`;

const Knot = styled.div`
  display: flex;
  align-items: center;
`;

const ProgileContent = styled.div`
  margin-top: 0.5rem;
`;

const Department = styled.div`
  font-size: 13px;
  padding-top: 0.5rem;
  font-weight: 300;
`;

export default DetailProfile;
