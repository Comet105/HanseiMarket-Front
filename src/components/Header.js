import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import LogoSVG from "../assets/svg/MainLogo.svg";
import { logout } from "../store/actions/UserAction";

const Header = () => {
  const [search, setSearch] = useState("");
  // const [lgout, setLgOut] = useState(Boolean);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickHandler = () => {
    dispatch(logout())
      .then((res) => {
        console.log(res.payload.logoutSuccess);
        if (res.payload.logoutSuccess) {
          navigate("/login");
        } else {
          alert("로그아웃에 실패하였습니다.");
        }
      })
      .catch((err) => console.log(err));
  };

  const user = useSelector((state) => state.User);

  return (
    <HeaderBar>
      <HeaderForm>
        <Link to="/">
          <Img src={LogoSVG} />
        </Link>
        <Search
          value={search}
          type="text"
          placeholder="검색어를 입력해주세요..."
          onChange={(e) => setSearch(e.currentTarget.value)}
        />
      </HeaderForm>
      <ProfileWrapper>
        <Profile>나야 나!</Profile>

        {user && user.logoutSuccess ? (
          <Logout onClick={onClickHandler}>로그아웃</Logout>
        ) : (
          <Link to="/login">
            <SignIn onClick={onClickHandler}>로그인</SignIn>
          </Link>
        )}
      </ProfileWrapper>
    </HeaderBar>
  );
};

const HeaderBar = styled.header`
  display: flex;
  justify-content: space-around;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
  box-shadow: 2px 2px 12px 5px #f0f0f0;
`;

const HeaderForm = styled.form`
  display: flex;
`;

const Img = styled.img``;

const Search = styled.input`
  background-color: #eaeaea;
  color: #444444;
  border: 0;
  border-radius: 4px;
  font-size: 12px;
  margin-left: 5rem;
  width: 15rem;
  padding: 0.5rem 1rem 0.5rem 1rem;
  :focus {
    outline: 1px solid gray;
  }
`;

const ProfileWrapper = styled.div`
  display: flex;
  padding-top: 10px;
`;

const Profile = styled.div``;

const SignIn = styled.button`
  border: 0;
  background-color: transparent;
  margin-left: 1rem;

  cursor: pointer;

  :hover {
    background-color: #f0f0f0;
  }
`;

const Logout = styled.button``;

export default Header;
