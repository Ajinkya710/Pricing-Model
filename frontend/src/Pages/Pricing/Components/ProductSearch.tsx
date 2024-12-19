import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as Search } from "../../../Assets/svg/Search.svg";
import { selectInitialData } from "../store/selector";
import { useSelector } from "react-redux";
import { fetchProductsData } from "../store/action";
import { useAppDispatch } from "../../../store";
import ProductsDisplay from "./ProductsDisplay";

const ProductSearch = () => {
  const dispatch = useAppDispatch();
  const initialData = useSelector(selectInitialData);

  const categories = initialData?.InitialData.Categories || [];
  const segments = initialData?.InitialData.Segments || [];
  const brands = initialData?.InitialData.Brands || [];

  const [search1, setSearch1] = useState("");
  const [dropdown1, setDropdown1] = useState("");
  const [dropdown2, setDropdown2] = useState("");
  const [dropdown3, setDropdown3] = useState("");

  useEffect(() => {
    const getData = async () => {
      dispatch(fetchProductsData());
    };
    getData();
  }, [dispatch]);

  return (
    <React.Fragment>
      <ProductSearchWrapper>
        {/* First Search Bar */}
        <SearchBarContainer>
          <SearchIcon />
          <SearchBar
            id="searchBar"
            type="text"
            value={search1}
            placeholder="Search Product / SKU"
            onChange={(e) => setSearch1(e.target.value)}
          />
        </SearchBarContainer>
        <div>
          <Dropdown
            id="category"
            value={dropdown1}
            onChange={(e) => setDropdown1(e.target.value)}
          >
            <option value="">Category</option>
            {categories.map((category) => (
              <optgroup key={category.id} label={category.name}>
                {category.subCategories.map((subCategory) => (
                  <option key={subCategory.id} value={subCategory.id}>
                    {subCategory.name}
                  </option>
                ))}
              </optgroup>
            ))}
          </Dropdown>
        </div>
        <div>
          <Dropdown
            id="segment"
            value={dropdown2}
            onChange={(e) => setDropdown2(e.target.value)}
          >
            <option value="">Segment</option>
            {segments.map((segment) => (
              <option key={segment.id} value={segment.id}>
                {segment.name}
              </option>
            ))}
          </Dropdown>
        </div>
        <div>
          <Dropdown
            id="brand"
            value={dropdown3}
            onChange={(e) => setDropdown3(e.target.value)}
          >
            <option value="">Brand</option>
            {brands.map((brand) => (
              <option key={brand.id} value={brand.id}>
                {brand.name}
              </option>
            ))}
          </Dropdown>
        </div>
      </ProductSearchWrapper>
      <ProductsDisplay />
    </React.Fragment>
  );
};

export default ProductSearch;

const ProductSearchWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 996px) {
    grid-template-columns: 1fr;
  }
`;

const SearchBarContainer = styled.div`
  position: relative;
`;

const SearchBar = styled.input`
  width: 100%;
  height: 48px;
  font-size: 16px;
  border: 1px solid #d0d5dd;
  border-radius: 8px;
  font-family: "Inter";

  &:focus {
    outline: none;
    border-color: #08822a;
  }
`;

const SearchIcon = styled(Search)`
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
`;

const Dropdown = styled.select`
  font-size: 16px;
  border: 1px solid #ccc;
  width: 100%;
  height: 48px;
  border-radius: 8px;
  font-family: "Inter";
  color: #667085;
  &:focus {
    outline: none;
    border-color: #08822a;
  }
`;
