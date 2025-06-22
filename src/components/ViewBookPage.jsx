import React from 'react';
import { useParams } from 'react-router-dom';
import './ViewBookPage.css';

const books = [
  {
    id: 1,
    title: 'Atomic Habits',
    author: 'James Clear',
    genre: 'Self-help',
    description: 'An easy & proven way to build good habits.',
    total: 10,
    available: 4,
  },
  {
    id: 2,
    title: '1984',
    author: 'George Orwell',
    genre: 'Fiction',
    description: 'A dystopian social science fiction novel.',
    total: 8,
    available: 0,
  },
  {
    id: 3,
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    genre: 'Finance',
    description: 'Timeless lessons on wealth, greed, and happiness.',
    total: 5,
    available: 2,
  },
];

const ViewBookPage = () => {
  const { id } = useParams();
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) return <div className="view-book">Book not found.</div>;

  return (
    <div className="view-book">
      <div className="book-card">
        <img
          src={`https://covers.openlibrary.org/b/id/${10578958 + book.id}-L.jpg`}
          alt={book.title}
          className="book-cover"
        />
        <div className="book-info">
          <h2>{book.title}</h2>
          <p><strong>Author:</strong> {book.author}</p>
          <p><strong>Genre:</strong> {book.genre}</p>
          <p><strong>Description:</strong> {book.description}</p>
          <p><strong>Total:</strong> {book.total}</p>
          <p><strong>Available:</strong> {book.available}</p>
          <p>
            <strong>Status:</strong>{' '}
            <span className={book.available > 0 ? 'available' : 'unavailable'}>
              {book.available > 0 ? 'Available' : 'Unavailable'}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewBookPage;
