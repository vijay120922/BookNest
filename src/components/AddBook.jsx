import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddBook.css';

const AddBook = ({ onAdd }) => {
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: '',
    author: '',
    genre: 'Fiction',
    total: '',
    available: '',
    status: 'Available',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleImageDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => setBook({ ...book, image: reader.result });
      reader.readAsDataURL(file);
    }
  };

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => setBook({ ...book, image: reader.result });
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      ...book,
      id: Date.now(),
    };
    onAdd(newBook);
    navigate('/');
  };

  return (
    <div className="add-book-modal">
      <div className="add-book-form glass">
        <h3>Add New Book</h3>
        <div className="form-body">
          <div
            className="image-drop-area"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleImageDrop}
          >
            {book.image ? (
              <img src={book.image} alt="Book Cover" />
            ) : (
              <p>Drag & Drop Image Here</p>
            )}
            <input type="file" accept="image/*" onChange={handleImageSelect} />
          </div>

          <form onSubmit={handleSubmit} className="form-right">
            <input
              name="title"
              placeholder="Book Title"
              value={book.title}
              onChange={handleChange}
              required
            />
            <input
              name="author"
              placeholder="Author Name"
              value={book.author}
              onChange={handleChange}
              required
            />

            <select name="genre" value={book.genre} onChange={handleChange}>
              <option value="Fiction">Fiction</option>
              <option value="Finance">Finance</option>
              <option value="Self-help">Self-help</option>
            </select>

            <input
              type="number"
              name="total"
              placeholder="Total Books"
              value={book.total}
              onChange={handleChange}
              min="1"
              required
            />
            <input
              type="number"
              name="available"
              placeholder="Available Books"
              value={book.available}
              onChange={handleChange}
              min="0"
              max={book.total}
              required
            />

            <select name="status" value={book.status} onChange={handleChange}>
              <option value="Available">Available</option>
              <option value="Issued">Issued</option>
              <option value="Overdue">Overdue</option>
            </select>

            <div className="form-actions">
              <button type="submit">Add</button>
              <button type="button" onClick={() => navigate('/')} className="cancel">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
