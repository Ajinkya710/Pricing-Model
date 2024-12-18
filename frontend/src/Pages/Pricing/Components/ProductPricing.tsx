import styled from "styled-components";
import { ReactComponent as EditIcon } from "../../../Assets/svg/EditIcon.svg";
import ProductPricingForm from "./ProductPricingForm";

const ProductPricing = () => {
  const isCompleted = false;

  return (
    <ProductPricingWrapper>
      <DescriptionBox>
        <div>
          <p>Set Product Pricing</p>
          <p>Cheeky little description goes in here</p>
        </div>
        {isCompleted && (
          <CompleteButton>
            <GreenStatus />
            <p>Completed</p>
          </CompleteButton>
        )}
      </DescriptionBox>
      <Divider />
      {isCompleted ? (
        <DescriptionBox>
          <div>
            <p>You’ve selected 2 Products</p>
            <p>ACD & Crublem</p>
            <p>With Price Adjustment Mode set to Dynamic Increase of 10%</p>
          </div>
          <EditButton>
            <EditIcon />
            <span>Make Changes</span>
          </EditButton>
        </DescriptionBox>
      ) : (
        <ProductPricingForm />
      )}
    </ProductPricingWrapper>
  );
};

export default ProductPricing;

const ProductPricingWrapper = styled.div`
  background: #ffffff;
  padding: 26px;
  border-radius: 8px;
  margin-top: 26px;
`;

const DescriptionBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;

  &:first-child {
    div > p:last-child {
      color: #637381;
      font-size: 14px;
      font-weight: 400;
    }

    div:nth-of-type(2) > p: last-child {
      font-size: 14px;
      color: #08822a;
    }
  }

  &:last-child {
    p:nth-child(1),
    p:nth-child(3) {
      color: #637381;
      font-size: 12px;
      font-weight: 400;

      > span {
        font-weight: 500;
        color: #212b36;
      }
    }
  }
`;

const Divider = styled.div`
  border-bottom: 1px solid #f0f0f0;
  margin: 13px 0;
`;

const GreenStatus = styled.div`
  background-color: #08822a;
  height: 10px;
  width: 10px;
  border: 1.5px solid #ffffff;
  border-radius: 50%;
`;

const CompleteButton = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const EditButton = styled.button`
  background-color: #ffffff;
  border: 0.25px solid #f0f0f0;
  border-radius: 100px;
  max-height: 48px;
  padding: 13px;
  min-width: 120px;
  max-width: 400px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  > span {
    font-family: "Inter";
    color: #212b36;
    font-weight: 600;
    font-size: 14px;
  }
`;
