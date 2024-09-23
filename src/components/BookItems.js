import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchBookDetails } from '../store/actions';
import '../styles/BookItems.css'; // Import stylów

const BookItem = ({ book }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(fetchBookDetails(book.id));
  };

  return (
    <div className="book-shelf">
      <div className="book-item" onClick={handleClick}>
        <img
          src={book.volumeInfo.imageLinks?.thumbnail || 'placeholder-image-url.jpg'}
          alt={book.volumeInfo.title}
        />
        <h3>{book.volumeInfo.title}</h3>
        <p>{book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown author'}</p>
        <div className="publication-date">
          {book.volumeInfo.publishedDate ? `Published: ${book.volumeInfo.publishedDate}` : 'No date available'}
        </div>
      </div>
    </div>
  );
};

export default BookItem;

