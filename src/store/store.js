import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; 
import { composeWithDevTools } from '@redux-devtools/extension'; 
import { booksReducer } from './reducers';

const store = createStore(
  booksReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;

