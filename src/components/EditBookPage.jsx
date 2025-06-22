import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './EditBookPage.css';

const books = [
  {
    id: 1,
    title: 'Atomic Habits',
    author: 'James Clear',
    genre: 'Self-help',
    total: 10,
    available: 4,
    status: 'Available',
  },
  {
    id: 2,
    title: '1984',
    author: 'George Orwell',
    genre: 'Fiction',
    total: 8,
    available: 0,
    status: 'Issued',
  },
  {
    id: 3,
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    genre: 'Finance',
    total: 5,
    available: 2,
    status: 'Overdue',
  },
];

const EditBookPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) return <div className="edit-book">Book not found.</div>;

  return (
    <div className="edit-book">
      <div className="form-container">
        <h2>Edit Book - {book.title}</h2>
        <form>
          <label>Title</label>
          <input type="text" defaultValue={book.title} />

          <label>Author</label>
          <input type="text" defaultValue={book.author} />

          <label>Genre</label>
          <input type="text" defaultValue={book.genre} />

          <label>Total Copies</label>
          <input type="number" defaultValue={book.total} />

          <label>Available Copies</label>
          <input type="number" defaultValue={book.available} />

          <label>Status</label>
          <select defaultValue={book.status}>
            <option value="Available">Available</option>
            <option value="Issued">Issued</option>
            <option value="Overdue">Overdue</option>
          </select>

          <div className="form-actions">
            <button type="submit">Save Changes</button>
            <button type="button" className="back" onClick={() => navigate(-1)}>Go Back</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBookPage;
