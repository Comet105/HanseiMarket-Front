import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../store/actions/UserAction";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPasword, setConfirmPasword] = useState("");
  const [nickname, setNickName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [department, setDepartment] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    let body = {
      username: email,
      name: name,
      password: password,
      confirmPasword: confirmPasword,
      nickname: nickname,
      department: department,
      studentId: studentId,
    };
    if (password === confirmPasword) {
      dispatch(register(body))
        .then((res) => {
          console.log(res);
          if (res.payload.registerSuccess) {
            toast("가입이 정상적으로 완료되었습니다.");
            navigate("/login");
          } else {
            toast("가입실패");
            console.log(res.error.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      toast("비밀번호가 일치하지 않습니다.");
    }
  };

  return (
    <>
      <Header />
      <RegisterWrapper>
        <ContentWrapper>
          <TitleWrapper>
            <Title>회원가입</Title>
            <Banner>여기에 아무 문구를 추가하세요</Banner>
          </TitleWrapper>

          <RegitserForm onSubmit={onSubmitHandler}>
            <RegisterInput
              type="text"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
              placeholder="이름"
            />
            <RegisterInput
              type="email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              placeholder="이메일"
            />
            <RegisterInput
              type="password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
              placeholder="비밀번호"
            />

            <RegisterInput
              type="password"
              value={confirmPasword}
              onChange={(e) => setConfirmPasword(e.currentTarget.value)}
              placeholder="비밀번호 확인"
            />

            <RegisterInput
              type="text"
              value={nickname}
              onChange={(e) => setNickName(e.currentTarget.value)}
              placeholder="별명"
            />

            <DepartmentWrapper>
              <Department
                type="select"
                value={department}
                onChange={(e) => setDepartment(e.currentTarget.value)}
              >
                <option>해킹보안과</option>
                <option>네트워크보안과</option>
                <option>메타버스게임과</option>
                <option>클라우드보안과</option>
                <option>게임과</option>
              </Department>
              <DepartmentInput
                type="text"
                value={studentId}
                onChange={(e) => setStudentId(e.currentTarget.value)}
                placeholder="학번"
              />
            </DepartmentWrapper>

            <RegisterButton type="submit">회원가입</RegisterButton>
          </RegitserForm>
          <Translate>
            <Caption>계정이 이미 있으신가요?</Caption>
            <Link to="/login">로그인</Link>
          </Translate>
        </ContentWrapper>
      </RegisterWrapper>
    </>
  );
};

const RegisterWrapper = styled.div`
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
  margin-bottom: 0.8rem;
  font-size: 2rem;
  font-weight: bold;
`;

const Banner = styled.div`
  color: #868686;
  margin-bottom: 1.5rem;
`;

const RegitserForm = styled.form`
  display: flex;
  width: 25rem;
  flex-direction: column;
`;

const RegisterInput = styled.input`
  margin-bottom: 1.7rem;
  background-color: #f5f5f5;
  color: black;
  border: 0;
  width: 100%;
  padding: 1rem 1rem 1rem 1rem;
  border-radius: 6px;
  border-color: gray;

  ::placeholder {
    color: #9f9f9f;
  }
  :focus {
    outline: 1px solid gray;
  }
`;

const Department = styled.select`
  width: 35%;
  border: 0;
  background-color: #f5f5f5;
  text-align-last: center;
  color: gray;
  border-radius: 6px;
`;

const DepartmentInput = styled.input`
  margin-left: 1rem;
  background-color: #f5f5f5;
  color: black;
  border: 0;
  width: 61%;
  padding: 1rem 1rem 1rem 1rem;
  border-radius: 6px;

  ::placeholder {
    color: #9f9f9f;
  }
`;

const DepartmentWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const RegisterButton = styled.button`
  border: 0;
  margin-top: 1.8rem;
  background-color: black;
  color: white;
  padding: 1rem;
  border-radius: 6px;
  cursor: pointer;
`;

const Caption = styled.div`
  color: #7c7c7c;
  margin-right: 0.5rem;
`;

const Translate = styled.div`
  display: flex;
  margin-top: 1rem;
`;

export default RegisterPage;
