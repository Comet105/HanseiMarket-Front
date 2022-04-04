// import React, { useEffect } from "react";
// import styled from "styled-components";
// import CaretLeft from "../../../assets/svg/CaretLeft.svg";
// import CaretRight from "../../../assets/svg/CaretRight.svg";

// import { useSelector } from "react-redux";

// const DetailExamine = () => {
//   const data = useSelector((state) => state.user.getProduct);

//   useEffect(() => {
//     console.log(data);
//   }, []);

//   return (
//     <NavigateWrapper>
//       <DownloadBtn>
//         <ContentsImg src={data?.url} />
//       </DownloadBtn>
//     </NavigateWrapper>
//   );
// };

// const ContentsImg = styled.img`
//   width: 30rem;
//   height: 20rem;
//   border-radius: 7px;
// `;

// const NavigateWrapper = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const DownloadBtn = styled.button`
//   border: 0;
//   background-color: transparent;
//   cursor: pointer;
// `;

// export default DetailExamine;
