import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getProductId, getsearch } from "../../store/actions/UserAction";

const SearchPage = ({ props }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user.getsearch);
  const url = useParams();

  useEffect(() => {
    dispatch(getsearch(url.id));
  }, [url.id]);

  const onClickHandler = (id) => {
    dispatch(getProductId(id));
  };

  return (
    <>
      <Header />
      <Container>
        <BigInnerbox>
          <LineUp>
            <TitleWrapper>
              <Title>오늘의 중고물품은?</Title>
              <Banner>오늘의 중고물품 딱대!!! 다같이 냠냠쩝쩝's</Banner>
            </TitleWrapper>
            <LinkTo to="/addproduct">등록하러 가기</LinkTo>
          </LineUp>
          <ContentsWrapper>
            {data &&
              data.map((value) => (
                <InnerBox>
                  <IsLink to="/detail" onClick={() => onClickHandler(value.id)}>
                    <ContentsImg src={value.url} />
                    <ContentsExplanation>{value.title}</ContentsExplanation>
                    <ContentsExplanation>{value.price}</ContentsExplanation>
                  </IsLink>
                </InnerBox>
              ))}
          </ContentsWrapper>
        </BigInnerbox>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 5rem auto;
  height: 100vh;
`;

const LineUp = styled.div`
  display: flex;
  width: 900px;
  margin: 0 auto;
`;

const TitleWrapper = styled.form`
  display: flex;
  width: 55rem;
  flex-direction: column;
`;

const Title = styled.div`
  margin-bottom: 0.8rem;
  font-size: 2rem;
  font-weight: bold;
`;

const LinkTo = styled(Link)`
  display: flex;
  align-items: center;
  color: black;
  white-space: nowrap;

  :visited {
    color: black;
    text-decoration: none;
  }
  :hover {
    color: black;
    text-decoration: underline;
  }
`;

const Banner = styled.div``;

const BigInnerbox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const ContentsWrapper = styled.div`
  display: grid;
  margin-top: 3rem;
  justify-content: center;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 20px;
  column-gap: 3.5rem;
  width: 50rem;
`;

const ContentsExplanation = styled.div`
  margin-bottom: 0.5rem;
`;

const ContentsImg = styled.img`
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 11.5rem;
  height: 11.5rem;
  border-radius: 12px;
`;

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

const InnerBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export default SearchPage;
