import React from "react";
import styled from "styled-components";
import CaretLeft from "../../../assets/svg/CaretLeft.svg";
import CaretRight from "../../../assets/svg/CaretRight.svg";
import { useSelector } from "react-redux";

const DetailExamine = () => {
  const data = useSelector((state) => state.user.getimage);

  return (
    <NavigateWrapper>
      <NaviagteButton>
        <BeforeNavigation src={CaretLeft} />
      </NaviagteButton>
      <DownloadBtn>
        <ContentsImg src={data?.location} />
      </DownloadBtn>

      <NaviagteButton>
        <NextNavigation src={CaretRight} />
      </NaviagteButton>
    </NavigateWrapper>
  );
};

const ContentsImg = styled.img`
  width: 30rem;
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

const DownloadBtn = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;
`;

export default DetailExamine;
