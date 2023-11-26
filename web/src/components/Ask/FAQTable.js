import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Pagination, Box } from "@mui/material";

const FAQTable = ({ faqs }) => {
  const itemsPerPage = 10; // 페이지당 보여줄 항목 수
  const totalItems = faqs.length; // 전체 항목 수
  const totalPages = Math.ceil(totalItems / itemsPerPage); // 전체 페이지 수

  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 번호

  const handlePageChange = (event, pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // 현재 페이지에 해당하는 항목들을 가져오는 함수
  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return faqs.slice(startIndex, endIndex);
  };

  const currentItems = getCurrentPageItems(); // 현재 페이지에 해당하는 항목들

  return (
    <Container>
      <table className="faq-item-table">
        <tbody>
          {currentItems.map((faq) => (
            <tr key={faq.id}>
              <td>
                <Link to={`/faq/${faq.id}`}>
                  <div>{faq.question}</div>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
      />
      {currentPage === totalPages && <Box sx={{ height: "48vh" }} />}
    </Container>
  );
};

export default FAQTable;
