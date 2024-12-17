import React from "react";
import Breadcrumbs from "../../Layout/Breadcrumbs";
import styled from "styled-components";
import PricingProfile from "./Components/PricingProfile";

const Pricing = () => {
  return (
    <React.Fragment>
      <PricingWrapper>
        <Breadcrumbs
          items={["Pricing Profile", "Setup a Profile"]}
          description="Setup your pricing profile, select products and assign customers"
        />
        <Buttons>
          <CancelButton>Cancel</CancelButton>
          <SaveButton>Save as Draft</SaveButton>
        </Buttons>
      </PricingWrapper>
      <PricingProfile />
    </React.Fragment>
  );
};

export default Pricing;

const PricingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Buttons = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const CancelButton = styled.button`
  background: none;
  border: none;
  color: #212b36;
  font-weight: 600;
  font-family: Inter;
  padding: 13px 16px;
  cursor: pointer;
`;

const SaveButton = styled.button`
  max-width: 400px;
  min-width: 120px;
  font-weight: 600;
  font-family: Inter;
  background-color: #ffffff;
  border-radius: 100px;
  border: 0.25px solid #f0f0f0;
  padding: 13px 16px;
  cursor: pointer;
`;
