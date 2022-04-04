import React, { useEffect } from "react";
import styled from "styled-components";
import DetailProfile from "./DetailContents/DetailProfile";
import Header from "../../components/Header";
import { useSelector } from "react-redux";

const DetailPage = () => {
  const data = useSelector((state) => state.user.getProduct);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <Header />
      <ContentsWrapper>
        <InnerBox>
          <ContentsBox>
            <NavigateWrapper>
              <ContentsImg src={data?.url} />
            </NavigateWrapper>

            <DetailProfile />
            <Hr />
            <Information>
              <ProductTitle>{data?.title}</ProductTitle>
              <ProductCategory>{data?.category}</ProductCategory>
              <ProductPrice>{data?.price}</ProductPrice>
              <ProductDescription>{data?.description}</ProductDescription>
            </Information>

            <Hr />

            <Another>
              <MoreWrapper>
                <div>한세마켓 인기중고</div>
                <NavigaeButton>더 구경하기</NavigaeButton>
              </MoreWrapper>
              <MoreNavigation></MoreNavigation>
            </Another>
          </ContentsBox>
        </InnerBox>
      </ContentsWrapper>
    </>
  );
};

const ContentsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  margin-top: 7rem;
`;

const InnerBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const ContentsBox = styled.div`
  height: 100%;
`;

const ContentsImg = styled.img`
  width: 30rem;
  height: 20rem;
  border-radius: 7px;
`;

const NavigateWrapper = styled.div`
  display: flex;
  align-items: center;
`;

// const DownloadBtn = styled.button`
//   border: 0;
//   background-color: transparent;
//   cursor: pointer;
// `;

const Hr = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  border: 1px solid silver;
  width: 100%;
`;

const Information = styled.div`
  margin-top: 1.5rem;
`;

const Another = styled.div`
  display: flex;
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

const ProductTitle = styled.div`
  margin-bottom: 0.5rem;
`;

const ProductCategory = styled.div`
  margin-bottom: 0.5rem;
  font-size: 10px;
  color: gray;
`;

const ProductPrice = styled.div`
  margin-bottom: 0.5rem;
`;

const ProductDescription = styled.div`
  margin-bottom: 0.5rem;
  padding: 15px 0px 15px 0px;
  font-size: 13px;
  color: gray;
`;

export default DetailPage;
