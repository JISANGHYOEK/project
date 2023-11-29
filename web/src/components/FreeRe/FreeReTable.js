import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Pagination, Box } from "@mui/material";
import "./FreeRe.css";

function FreeReTable({ FreeReDatas }) {
  const itemsPerPage = 7; // 페이지당 보여줄 항목 수
  const totalItems = FreeReDatas.length; // 전체 항목 수
  const totalPages = Math.ceil(totalItems / itemsPerPage); // 전체 페이지 수

  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 번호

  const handlePageChange = (event, pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // 현재 페이지에 해당하는 항목들을 가져오는 함수
  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return FreeReDatas.slice(startIndex, endIndex);
  };

  const currentItems = getCurrentPageItems(); // 현재 페이지에 해당하는 항목들

  return (
    <div className="form-container">
      <label className="title">미래투자 무료 추천 종목</label>
      <table className="FreeRe-table">
        {" "}
        {/* FreeRe-table 클래스를 적용 */}
        <tbody>
          {currentItems.map((FreeReData) => (
            <tr className="FreeRe-table-row" key={FreeReData.id}>
              {" "}
              {/* FreeRe-table-row 클래스를 적용 */}
              <td className="FreeRe-table-column">
                {" "}
                {/* FreeRe-table-column 클래스를 적용 */}
                <div>
                  <Link
                    to={`/FreeRePage/id=${FreeReData.id}`}
                    className="item-title"
                  >
                    {" "}
                    {/* item-title 클래스를 적용 */}
                    {FreeReData.title}
                  </Link>
                  <span className="item-date">{FreeReData.createAt}</span>{" "}
                  {/* item-date 클래스를 적용 */}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination-container">
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
        />
      </div>
      {currentPage === totalPages && <Box sx={{ height: "48vh" }} />}
    </div>
  );
}

export default FreeReTable;
