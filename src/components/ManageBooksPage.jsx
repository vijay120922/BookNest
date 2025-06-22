import React, { useState } from 'react';
import './ManageBooksPage.css';
import { FaEdit, FaTrash, FaEye } from 'react-icons/fa';

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

const genres = ['All', 'Fiction', 'Finance', 'Self-help'];
const statuses = ['All', 'Available', 'Issued', 'Overdue'];

const ManageBooksPage = () => {
  const [search, setSearch] = useState('');
  const [genre, setGenre] = useState('All');
  const [status, setStatus] = useState('All');

  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(search.toLowerCase());
    const matchesGenre = genre === 'All' || book.genre === genre;
    const matchesStatus = status === 'All' || book.status === status;
    return matchesSearch && matchesGenre && matchesStatus;
  });

  return (
    <div className="manage-books">
      <h2>📘 Manage Books</h2>

    
      <div className="summary-cards">
        <div className="card">Total Books: {books.length}</div>
        <div className="card available">Available: {books.filter(b => b.available > 0).length}</div>
        <div className="card issued">Issued: {books.filter(b => b.status === 'Issued').length}</div>
        <div className="card overdue">Overdue: {books.filter(b => b.status === 'Overdue').length}</div>
      </div>

      {/* Filters */}
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
      </div>

      {/* Table */}
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
                    <FaEye title="View" />
                    <FaEdit title="Edit" />
                    <FaTrash title="Delete" />
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
