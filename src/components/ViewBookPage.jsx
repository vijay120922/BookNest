import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ViewBookPage.css';

const ViewBookPage = ({ books }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) return <div className="view-book">Book not found.</div>;

  return (
    <div className="view-book">
      <div className="book-card">
        <img
          src={book.image || `https://covers.openlibrary.org/b/id/${10578958 + book.id}-L.jpg`}
          alt={book.title}
          className="book-cover"
        />
        <div className="book-info">
          <h2>{book.title}</h2>
          <p><strong>Author:</strong> {book.author}</p>
          <p><strong>Genre:</strong> {book.genre}</p>
          <p><strong>Total:</strong> {book.total}</p>
          <p><strong>Available:</strong> {book.available}</p>
          <p>
            <strong>Status:</strong>{' '}
            <span className={book.available > 0 ? 'available' : 'unavailable'}>
              {book.available > 0 ? 'Available' : 'Unavailable'}
            </span>
          </p>
          <button onClick={() => navigate(-1)} className="back-btn">
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewBookPage;
