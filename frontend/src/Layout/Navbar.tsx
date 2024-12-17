import moment from "moment";
import React from "react";
import styled from "styled-components";
import ProfilePicture from "../Assets/images/ProfilePicture.png";
import { ReactComponent as BellLogo } from "../Assets/svg/Navbar/Bell.svg";
import { ReactComponent as QuestionLogo } from "../Assets/svg/Navbar/Question.svg";

const Navbar: React.FC = () => {
  return (
    <NavbarWrapper>
      <NavbarItem>
        <p>Hello, Ekamini</p>
        <p>{moment().format("ddd, DD MMMM YYYY")}</p>
      </NavbarItem>
      <NavbarItem>
        <NotiIcon>
          <BellLogo />
        </NotiIcon>
        <NotiIcon>
          <QuestionLogo />
        </NotiIcon>
      </NavbarItem>
      <ProfileSection>
        <NavbarItem>
          <p>Ekemini Mark</p>
          <p>Heaps Normal</p>
        </NavbarItem>
        <img src={ProfilePicture} alt="Profile" height={40} width={40} />
      </ProfileSection>
    </NavbarWrapper>
  );
};

export default Navbar;

const NavbarWrapper = styled.div`
  background: #147d73;
  height: 84px;
  padding: 16px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
`;

const NavbarItem = styled.div`
  font-weight: 500;

  p {
    margin: 10px;
  }

  p:nth-child(2) {
    font-weight: 400;
    font-size: 12px;
    justify-self: end;
  }

  &:nth-child(2) {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }

  &:nth-child(3) {
    justify-self: end;
  }
`;

const NotiIcon = styled.div`
  width: 40px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #f0f0f0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
`;
