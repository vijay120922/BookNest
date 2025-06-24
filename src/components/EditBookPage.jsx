import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EditBookPage.css';

const EditBookPage = ({ books, setBooks }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const originalBook = books.find((b) => b.id === parseInt(id));
  const [book, setBook] = useState(originalBook || null);

  if (!book) return <div className="edit-book">Book not found.</div>;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedBooks = books.map((b) =>
      b.id === book.id ? { ...book, total: parseInt(book.total), available: parseInt(book.available) } : b
    );
    setBooks(updatedBooks);
    localStorage.setItem('books', JSON.stringify(updatedBooks));
    navigate('/');
  };

  return (
    <div className="edit-book">
      <div className="form-container glass">
        <h2>Edit Book - {book.title}</h2>
        <form onSubmit={handleSubmit}>
          <label>Title</label>
          <input type="text" name="title" value={book.title} onChange={handleChange} required />

          <label>Author</label>
          <input type="text" name="author" value={book.author} onChange={handleChange} required />

          <label>Genre</label>
          <select name="genre" value={book.genre} onChange={handleChange}>
            <option value="Fiction">Fiction</option>
            <option value="Finance">Finance</option>
            <option value="Self-help">Self-help</option>
          </select>

          <label>Total Copies</label>
          <input type="number" name="total" value={book.total} onChange={handleChange} min="1" required />

          <label>Available Copies</label>
          <input
            type="number"
            name="available"
            value={book.available}
            onChange={handleChange}
            min="0"
            max={book.total}
            required
          />

          <label>Status</label>
          <select name="status" value={book.status} onChange={handleChange}>
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
