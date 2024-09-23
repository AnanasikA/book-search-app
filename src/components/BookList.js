import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import BookItem from './BookItems';
import Pagination from './Pagination';
import '../styles/BookList.css'; 

const BookList = () => {
  const books = useSelector((state) => state.books);

  
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 9;  

  // Obliczamy zakres książek na stronie
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  // Funkcja zmieniająca stronę
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="book-list">
        {currentBooks.length > 0 ? (
          currentBooks.map((book) => <BookItem key={book.id} book={book} />)
        ) : (
          <p>No books found.</p>
        )}
      </div>

      {/* Dodajemy paginację */}
      <Pagination
        booksPerPage={booksPerPage}
        totalBooks={books.length}
        paginate={paginate}
      />
    </div>
  );
};

export default BookList;




