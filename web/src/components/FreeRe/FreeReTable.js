import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Pagination, Box } from "@mui/material";
import "./FreeRe.css";
import { adminStore } from "../../store";
import FreeReWriteHeader from "./FreeReWriteHeader";

function FreeReTable({ FreeReDatas }) {
  const itemsPerPage = 7; // 페이지당 보여줄 항목 수
  const totalItems = FreeReDatas.length; // 전체 항목 수
  const totalPages = Math.ceil(totalItems / itemsPerPage); // 전체 페이지 수

  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 번호

  const { isAdmin } = adminStore();

  const handlePageChange = (event, pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // 현재 페이지에 해당하는 항목들을 가져오는 함수
  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const sortedFRDatas = FreeReDatas.sort((a, b) => b.id - a.id);
    return sortedFRDatas.slice(startIndex, endIndex);
  };

  const currentItems = getCurrentPageItems(); // 현재 페이지에 해당하는 항목들

  return (
    <div className="form-container">
      <label className="title">미래투자 무료 추천 종목</label>
      {isAdmin && <FreeReWriteHeader />}
      <table className="FreeRe-table">
        <tbody>
          {currentItems.map((FreeReData) => (
            <tr className="FreeRe-table-row" key={FreeReData.id}>
              <td className="FreeRe-table-column">
                <div>
                  <Link
                    to={`/FreeRePage/${FreeReData.id}`}
                    className="item-title"
                  >
                    {FreeReData.title}
                  </Link>
                  <span className="item-date">{FreeReData.createAt}</span>{" "}
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
      {currentPage === totalPages && <Box sx={{ height: "vh" }} />}
    </div>
  );
}

export default FreeReTable;
