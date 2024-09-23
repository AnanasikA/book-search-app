import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // Użycie poprawnego importu
import { composeWithDevTools } from '@redux-devtools/extension'; // Nowy import
import { booksReducer } from './reducers';

const store = createStore(
  booksReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;

