import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/Header";
import Img from "../../assets/png/test2.png";

import { useDispatch } from "react-redux";

const MainPage = () => {
  const dispatch = useDispatch();

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
  align-items: center;
  width: 100%;
  padding: 0 3rem;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 3.4rem;
  font-weight: bold;
  line-height: 4.3rem;
`;

const Banner = styled.div`
  margin-top: 2.3rem;
  font-size: 1.6rem;
  line-height: 2.3rem;
`;

const MoveListButton = styled.button`
  border: 0;
  background-color: #f1f3f5;
  margin-top: 2rem;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.8rem 2.5rem 0.8rem 2.5rem;
  border-radius: 4px;
  cursor: pointer;
`;

const ContentsWrapper = styled.div``;

const ContentsImg = styled.img`
  width: 30rem;
  height: 25rem;
`;

export default MainPage;
