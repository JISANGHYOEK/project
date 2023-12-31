import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Pagination, Box } from "@mui/material";
import { adminStore } from "../../store";
import "./Ror.css";
import RorWriteHeader from "./RorWriterHeader";

function RorTable({ Rors }) {
  const { isAdmin } = adminStore();

  const itemsPerPage = 7; // 페이지당 보여줄 항목 수
  const totalItems = Rors.length; // 전체 항목 수
  const totalPages = Math.ceil(totalItems / itemsPerPage); // 전체 페이지 수

  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 번호

  const handlePageChange = (event, pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // 현재 페이지에 해당하는 항목들을 가져오는 함수
  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const sortedRoRDatas = Rors.sort((a, b) => b.id - a.id);
    return sortedRoRDatas.slice(startIndex, endIndex);
  };

  const currentItems = getCurrentPageItems(); // 현재 페이지에 해당하는 항목들

  return (
    <div className="form-container">
      <label className="title">미래투자 매매 수익 결산</label>
      {isAdmin && <RorWriteHeader />}
      <table className="Ror-table">
        <tbody>
          {currentItems.map((Ror) => (
            <tr className="Ror-table-row" key={Ror.id}>
              <td className="Ror-table-column">
                <div>
                  <Link to={`/RorPage/${Ror.id}`} className="item-title">
                    {Ror.title}
                  </Link>
                  <span className="item-date">{Ror.createAt}</span>{" "}
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
      {currentPage === totalPages && <Box sx={{ height: "vh" }} />}
    </div>
  );
}

export default RorTable;
