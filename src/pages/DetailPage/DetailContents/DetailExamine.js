import React from "react";
import styled from "styled-components";
import CaretLeft from "../../../assets/svg/CaretLeft.svg";
import CaretRight from "../../../assets/svg/CaretRight.svg";
import Img from "../../../assets/png/test3.png";

const DetailExamine = () => {
  return (
    <NavigateWrapper>
      <NaviagteButton>
        <BeforeNavigation src={CaretLeft} />
      </NaviagteButton>
      <ContentsImg src={Img} />
      <NaviagteButton>
        <NextNavigation src={CaretRight} />
      </NaviagteButton>
    </NavigateWrapper>
  );
};

const ContentsImg = styled.img`
  width: 100%;
  height: 20rem;
  border-radius: 7px;
`;

const NavigateWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const BeforeNavigation = styled.img`
  border: 0;
  background-color: transparent;
  width: 5rem;
  height: 5rem;
`;

const NextNavigation = styled.img`
  width: 5rem;
  height: 5rem;
`;

const NaviagteButton = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;
`;

export default DetailExamine;
