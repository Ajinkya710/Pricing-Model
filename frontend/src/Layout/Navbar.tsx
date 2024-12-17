// src/components/Navbar.tsx
import React from "react";
import styled from "styled-components";

const Navbar: React.FC = () => {
  return (
    <NavbarWrapper>
      <h1>My App</h1>
    </NavbarWrapper>
  );
};

export default Navbar;

const NavbarWrapper = styled.div`
  background: #147d73;
  height: 84px;
`;
