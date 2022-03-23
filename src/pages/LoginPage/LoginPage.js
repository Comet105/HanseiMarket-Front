import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { login } from "../../store/actions/UserAction";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const body = {
      username: email,
      password: password,
    };

    dispatch(login(body))
      .then((res) => {
        if (res.payload.loginSuccess) {
          toast("로그인에 성공하셨습니다.");
          setUserId(res.user.id);
          navigate("/");
        } else {
          toast("로그인에 실패하셨습니다.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Header userId={userId} />
      <LoginWrapper>
        <ContentWrapper>
          <TitleWrapper>
            <Title>한세마켓</Title>
            <Banner>여기에 아무 문구를 추가하세요</Banner>
          </TitleWrapper>
          <LoginForm onSubmit={onSubmitHandler}>
            <LoginInput
              type="email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              placeholder="이메일"
            />
            <LoginInput
              type="password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
              placeholder="비밀번호"
            />
            <LoginButton>로그인</LoginButton>
          </LoginForm>
          <Translate>
            <Caption>계정이 없으신가요?</Caption>
            <Link to="/register">회원가입</Link>
          </Translate>
        </ContentWrapper>
      </LoginWrapper>
    </>
  );
};

const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const TitleWrapper = styled.div`
  width: 24rem;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  margin-bottom: 1rem;
  font-size: 2.5rem;
  font-weight: bold;
`;

const Banner = styled.div`
  color: #868686;
  margin-bottom: 1.5rem;
`;

const LoginForm = styled.form`
  display: flex;
  width: 25rem;
  flex-direction: column;
`;

const LoginInput = styled.input`
  margin-bottom: 2rem;
  background-color: #f5f5f5;
  color: black;
  border: 0;
  width: 100%;
  padding: 1.3rem 1rem 1.3rem 1rem;
  border-radius: 6px;
  border-color: gray;

  ::placeholder {
    color: #9f9f9f;
  }
  :focus {
    outline: 1px solid gray;
  }
`;

const Translate = styled.div`
  display: flex;
  margin-top: 0.8rem;
`;

const Caption = styled.div`
  color: #7c7c7c;
  margin-right: 0.5rem;
`;

const LoginButton = styled.button`
  border: 0;
  font-size: 1.1rem;
  font-weight: bold;
  font-family: Noto Sans KR;
  margin-top: 1rem;
  background-color: black;
  color: white;
  padding: 1.3rem 1rem 1.3rem 1rem;
  border-radius: 6px;
  cursor: pointer;
`;

export default LoginPage;
