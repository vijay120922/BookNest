import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEdit, FaTrash, FaEye, FaPlus } from 'react-icons/fa';
import './ManageBooksPage.css';

const genres = ['All', 'Fiction', 'Finance', 'Self-help'];
const statuses = ['All', 'Available', 'Issued', 'Overdue'];

const ManageBooksPage = ({ books, onDelete }) => {
  const [search, setSearch] = useState('');
  const [genre, setGenre] = useState('All');
  const [status, setStatus] = useState('All');
  const [filteredBooks, setFilteredBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const filtered = books.filter(book => {
      const matchSearch = book.title.toLowerCase().includes(search.toLowerCase());
      const matchGenre = genre === 'All' || book.genre === genre;
      const matchStatus = status === 'All' || book.status === status;
      return matchSearch && matchGenre && matchStatus;
    });
    setFilteredBooks(filtered);
  }, [search, genre, status, books]);

  return (
    <div className="manage-books">
      <h2>📘 Manage Books</h2>

      <div className="summary-cards">
        <div className="card">Total Books: {books.length}</div>
        <div className="card available">Available: {books.filter(b => b.available > 0).length}</div>
        <div className="card issued">Issued: {books.filter(b => b.status === 'Issued').length}</div>
        <div className="card overdue">Overdue: {books.filter(b => b.status === 'Overdue').length}</div>
      </div>

      <div className="filters">
        <input
          type="text"
          placeholder="Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={genre} onChange={(e) => setGenre(e.target.value)}>
          {genres.map((g, i) => (
            <option key={i} value={g}>{g}</option>
          ))}
        </select>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          {statuses.map((s, i) => (
            <option key={i} value={s}>{s}</option>
          ))}
        </select>
        <button className="add-button" onClick={() => navigate('/add')}>
           Add Book
        </button>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Genre</th>
              <th>Quantity</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredBooks.length === 0 ? (
              <tr><td colSpan="6" className="no-books">No books found.</td></tr>
            ) : (
              filteredBooks.map(book => (
                <tr key={book.id}>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.genre}</td>
                  <td>{book.total} / {book.available}</td>
                  <td className={book.status.toLowerCase()}>{book.status}</td>
                  <td className="action-icons">
                    <FaEye title="View" onClick={() => navigate(`/view/${book.id}`)} />
                    <FaEdit title="Edit" onClick={() => navigate(`/edit/${book.id}`)} />
                    <FaTrash title="Delete" onClick={() => onDelete(book.id)} />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBooksPage;
