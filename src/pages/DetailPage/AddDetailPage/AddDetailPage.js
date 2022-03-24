import React from "react";
import styled from "styled-components";
import Header from "../../../components/Header";
import Img from "../../../assets/png/test5.png";

const AddDetailPage = () => {
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
        </Innerbox>
      </AddDetailWrapper>
    </>
  );
};

const AddDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6rem;
  width: 100%;
  height: 100vh;
`;

const Title = styled.div`
  font-size: 30px;
`;

const AddPhotoButton = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;
`;

const AddPhoto = styled.img`
  width: 10rem;
  height: 7rem;
`;

const Hr = styled.div`
  margin-top: 0.5rem;
  border: 1px solid silver;
  width: 100%;
`;

const Innerbox = styled.div``;

export default AddDetailPage;
