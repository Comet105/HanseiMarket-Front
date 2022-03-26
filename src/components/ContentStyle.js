import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Img from "../assets/png/test.png";
import { product } from "../store/actions/UserAction";

const ContentStyle = () => {
  const [testproduct, setTestProduct] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(product()).then((res) => {
      if (res.payload) {
        setTestProduct(res.payload);
      } else {
        console.log("이미지를 불러들이지 못했습니다.");
      }
    });
  }, [dispatch]);

  return (
    <IsLink to="/detail">
      <ContentsWrapper>
        {testproduct &&
          testproduct.map((value) => (
            <InnerBox>
              <ContentsImg src={Img} />
              <ContentsExplanation>{value.title}</ContentsExplanation>
              <ContentsExplanation>{value.price}</ContentsExplanation>
              <ContentsExplanation>{value.description}</ContentsExplanation>
            </InnerBox>
          ))}
      </ContentsWrapper>
    </IsLink>
  );
};

const IsLink = styled(Link)`
  :visited {
    color: black;
    text-decoration: none;
  }
  :hover {
    color: black;
    text-decoration: underline;
  }
`;

const ContentsWrapper = styled.div`
  display: grid;
  margin: 0px;
  justify-content: center;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 20px;
  column-gap: 3.5rem;
  width: 50rem;
`;

const InnerBox = styled.div`
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
