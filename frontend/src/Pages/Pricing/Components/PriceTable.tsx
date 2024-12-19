import React from "react";
import styled from "styled-components";
import { ReactComponent as RefreshIcon } from "../../../Assets/svg/RefreshIcon.svg";
import { useSelector } from "react-redux";
import { selectInitialData, selectSelectedProducts } from "../store/selector";
const PriceTable: React.FC = () => {
  const selectedProducts = useSelector(selectSelectedProducts);
  const initialData = useSelector(selectInitialData);

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
                // checked={selectAll}
                // onChange={handleSelectAll}
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
          {selectedProducts.map((product) => (
            <tr key={product.id}>
              <td>
                <input
                  type="checkbox"
                  // checked={selectedRows.includes(product.id)}
                  // onChange={() => handleRowSelect(product.id)}
                />
              </td>
              <td>{product.title}</td>
              <td>{product.skuCode}</td>
              <td>
                {
                  initialData?.InitialData.Categories.find(
                    (d) => d.id === product.categoryId
                  )?.name
                }
              </td>
              <td>${(0).toFixed(2)}</td>
              <td>
                $
                <input
                  type="number"
                  // value={product.adjustment}
                  // onChange={(e) =>
                  //   handleAdjustmentChange(
                  //     product.id,
                  //     parseFloat(e.target.value) || 0
                  //   )
                  // }
                />
              </td>
              <td>${(0).toFixed(2)}</td>
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
