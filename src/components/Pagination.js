import React from 'react';
import '../styles/Pagination.css'; // Import stylów paginacji

const Pagination = ({ booksPerPage, totalBooks, paginate }) => {
  const pageNumbers = [];

  // Obliczamy liczbę stron
  for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="!#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;


