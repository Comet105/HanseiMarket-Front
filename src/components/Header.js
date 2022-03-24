import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import LogoSVG from "../assets/svg/MainLogo.svg";
import { auth, logout } from "../store/actions/UserAction";

const Header = (userId) => {
  const [search, setSearch] = useState("");
  const [lgout, setLgout] = useState();
  const [nickname, setNickName] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(auth()).then((res) => {
      setLgout(res.payload);
      setNickName(res.payload.nickname);
    });
  }, []);

  const onClickHandler = () => {
    dispatch(logout())
      .then((res) => {
        console.log(res);
        if (res.payload.logoutSuccess) {
          navigate("/login");
        } else {
          alert("로그아웃에 실패하였습니다.");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <HeaderBar>
      <HeaderWrapper>
        <Link to="/">
          <Img src={LogoSVG} />
        </Link>
        <Search
          value={search}
          type="text"
          placeholder="검색어를 입력해주세요..."
          onChange={(e) => setSearch(e.currentTarget.value)}
        />
      </HeaderWrapper>
      <ProfileWrapper>
        {nickname ? (
          <Profile>
            <p>
              <strong>{nickname}</strong>
            </p>
            <div style={{ fontSize: "14px", paddingTop: "3px" }}>님</div>
          </Profile>
        ) : (
          ""
        )}

        {lgout ? (
          <Logout onClick={onClickHandler}>로그아웃</Logout>
        ) : (
          <Link to="/login">
            <SignIn>로그인</SignIn>
          </Link>
        )}
      </ProfileWrapper>
    </HeaderBar>
  );
};

const HeaderBar = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
  box-shadow: 2px 2px 12px 5px #f0f0f0;
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
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
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
`;

const SignIn = styled.button`
  border: 0;
  background-color: transparent;
  margin-left: 1rem;

  cursor: pointer;

  :hover {
    background-color: #f0f0f0;
  }
`;

const Logout = styled.button`
  border: 0;
  background-color: transparent;
  margin-left: 1rem;

  cursor: pointer;

  :hover {
    background-color: #f0f0f0;
  }
`;

export default Header;
