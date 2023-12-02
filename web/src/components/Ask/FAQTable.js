// FAQTable.js

import React, { useState } from "react";
import { Box, Pagination, Button } from "@mui/material";
import { adminStore } from "../../store";
import "./FAQ.css";
import axios from "axios";

function FAQTable({ faqs }) {
  const itemsPerPage = 7;
  const totalItems = faqs.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFAQ, setSelectedFAQ] = useState(null);
  const { isAdmin } = adminStore();

  const handlePageChange = (event, pageNumber) => {
    setCurrentPage(pageNumber);
    setSelectedFAQ(null); // 페이지 변경 시 선택된 FAQ 초기화
  };

  const handleFAQClick = (faq) => {
    if (selectedFAQ && selectedFAQ.id === faq.id) {
      // 이미 선택된 FAQ 항목을 클릭한 경우, 선택을 해제
      setSelectedFAQ(null);
    } else {
      // 그 외의 경우, 클릭한 FAQ 항목을 선택
      setSelectedFAQ(faq);
    }
  };

  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return faqs.slice(startIndex, endIndex);
  };

  const currentItems = getCurrentPageItems();

  const handleAnswerSubmit = async () => {
    if (selectedFAQ) {
      const answer = document.querySelector(".answer-input").value;

      try {
        const response = await axios.post(
          `api/AdminAskPage/${selectedFAQ.id}`,
          { answer }
        );

        // 요청이 성공적으로 처리되었을 때의 로직
        alert("답변이 성공적으로 제출되었습니다.");
        setSelectedFAQ(null); // 선택된 FAQ 초기화
      } catch (error) {
        // 요청이 실패했을 때의 로직
        alert("답변 제출에 실패했습니다.");
      }
    }
  };

  return (
    <div className="faq-container">
      <label className="title">1:1 문의</label>
      <hr />
      {currentItems.map((faq) => (
        <div key={faq.id}>
          <div className="faq-item-title" onClick={() => handleFAQClick(faq)}>
            {faq.title}
          </div>
          {selectedFAQ && selectedFAQ.id === faq.id && (
            <div className="faq-detail">
              <p>답변: {selectedFAQ.answer}</p>
              {isAdmin && (
                <div className="faq-answer">
                  <p>답변: </p>
                  <textarea className="answer-input" />
                  <button
                    className="answer-submit-btn"
                    onClick={handleAnswerSubmit}
                  >
                    답변 제출
                  </button>
                </div>
              )}
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
