import React from "react";
import styled from "styled-components";
import Img from "../assets/png/test.png";

const ContentStyle = () => {
  return (
    <ContentsWrapper>
      <ContentsImg src={Img} />
      <ContentsExplanation>삼성 공기청정기</ContentsExplanation>
      <Money>30,000원</Money>
      <div>해킹보안과 2반</div>
    </ContentsWrapper>
  );
};

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentsImg = styled.img`
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 11.5rem;
  height: 11.5rem;
  border-radius: 12px;
`;

const ContentsExplanation = styled.div`
  margin-bottom: 0.5rem;
`;

const Money = styled.div`
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export default ContentStyle;
