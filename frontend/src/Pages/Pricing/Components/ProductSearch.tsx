import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Search } from "../../../Assets/svg/Search.svg";

const ProductSearch = () => {
  const [search1, setSearch1] = useState("");
  const [search2, setSearch2] = useState("");
  const [dropdown1, setDropdown1] = useState("");
  const [dropdown2, setDropdown2] = useState("");
  const [dropdown3, setDropdown3] = useState("");

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
            placeholder="Search..."
            onChange={(e) => setSearch1(e.target.value)}
          />
        </SearchBarContainer>

        {/* Second Search Bar */}
        <div>
          <SearchBar
            id="search2"
            type="text"
            value={search2}
            placeholder="Product / SKU"
            onChange={(e) => setSearch2(e.target.value)}
          />
        </div>

        {/* Dropdown 1 */}
        <div>
          <Dropdown
            id="dropdown1"
            value={dropdown1}
            onChange={(e) => setDropdown1(e.target.value)}
          >
            <option value="">Category</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Dropdown>
        </div>

        {/* Dropdown 2 */}
        <div>
          <Dropdown
            id="dropdown2"
            value={dropdown2}
            onChange={(e) => setDropdown2(e.target.value)}
          >
            <option value="">Segment</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Dropdown>
        </div>

        {/* Dropdown 3 */}
        <div>
          <Dropdown
            id="dropdown3"
            value={dropdown3}
            onChange={(e) => setDropdown3(e.target.value)}
          >
            <option value="">Brand</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Dropdown>
        </div>
      </ProductSearchWrapper>
      <p>Showing 6 Result for Product Name or SKU Code</p>
      <p>You’ve selected 3 Products, these will be added Profile Name</p>
    </React.Fragment>
  );
};

export default ProductSearch;

const ProductSearchWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
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
