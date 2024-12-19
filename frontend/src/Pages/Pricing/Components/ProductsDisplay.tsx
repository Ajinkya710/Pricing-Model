import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectSearchProductData, selectSelectedProducts } from "../store/selector";
import styled from "styled-components";
import { ReactComponent as SampleProductImage } from "../../../Assets/svg/SampleProductImage.svg";
import { useAppDispatch } from "../../../store";
import {
  deselectAllProducts,
  selectAllProducts,
  toggleProductSelection,
} from "../store/slice";

const ProductsDisplay = () => {
  const dispatch = useAppDispatch();
  const searchProductData = useSelector(selectSearchProductData);
  const [productSelection, setProductSelection] = useState<string>("none");
  const selectedProducts = useSelector(selectSelectedProducts)

  const handleProductSelect = (productId: string) => {
    const product = searchProductData.find(
      (product) => product.id === productId
    );
    if (product) {
      dispatch(toggleProductSelection(product));
    }
  };

  return (
    <React.Fragment>
      <p>
        Showing {searchProductData.length} Results for Product Name or SKU Code
      </p>
      <RadioGroup>
        <Label>
          <RadioInput
            type="radio"
            name="productSelection"
            value={"none"}
            checked={productSelection === "none"}
            onChange={() => {
              setProductSelection("none");
              dispatch(deselectAllProducts());
            }}
          />
          <CustomRadio checked={productSelection === "none"} />
          Deselect All
        </Label>
        <Divider />
        <Label>
          <RadioInput
            type="radio"
            name="productSelection"
            value={"all"}
            checked={productSelection === "all"}
            onChange={() => {
              setProductSelection("all");
              dispatch(selectAllProducts());
            }}
          />
          <CustomRadio checked={productSelection === "all"} />
          Select All
        </Label>
      </RadioGroup>
      <ProductsDisplayWrapper>
        {searchProductData.map((product) => (
          <ProductCard key={product.id}>
            <CheckboxWrapper>
              <StyledCheckbox
                type="checkbox"
                checked={selectedProducts.some((p) => p.id === product.id)}
                onChange={() => handleProductSelect(product.id)}
                id={`checkbox-${product.id}`}
              />
            </CheckboxWrapper>
            <ImageBox>
              <SampleProductImage />
            </ImageBox>
            <ProductDescription>
              <p>{product.title}</p>
              <div>
                <p>{product.skuCode}</p>
                <Divider />
                <p>Quantity x Size</p>
              </div>
            </ProductDescription>
          </ProductCard>
        ))}
      </ProductsDisplayWrapper>
      <p>
        You’ve selected <b>{selectedProducts.length} Products</b>, these will be
        added to <b>Profile Name</b>
      </p>
    </React.Fragment>
  );
};

export default ProductsDisplay;

const ProductsDisplayWrapper = styled.div`
  max-height: 600px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ProductCard = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  }
`;

const ProductDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  p {
    margin: 0 !important;
  }

  div {
    display: flex;
    gap: 6px;

    p {
      margin: 0;

      &:first-child {
        font-size: 12px;
        color: #637381;
      }

      &:last-child {
        font-size: 12px;
        color: #212b36;
        font-weight: 500;
      }
    }
  }
`;

const ImageBox = styled.div`
  height: 50px;
  width: 50px;
  background: #f8fafc;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Divider = styled.div`
  border-left: 1px solid #f0f0f0;
  margin: 0 10px;
  height: 18px;
`;

export const RadioInput = styled.input`
  display: none;
`;

export const RadioGroup = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 26px;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const CustomRadio = styled.span<{ checked: boolean }>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid #08822a;
  display: inline-block;
  margin-right: 8px;
  position: relative;
  background-color: ${({ checked }) => (checked ? "#08822A" : "transparent")};

  &::after {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: ${({ checked }) => (checked ? "#F4FFF7" : "transparent")};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledCheckbox = styled.input`
  width: 16px;
  height: 16px;
  border: 1px solid #b2c4d4;
  border-radius: 3px;
  background-color: transparent;
  appearance: none;
  cursor: pointer;
  position: relative;

  &:checked {
    background-color: #08822a;
    border: 1px solid #f4fff7;
  }
`;
