import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import styled from "styled-components";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutWrapper>
      <LayoutSidebar>
        <Sidebar />
      </LayoutSidebar>
      <LayoutMain>
        <Navbar />
        <LayoutContent>{children}</LayoutContent>
      </LayoutMain>
    </LayoutWrapper>
  );
};

export default Layout;

const LayoutWrapper = styled.div`
  display: flex;
  height: 100vh;
`;

const LayoutSidebar = styled.div`
  width: 260px;
  background-color: #ffffff;
  color: #637381;
`;

const LayoutMain = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const LayoutContent = styled.div`
  padding: 20px;
  background-color: #f4f4f4;
  flex-grow: 1;
`;
