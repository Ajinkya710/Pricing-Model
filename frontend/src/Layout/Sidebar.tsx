import React from 'react';
import styled from 'styled-components';

const Sidebar: React.FC = () => {
  return (
    <SidebarWrapper>
      <Logo>Logo</Logo>
      <Menu>
        <li>
          <a href="#home">Dashboard</a>
        </li>
        <li>
          <a href="#about">Orders</a>
        </li>
        <li>
          <a href="#services">Customers</a>
        </li>
        <li>
          <a href="#contact">Products</a>
        </li>
        <li>
          <a href="#contact">Pricing</a>
        </li>
        <li>
          <a href="#contact">Freight</a>
        </li>
        <li>
          <a href="#contact">Integrations</a>
        </li>
        <li>
          <a href="#contact">Settings</a>
        </li>
      </Menu>
      <Logo>Logo</Logo>
    </SidebarWrapper>
  );
};

export default Sidebar;

const SidebarWrapper = styled.div`
  background: #ffffff;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Logo = styled.div`
  height: 84px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Menu = styled.ul`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
`;
