import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import ContentStyle from "../../components/ContentStyle";
import { Link } from "react-router-dom";

const RodingPage = (props) => {
  const [search, setSearch] = useState();

  return (
    <>
      <Header />
      <CalibernWrapper>
        <InnerBox>
          <LineUp>
            <TitleWrapper>
              <Title>오늘의 중고물품은?</Title>
              <Banner>오늘의 중고물품 딱대!!! 다같이 냠냠쩝쩝's</Banner>
              <ListInput
                type="text"
                value={search}
                onChange={(e) => setSearch(e.currentTarget.value)}
                placeholder="검색어를 입력해주세요..."
              />
            </TitleWrapper>
            <LinkTo to="/addproduct">등록하러 가기</LinkTo>
          </LineUp>

          <ContentStyle />
        </InnerBox>
      </CalibernWrapper>
    </>
  );
};

const CalibernWrapper = styled.div`
  display: flex;
  margin-top: 5rem;
  width: 100%;
  height: 100vh;
`;

const InnerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const TitleWrapper = styled.form`
  display: flex;
  width: 55rem;
  flex-direction: column;
`;

const LineUp = styled.div`
  display: flex;
  justify-content: space-around;
  width: 74%;
`;

const LinkTo = styled(Link)`
  display: flex;
  align-items: center;
  color: black;

  :visited {
    color: black;
    text-decoration: none;
  }
  :hover {
    color: black;
    text-decoration: underline;
  }
`;

const Title = styled.div`
  margin-bottom: 0.8rem;
  font-size: 2rem;
  font-weight: bold;
`;

const Banner = styled.div``;

const ListInput = styled.input`
  background-color: #eaeaea;
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: #444444;
  border: 0;
  border-radius: 4px;
  font-size: 12px;
  width: 15rem;
  padding: 0.5rem 1rem 0.5rem 1rem;
  :focus {
    outline: 1px solid gray;
  }
`;

export default RodingPage;
