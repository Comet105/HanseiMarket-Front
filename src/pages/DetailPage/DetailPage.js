import React from "react";
import styled from "styled-components";
import DetailExamine from "./DetailContents/DetailExamine";
import DetailProfile from "./DetailContents/DetailProfile";
import Header from "../../components/Header";
import ContentStyle from "../../components/ContentStyle";

const DetailPage = () => {
  return (
    <>
      <Header />
      <ContentsWrapper>
        <InnerBox>
          <DetailExamine />
          <div style={{ padding: "0rem 5.8rem 0rem 5.3rem" }}>
            <DetailProfile />
            <Hr />
          </div>
          <Information>
            <div>이사로 급처분-lg제습기(1만원)</div>
            <div
              style={{
                fontSize: "10px",
                padding: "5px 0px 10px 0px",
                color: "gray",
              }}
            >
              가구/인테리어 · 19시간 전
            </div>
            <div>10,000</div>
            <div
              style={{
                padding: "15px 0px 15px 0px",
                fontSize: "13px",
                color: "gray",
              }}
            >
              작동 지금도 사용하고 있는제품 <br />
              이사로 급처분합니다.
            </div>
            <div
              style={{ fontSize: "10px", color: "gray", paddingBottom: "20px" }}
            >
              관심4·채팅30·조회300
            </div>
            <Hr />
          </Information>
          <Another>
            <MoreWrapper>
              <div>당근마켓 인기중고</div>
              <NavigaeButton>더 구경하기</NavigaeButton>
            </MoreWrapper>
            <MoreNavigation>
              <ContentStyle />
              <ContentStyle />
              <ContentStyle />
            </MoreNavigation>
          </Another>
        </InnerBox>
      </ContentsWrapper>
    </>
  );
};

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  width: 100%;
  height: 100vh;
`;

const InnerBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Hr = styled.div`
  margin-top: 0.5rem;
  border: 1px solid silver;
  width: 100%;
`;

const Information = styled.div`
  padding: 1rem 6rem 2rem 5.3rem;
`;

const Another = styled.div`
  display: flex;
  padding: 0rem 5.8rem 0rem 5.3rem;
  flex-direction: column;
`;

const MoreWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0;
  background-color: transparent;
`;

const MoreNavigation = styled.div`
  display: flex;
  justify-content: space-around;
`;

const NavigaeButton = styled.button`
  border: 0;
  background-color: transparent;
  color: #ffc4b0;
  cursor: pointer;
  :hover {
    color: #6a82ff;
  }
`;

export default DetailPage;
