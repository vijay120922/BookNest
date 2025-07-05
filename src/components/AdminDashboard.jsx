// Dashboard.jsx
import React from 'react';
import './AdminDashboard.css';
import { FaBook, FaUsers, FaUndo, FaCheckCircle } from 'react-icons/fa';

const AdminDashboard = () => {
  return (
    <div className="dashboard-container coastal-theme">
      <aside className="sidebar">
        <h2 className="logo">📚 Book Nest</h2>
        <nav>
          <ul>
            <li className="active">Dashboard</li>
            <li>Manage Books</li>
            {/* <li>Issue Book</li> */}
            <li>Return Book</li>
            <li>Add Book</li>
            {/* <li>Manage Members</li> */}
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
              <h2>2,847</h2>
            </div>
          </div>
          <div className="card coastal-salmon">
            <FaUndo />
            <div>
              <p>Overdue Returns</p>
              <h2>23</h2>
            </div>
          </div>
          <div className="card coastal-green">
            <FaCheckCircle />
            <div>
              <p>Issued Books</p>
              <h2>156</h2>
            </div>
          </div>
          <div className="card coastal-teal">
            <FaUsers />
            <div>
              <p>Total Members</p>
              <h2>892</h2>
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