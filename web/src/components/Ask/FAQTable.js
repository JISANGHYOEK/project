// FAQTable.js

import React, { useState } from "react";
import { Box, Pagination } from "@mui/material";
import "./FAQ.css";

function FAQTable({ faqs }) {
  const itemsPerPage = 7;
  const totalItems = faqs.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFAQ, setSelectedFAQ] = useState(null);

  const handlePageChange = (event, pageNumber) => {
    setCurrentPage(pageNumber);
    setSelectedFAQ(null); // 페이지 변경 시 선택된 FAQ 초기화
  };

  const handleFAQClick = (faq) => {
    setSelectedFAQ(faq);
  };

  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return faqs.slice(startIndex, endIndex);
  };

  const currentItems = getCurrentPageItems();

  return (
    <div className="faq-container">
      <label className="title">1:1 문의</label>
      <hr />
      {currentItems.map((faq) => (
        <div key={faq.id} onClick={() => handleFAQClick(faq)}>
          <div className="faq-item-title">{faq.title}</div>
          {selectedFAQ && selectedFAQ.id === faq.id && (
            <div className="faq-detail">
              <p>답변: {selectedFAQ.answer}</p>
            </div>
          )}
        </div>
      ))}
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        className="pagination-style"
      />
      {currentPage === totalPages && (
        <Box sx={{ height: "vh" }} className="box-style" />
      )}
    </div>
  );
}

export default FAQTable;
