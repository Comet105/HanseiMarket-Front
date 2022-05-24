import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { product, getProductId } from "../store/actions/UserAction";

const ContentStyle = () => {
  const dispatch = useDispatch();
  const [testproduct, setTestProduct] = useState();

  useEffect(() => {
    dispatch(product()).then((res) => {
      if (res.payload) {
        console.log(res);
        setTestProduct(res.payload);
      } else {
        console.log("이미지를 불러들이지 못했습니다.");
      }
    });
  }, [dispatch]);

  const onClickHandler = (id) => {
    dispatch(getProductId(id)).then((res) => {
      console.log(res);
    });
  };

  return (
    <ContentsWrapper>
      {testproduct &&
        testproduct.map((value) => (
          <InnerBox>
            <IsLink to="/detail" onClick={() => onClickHandler(value.id)}>
              <ContentsImg src={value.image} />
              <ContentsExplanation>{value.title}</ContentsExplanation>
              <ContentsExplanation>{value.price}</ContentsExplanation>
            </IsLink>
          </InnerBox>
        ))}
    </ContentsWrapper>
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
  width: 10rem;
  height: 9.5rem;
  border-radius: 12px;
`;

const ContentsExplanation = styled.div`
  margin-bottom: 0.5rem;
`;

export default ContentStyle;
