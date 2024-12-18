import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as RefreshIcon } from "../../../Assets/svg/RefreshIcon.svg";

interface Product {
  id: number;
  title: string;
  sku: string;
  category: string;
  price: number;
  adjustment: number;
}

const PriceTable: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      title: "Product A",
      sku: "SKU001",
      category: "Category 1",
      price: 100,
      adjustment: 0,
    },
    {
      id: 2,
      title: "Product B",
      sku: "SKU002",
      category: "Category 2",
      price: 200,
      adjustment: 0,
    },
    {
      id: 3,
      title: "Product C",
      sku: "SKU003",
      category: "Category 3",
      price: 300,
      adjustment: 0,
    },
  ]);

  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setSelectedRows(selectAll ? [] : products.map((product) => product.id));
  };

  const handleRowSelect = (id: number) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const handleAdjustmentChange = (id: number, value: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, adjustment: value } : product
      )
    );
  };

  return (
    <TableWrapper>
      <RefreshDiv>
        <RefreshButton>
          <span>Refresh New Price Table</span>
          <RefreshIcon />
        </RefreshButton>
      </RefreshDiv>
      <table>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAll}
              />
            </th>
            <th>Product Title</th>
            <th>SKU Code</th>
            <th>Category</th>
            <th>Based on Price</th>
            <th>Adjustment</th>
            <th>New Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedRows.includes(product.id)}
                  onChange={() => handleRowSelect(product.id)}
                />
              </td>
              <td>{product.title}</td>
              <td>{product.sku}</td>
              <td>{product.category}</td>
              <td>${product.price.toFixed(2)}</td>
              <td>
                $
                <input
                  type="number"
                  value={product.adjustment}
                  onChange={(e) =>
                    handleAdjustmentChange(
                      product.id,
                      parseFloat(e.target.value) || 0
                    )
                  }
                />
              </td>
              <td>${(product.price + product.adjustment).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableWrapper>
  );
};

export default PriceTable;

const RefreshDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 8px;
`;

const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  margin: 20px 0;

  table {
    width: 100%;
    border-collapse: collapse;
    text-align: left;

    th {
      border: none;
      padding: 12px;
      background: none;
      color: #637381;
      font-size: 14px;
      font-weight: 400;

      &: first-child {
        width: 25px;
      }
      &: last-child {
        color: #212b36;
        font-weight: 500;
      }
    }

    td {
      border: 1px solid #f0f0f0;
      padding: 12px;
      color: #212b36;
      font-size: 14px;
      font-weight: 500;

      &: nth-child(5) {
        color: #637381;
      }

      input[type="number"] {
        border: none;
      }
    }

    td {
      background-color: #ffffff;
    }

    input[type="checkbox"] {
      width: 16px;
      height: 16px;
      cursor: pointer;
    }

    input[type="number"] {
      width: 80px;
      padding: 6px;
      border: 1px solid #d0d5dd;
      border-radius: 4px;
      font-size: 14px;
    }

    input[type="number"]:focus {
      outline: none;
      border-color: #08822a;
    }
  }
`;

const RefreshButton = styled.button`
  background-color: #ffffff;
  border: none;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  cursor: pointer;

  > span {
    font-family: "Inter";
    color: #563fe3;
    font-weight: 600;
    font-size: 14px;
  }
`;
