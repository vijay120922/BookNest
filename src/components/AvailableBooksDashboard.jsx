import React, { useState } from 'react';
import './AvailableBooksDashboard.css'; // Link to the CSS file

const booksData = [
  {
    id: 1,
    cover: 'https://covers.openlibrary.org/b/id/10578958-L.jpg',
    title: 'Atomic Habits',
    author: 'James Clear',
    category: 'Self-help',
    available: 4
  },
  {
    id: 2,
    cover: 'https://covers.openlibrary.org/b/id/10296458-L.jpg',
    title: '1984',
    author: 'George Orwell',
    category: 'Fiction',
    available: 2
  },
  {
    id: 3,
    cover: 'https://covers.openlibrary.org/b/id/11145356-L.jpg',
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    category: 'Finance',
    available: 0
  }
];

const AvailableBooksDashboard = () => {
  const [search, setSearch] = useState('');

  const filteredBooks = booksData.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="dashboard">
      <h2>📚 Available Books</h2>

      <input
        type="text"
        placeholder="Search by title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Cover</th>
              <th>Title</th>
              <th>Author</th>
              <th>Category</th>
              <th>Available</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredBooks.length === 0 ? (
              <tr>
                <td colSpan="6" className="no-books">No books found.</td>
              </tr>
            ) : (
              filteredBooks.map((book) => (
                <tr key={book.id}>
                  <td><img src={book.cover} alt={book.title} /></td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.category}</td>
                  <td className={book.available > 0 ? 'available' : 'unavailable'}>
                    {book.available > 0 ? `${book.available} copies` : 'Unavailable'}
                  </td>
                  <td>
                    <button disabled={book.available === 0}>Take Book</button>
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

export default AvailableBooksDashboard;
