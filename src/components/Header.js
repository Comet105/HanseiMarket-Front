import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import LogoSVG from "../assets/svg/MainLogo.svg";
import { auth, logout } from "../store/actions/UserAction";
import Search from "./Search";

const Header = (userId) => {
  const [lgout, setLgout] = useState("");
  const [nickname, setNickName] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(auth()).then((res) => {
      setLgout(res.payload);
      setNickName(res.payload.nickname);
    });
  }, [dispatch]);

  const onClickHandler = () => {
    dispatch(logout())
      .then((res) => {
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
        <Search />
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
  padding: 10px 0;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 2px 2px 12px 5px #f0f0f0;
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Img = styled.img``;

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
