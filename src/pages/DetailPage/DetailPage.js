import React from "react";
import styled from "styled-components";
import DetailExamine from "./DetailContents/DetailExamine";
import DetailProfile from "./DetailContents/DetailProfile";
import Header from "../../components/Header";

const DetailPage = () => {
  return (
    <>
      <Header />
      <ContentsWrapper>
        <InnerBox>
          <DetailExamine />
          <div style={{ padding: "0rem 6rem 0rem 6rem" }}>
            <DetailProfile />
            <Hr />
          </div>
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

export default DetailPage;
