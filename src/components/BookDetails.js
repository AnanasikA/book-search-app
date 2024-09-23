import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/BookDetails.css'; // Import stylów

const BookDetails = () => {
  const selectedBook = useSelector((state) => state.selectedBook);

  if (!selectedBook) {
    return <p>Select a book to see details.</p>;
  }

  const { title, authors, description, publishedDate, pageCount, categories } = selectedBook.volumeInfo;

  return (
    <div className="book-details">
      <h2>{title}</h2>
      <p><strong>Author(s):</strong> {authors ? authors.join(', ') : 'Unknown author'}</p>
      <p><strong>Published Date:</strong> {publishedDate || 'N/A'}</p>
      <p><strong>Page Count:</strong> {pageCount || 'N/A'}</p>
      <p><strong>Categories:</strong> {categories ? categories.join(', ') : 'N/A'}</p>
      <br />
      <h3>Description:</h3>
      <div dangerouslySetInnerHTML={{ __html: description || 'No description available' }} />
    </div>
  );
};

export default BookDetails;


