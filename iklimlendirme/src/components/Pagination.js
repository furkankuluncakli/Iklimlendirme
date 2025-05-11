import React from "react";
import styles from "./pagination.module.css";
import { FaCaretSquareLeft, FaCaretSquareRight } from "react-icons/fa";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className={styles.paginationContainer}>
      <button
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
        className={styles.paginationButton}
      >
        {<FaCaretSquareLeft style={{ fontSize: "1.5rem"}} />} Geri
      </button>
      <span className={styles.paginationInfo}>
        Sayfa {currentPage} / {totalPages}
      </span>
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className={styles.paginationButton}
      >
        İleri <FaCaretSquareRight style={{ fontSize: "1.5rem"}} />
        
      </button>
    </div>
  );
}

export default Pagination;
