import React, { useState } from 'react';
import './Book.css';
import axios from 'axios';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [imageUrl, setImageUrl] = useState('');

  const handleGet = () => {
    axios.get('http://localhost:5000/')
      .then((response) => {
        const fetchedBooks = response.data;
        setBooks(fetchedBooks);
      })
      .catch((error) => {
        console.error('GET request error:', error);
      });
  };

  const handleImageUpload = (bookId) => {
    axios.put('http://localhost:5000/book/${bookId}/image', { imageUrl })
      .then((response) => {
        console.log('Image URL updated for book ID:', bookId);
        handleGet();
      })
      .catch((error) => {
        console.error('Error updating image URL:', error);
      });
  };

  return (
    <div style={{ backgroundColor: '#C3CED7', minHeight: '100vh', padding: '20px' }}>
      <center>
        <h2>Books Available Here:</h2>
        <button onClick={handleGet}>GET</button>
        <ul className="book-list">
          {books.map((book, index) => (
            <li key={index} className="book-item">
              {book.image && (
                <img
                  src={book.image}
                  alt={book.name}
                  className="book-image"
                />
              )}
              <div className="book-details">
                <span className="book-name">{book.name}</span>
                <span className="book-author">{book.author}</span>
                <span className="book-description">{book.description}</span>
                <span className="book-price">{book.price}</span>
              </div>
            </li>
          ))}
        </ul>
      </center>
    </div>
  );
};

export default Books;