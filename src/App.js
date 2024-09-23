import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import SearchBar from './components/SearchBar'; 
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';
import './App.css'; 

const App = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.scroll-in');
      elements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (position < windowHeight - 100) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Provider store={store}>
      <div className="container fade-in">
        <header className="app-header">
          <h1>Book Search App</h1>
        </header>

        <div className="scroll-in">
          <SearchBar />
        </div>

        <div className="scroll-in">
          <BookList />
        </div>

        <div className="scroll-in">
          <BookDetails />
        </div>

        <footer className="app-footer">
          <p>&copy; 2024 Book Search App. All rights reserved.</p>
        </footer>
      </div>
    </Provider>
  );
};

export default App;

