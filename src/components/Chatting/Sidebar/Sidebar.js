import React from "react";
import styled from "styled-components";
import NotImage from "../../../assets/png/NotImages.png";

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <SidebarTitle>Messages</SidebarTitle>
      <UserList>
        <ProfileWrapper>
          <ProfileImg src={NotImage} />
          <UserBox>
            <div style={{ display: "flex" }}>
              <ProfileName>유태견</ProfileName>
              <ProfileClassOf>해킹 2반</ProfileClassOf>
            </div>
            <Preview>사랑한다고 씹려나~</Preview>
          </UserBox>
        </ProfileWrapper>

        <ProfileWrapper>
          <ProfileImg src={NotImage} />
          <UserBox>
            <div style={{ display: "flex" }}>
              <ProfileName>유태견</ProfileName>
              <ProfileClassOf>해킹 2반</ProfileClassOf>
            </div>
            <Preview>사랑한다고 씹려나~</Preview>
          </UserBox>
        </ProfileWrapper>

        <ProfileWrapper>
          <ProfileImg src={NotImage} />
          <UserBox>
            <div style={{ display: "flex" }}>
              <ProfileName>유태견</ProfileName>
              <ProfileClassOf>해킹 2반</ProfileClassOf>
            </div>
            <Preview>사랑한다고 씹려나~</Preview>
          </UserBox>
        </ProfileWrapper>

        <ProfileWrapper>
          <ProfileImg src={NotImage} />
          <UserBox>
            <div style={{ display: "flex" }}>
              <ProfileName>유태견</ProfileName>
              <ProfileClassOf>해킹 2반</ProfileClassOf>
            </div>
            <Preview>사랑한다고 씹려나~</Preview>
          </UserBox>
        </ProfileWrapper>

        <ProfileWrapper>
          <ProfileImg src={NotImage} />
          <UserBox>
            <div style={{ display: "flex" }}>
              <ProfileName>유태견</ProfileName>
              <ProfileClassOf>해킹 2반</ProfileClassOf>
            </div>
            <Preview>사랑한다고 씹려나~</Preview>
          </UserBox>
        </ProfileWrapper>

        <ProfileWrapper>
          <ProfileImg src={NotImage} />
          <UserBox>
            <div style={{ display: "flex" }}>
              <ProfileName>유태견</ProfileName>
              <ProfileClassOf>해킹 2반</ProfileClassOf>
            </div>
            <Preview>사랑한다고 씹려나~</Preview>
          </UserBox>
        </ProfileWrapper>

        <ProfileWrapper>
          <ProfileImg src={NotImage} />
          <UserBox>
            <div style={{ display: "flex", alignItems: "center" }}>
              <ProfileName>유태견</ProfileName>
              <ProfileClassOf>해킹 2반</ProfileClassOf>
            </div>
            <Preview>사랑한다고 씹려나~</Preview>
          </UserBox>
        </ProfileWrapper>

        <Test></Test>
      </UserList>
    </SidebarWrapper>
  );
};

const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SidebarTitle = styled.div`
  padding: 1.7rem 0 0 0;
  font-size: 1.6rem;
  font-weight: 600;
`;

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1.1rem 2.5rem 1.1rem 1.8rem;
  transition: all 0.2s;
  cursor: pointer;
  :hover {
    background-color: #f9f9f9;
  }
`;

const UserBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`;

const ProfileImg = styled.img`
  border-radius: 50%;
  width: 2.7rem;
  height: 2.7rem;
`;

const ProfileName = styled.div`
  font-size: 0.8rem;
  font-weight: 500;
`;

const ProfileClassOf = styled.div`
  font-size: 0.7rem;
  padding-top: 3px;
  margin-left: 1.8rem;
  opacity: 30%;
`;

const Preview = styled.div`
  margin-top: 0.6rem;
  color: #484848;
  font-size: 0.8rem;
  font-weight: 400;
`;

const UserList = styled.div`
  display: flex;
  margin-top: 1.7rem;
  width: 100%;
  flex-direction: column;
`;

const Test = styled.div`
  padding: 4rem 0 0 2rem;
`;

export default Sidebar;
