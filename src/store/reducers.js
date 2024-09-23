import { FETCH_BOOKS, FETCH_BOOK_DETAILS } from './actions';

const initialState = {
  books: [],
  selectedBook: null,
};

export const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS:
      return { ...state, books: action.payload };
    case FETCH_BOOK_DETAILS:
      return { ...state, selectedBook: action.payload };
    default:
      return state;
  }
};
