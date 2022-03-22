import React from "react";
import styled from "styled-components";
import Img from "../../assets/png/test3.png";
import Img2 from "../../assets/png/test4.png";
import Header from "../../components/Header";
import CaretLeft from "../../assets/svg/CaretLeft.svg";
import CaretRight from "../../assets/svg/CaretRight.svg";
import ChatCircleDots from "../../assets/svg/ChatCircleDots.svg";

const DetailPage = () => {
  return (
    <>
      <Header />
      <ContentsWrapper>
        <InnerBox>
          <NavigateWrapper>
            <NaviagteButton>
              <BeforeNavigation src={CaretLeft} />
            </NaviagteButton>
            <ContentsImg src={Img} />
            <NaviagteButton>
              <NextNavigation src={CaretRight} />
            </NaviagteButton>
          </NavigateWrapper>

          <ProfileWrapper>
            <Knot>
              <Profile src={Img2} />
              <div>
                <div>엄준식화이팅!</div>
                <div>해킹보안과 2반</div>
              </div>
            </Knot>
            <ChatWrapper>
              <ChatDots src={ChatCircleDots} />
              <Chat>채팅하기</Chat>
            </ChatWrapper>
          </ProfileWrapper>
        </InnerBox>
      </ContentsWrapper>
    </>
  );
};

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  width: 100%;
  height: 100vh;
`;

const InnerBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentsImg = styled.img`
  width: 30rem;
  height: 20rem;
  border-radius: 7px;
`;

const Profile = styled.img`
  width: 4rem;
  height: 4rem;
  margin-top: 1rem;
  margin-right: 0.5rem;
  border-radius: 50%;
`;

const NavigateWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const BeforeNavigation = styled.img`
  border: 0;
  background-color: transparent;
  width: 5rem;
  height: 5rem;
`;

const NextNavigation = styled.img`
  width: 5rem;
  height: 5rem;
`;

const NaviagteButton = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;
`;

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
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

export default DetailPage;
