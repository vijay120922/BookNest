import './AdminDashboard.css';
import { FaBook, FaUsers, FaUndo, FaCheckCircle } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem("books")) || [];
    setBooks(storedBooks);
  }, []);

  const totalBooks = books.length;
  const overdueReturns = books.filter(b => b.status === "Overdue").length;
  const issuedBooks = books.filter(b => b.status === "Issued").length;
  const availableBooks = books.filter(b => b.available > 0).length;

  return (
    <div className="dashboard-container coastal-theme">
      <aside className="sidebar">
        <h2 className="logo">📚 Book Nest</h2>
        <nav>
          <ul>
            <li className="active">Dashboard</li>
            <li onClick={() => navigate('/manage')}>Manage Books</li>
            <li>Return Book</li>
            <li onClick={() => navigate('/add')}>Add Book</li>
          </ul>
        </nav>
      </aside>

      <main className="main-content">
        <header>
          <h1>Dashboard</h1>
          <p>Welcome to Book Nest Library Management System</p>
        </header>

        <section className="cards">
          <div className="card coastal-blue">
            <FaBook />
            <div>
              <p>Total Books</p>
              <h2>{totalBooks}</h2>
            </div>
          </div>
          <div className="card coastal-salmon">
            <FaUndo />
            <div>
              <p>Overdue Returns</p>
              <h2>{overdueReturns}</h2>
            </div>
          </div>
          <div className="card coastal-green">
            <FaCheckCircle />
            <div>
              <p>Issued Books</p>
              <h2>{issuedBooks}</h2>
            </div>
          </div>
          <div className="card coastal-teal">
            <FaUsers />
            <div>
              <p>Available Books</p>
              <h2>{availableBooks}</h2>
            </div>
          </div>
        </section>

        <section className="charts">
          <div className="chart-box">
            <h3>Popular Genres</h3>
            <img src="nest.jpg" alt="Pie Chart" />
          </div>
          <div className="chart-box">
            <h3>Fine Collection</h3>
            <p className="total-fine">$1,247 <span>Total Fine Collected</span></p>
            <p>This Month: <strong>$342</strong></p>
            <p>Last Month: <strong>$288</strong></p>
          </div>
        </section>

        <section className="issued-books">
          <h3>Issued Book List</h3>
          <div className="search-sort">
            <input type="text" placeholder="Search books..." />
            <select>
              <option>Sort by Date</option>
              <option>Sort by Name</option>
            </select>
          </div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Member Name</th>
                <th>Book Title</th>
                <th>Issue Date</th>
                <th>Return Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#001</td>
                <td>John Smith</td>
                <td>The Great Gatsby</td>
                <td>2024-01-15</td>
                <td>2024-01-29</td>
                <td><span className="status active">Active</span></td>
              </tr>
              <tr>
                <td>#002</td>
                <td>Sarah Johnson</td>
                <td>To Kill a Mockingbird</td>
                <td>2024-01-10</td>
                <td>2024-01-24</td>
                <td><span className="status overdue">Overdue</span></td>
              </tr>
              <tr>
                <td>#003</td>
                <td>Mike Davis</td>
                <td>1984</td>
                <td>2024-01-20</td>
                <td>2024-02-03</td>
                <td><span className="status active">Active</span></td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
