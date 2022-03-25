import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../../components/Header";
import Img from "../../../assets/png/test5.png";

const AddDetailPage = () => {
  const [productTitle, setProductTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCateGory] = useState("카테고리 선택");

  const onAddPhotoClickHandler = () => {};

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Header />
      <AddDetailWrapper>
        <Innerbox>
          <Title>상품 등록</Title>
          <AddPhotoButton>
            <AddPhoto src={Img} />
          </AddPhotoButton>
          <Hr />
          <AddDetialForm onSubmit={onSubmitHandler}>
            <ProductInput
              type="text"
              value={productTitle}
              onChange={(e) => setProductTitle(e.currentTarget.value)}
              placeholder="글 제목"
            />

            <ProductSelect
              type="text"
              value={category}
              onChange={(e) => setCateGory(e.target.value)}
            >
              <option value="전자제품">전자제품</option>
              <option value="자격증책">자격증책</option>
              <option value="언어공부책">언어공부책</option>
              <option value="기타">기타</option>
            </ProductSelect>

            <ProductInput
              type="text"
              value={price}
              onChange={(e) => setPrice(e.currentTarget.value)}
              placeholder="가격"
            />
            <ProductInput
              type="text"
              value={description}
              onChange={(e) => setDescription(e.currentTarget.value)}
              placeholder="상품설명"
            />
          </AddDetialForm>
        </Innerbox>
      </AddDetailWrapper>
    </>
  );
};

const AddDetailWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Innerbox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Title = styled.div`
  font-size: 30px;
`;

const AddPhotoButton = styled.button`
  border: 0;
  margin-top: 3rem;
  background-color: transparent;
  cursor: pointer;
`;

const AddPhoto = styled.img`
  width: 10rem;
  height: 7rem;
`;

const Hr = styled.div`
  margin-top: 2rem;
  border: 1px solid silver;
  width: 100%;
`;

const AddDetialForm = styled.form`
  display: flex;
  width: 25rem;
  flex-direction: column;
`;

const ProductInput = styled.input`
  border: 0;
  margin: 1rem 0rem 1rem 0rem;
`;

const ProductSelect = styled.select`
  border: 0;
  margin: 1rem 0rem 1rem 0rem;
`;

export default AddDetailPage;
