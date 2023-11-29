import React from "react";

function FreeRePagenation(){

    const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
        const pageNumbers = [];
        // 페이지 번호 계산

        for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
            pageNumbers.push(i);
        }
    return(
        <nav>
      <ul className="pagination">
        {/* 페이지 번호 출력 */}
        {pageNumbers.map((number) => (
          <li key={number} className={number === currentPage ? "active" : ""}>
            <button onClick={() => paginate(number)}>{number}</button>
          </li>
        ))}
      </ul>
    </nav>
    )
}

export default FreeRePagenation;