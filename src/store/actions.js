import axios from 'axios';

export const FETCH_BOOKS = 'FETCH_BOOKS';
export const FETCH_BOOK_DETAILS = 'FETCH_BOOK_DETAILS';

export const fetchBooks = (query) => async (dispatch) => {
  const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  dispatch({ type: FETCH_BOOKS, payload: response.data.items });
};

export const fetchBookDetails = (id) => async (dispatch) => {
  const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`);
  dispatch({ type: FETCH_BOOK_DETAILS, payload: response.data });
};
