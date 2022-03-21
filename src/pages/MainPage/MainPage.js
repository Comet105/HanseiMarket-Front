import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/Header";
import Img from "../../assets/png/test2.png";

const MainPage = () => {
  return (
    <>
      <Header />
      <MainWrapper>
        <Innerbox>
          <TitleWrapper>
            <Title>
              학교 근처에 <br /> 한세마켓
            </Title>

            <Banner>
              우리 학교 마켓을 찾고 있나요? <br />
              학교 학생들이 올리는 중고 물품을 확인해보세요!
            </Banner>

            <Link to="list">
              <MoveListButton>학생들이 올린 중고물품 구경하기</MoveListButton>
            </Link>
          </TitleWrapper>
          <ContentsWrapper>
            <ContentsImg src={Img} />
          </ContentsWrapper>
        </Innerbox>
      </MainWrapper>
    </>
  );
};

const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Innerbox = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 5rem;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 3rem;
  font-weight: bold;
`;

const Banner = styled.div`
  margin-top: 2rem;
  font-size: 1.5rem;
`;

const MoveListButton = styled.button`
  border: 0;
  background-color: #f1f3f5;
  margin-top: 2rem;
  font-weight: bold;
  padding: 1rem;
  border-radius: 7px;
  cursor: pointer;
`;

const ContentsWrapper = styled.div``;

const ContentsImg = styled.img`
  width: 30rem;
  height: 20rem;
`;

export default MainPage;
