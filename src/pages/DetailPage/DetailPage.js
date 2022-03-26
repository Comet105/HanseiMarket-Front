import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DetailExamine from "./DetailContents/DetailExamine";
import Header from "../../components/Header";
import { useDispatch, useSelector } from "react-redux";

const DetailPage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user.getProduct);

  useEffect(() => {
    console.log(data);
  }, [data, dispatch]);

  return (
    <>
      <Header />
      <ContentsWrapper>
        <InnerBox>
          <DetailExamine />
          <Information>
            <ProductTitle>{data?.title}</ProductTitle>
            <ProductCategory>{data?.category}</ProductCategory>
            <ProductPrice>{data?.price}</ProductPrice>
            <ProductDescription>{data?.description}</ProductDescription>
          </Information>
          <Another>
            <MoreWrapper>
              <div>당근마켓 인기중고</div>
              <NavigaeButton>더 구경하기</NavigaeButton>
            </MoreWrapper>
            <MoreNavigation></MoreNavigation>
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
  padding: 1rem 6rem 2rem 6rem;
`;

const Another = styled.div`
  display: flex;
  padding: 0rem 5.8rem 0rem 6rem;
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
