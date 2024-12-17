import React from "react";
import styled from "styled-components";
import { ReactComponent as DashboardLogo } from "../Assets/svg/Dashboard/Dashboard.svg";
import { ReactComponent as OrdersLogo } from "../Assets/svg/Dashboard/Orders.svg";
import { ReactComponent as CustomersLogo } from "../Assets/svg/Dashboard/Customers.svg";
import { ReactComponent as ProductsLogo } from "../Assets/svg/Dashboard/Products.svg";
import { ReactComponent as PricingLogo } from "../Assets/svg/Dashboard/Pricing.svg";
import { ReactComponent as FreightLogo } from "../Assets/svg/Dashboard/Freight.svg";
import { ReactComponent as IntegrationsLogo } from "../Assets/svg/Dashboard/Integrations.svg";
import { ReactComponent as SettingsLogo } from "../Assets/svg/Dashboard/Settings.svg";
import { Link, useLocation } from "react-router-dom";
import SidebarHeaderLogo from "../Assets/images/SidebarHeaderLogo.png";
import SidebarFooterLogo from "../Assets/images/SidebarFooterLogo.png";

const menu = [
  {
    name: "Dashboard",
    url: "/dashboard",
    logo: <DashboardLogo />,
  },
  {
    name: "Orders",
    url: "/orders",
    logo: <OrdersLogo />,
  },
  {
    name: "Customers",
    url: "/customers",
    logo: <CustomersLogo />,
  },
  {
    name: "Products",
    url: "/products",
    logo: <ProductsLogo />,
  },
  {
    name: "Pricing",
    url: "/pricing",
    logo: <PricingLogo />,
  },
  {
    name: "Freight",
    url: "/freight",
    logo: <FreightLogo />,
  },
  {
    name: "Integrations",
    url: "/integrations",
    logo: <IntegrationsLogo />,
  },
  {
    name: "Settings",
    url: "/settings",
    logo: <SettingsLogo />,
  },
];

const Sidebar: React.FC = () => {
  const location = useLocation();

  return (
    <SidebarWrapper>
      <Logo>
        <img src={SidebarHeaderLogo} alt="Heaps Normal Logo" />
      </Logo>
      <Menu>
        {menu.map((item, index) => {
          const isActive = location.pathname === item.url;
          return (
            <MenuItem key={index} to={item.url} isActive={isActive}>
              <StyledLogo isActive={isActive}>{item.logo}</StyledLogo>
              <span>{item.name}</span>
            </MenuItem>
          );
        })}
      </Menu>
      <Logo>
        <img src={SidebarFooterLogo} alt="FOBOH logo" />
      </Logo>
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
  padding-left: 30px;
`;

const Menu = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  font-weight: 500;
`;

const MenuItem = styled(Link)<{ isActive: boolean }>`
  padding: 10px 0 10px 32px;
  display: flex;
  gap: 10px;
  text-decoration: none;
  color: #637381;

  ${({ isActive }) =>
    isActive &&
    `
      color: #212b36 !important;
  `}
`;

const StyledLogo = styled.div<{ isActive: boolean }>`
  svg {
    color: ${({ isActive }) => (isActive ? "#147D73" : "inherit")};
  }
`;
