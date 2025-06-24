// App.jsx
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ManageBooksPage from './components/ManageBooksPage';
import ViewBookPage from './components/ViewBookPage';
import EditBookPage from './components/EditBookPage';
import AddBook from './components/AddBook';
<<<<<<< HEAD
import LandingPage from './components/LandingPage';
=======
import AdminDashboard from './components/AdminDashboard';
>>>>>>> e1b7a1c1e464be2ea1b9b0edcccff37ac88db89c

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem('books')) || [];
    setBooks(storedBooks);
  }, []);

  const handleAddBook = (newBook) => {
    const updated = [...books, newBook];
    localStorage.setItem("books", JSON.stringify(updated));
    setBooks(updated);
  };

  const handleDeleteBook = (id) => {
    const updated = books.filter(book => book.id !== id);
    localStorage.setItem("books", JSON.stringify(updated));
    setBooks(updated);
  };

  return (
<<<<<<< HEAD
    <Router>
      <Routes>
        <Route path="/" element={<ManageBooksPage books={books} onDelete={handleDeleteBook} />} />
        <Route path="/view/:id" element={<ViewBookPage books={books} />} />
        <Route path="/edit/:id" element={<EditBookPage books={books} setBooks={setBooks} />} />
        <Route path="/add" element={<AddBook onAdd={handleAddBook} onClose={() => window.history.back()} />} />
      </Routes>
    </Router>
    // <LandingPage/>
=======
    <AdminDashboard/>
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<ManageBooksPage books={books} onDelete={handleDeleteBook} />} />
    //     <Route path="/view/:id" element={<ViewBookPage books={books} />} />
    //     <Route path="/edit/:id" element={<EditBookPage books={books} setBooks={setBooks} />} />
    //     <Route path="/add" element={<AddBook onAdd={handleAddBook} onClose={() => window.history.back()} />} />
    //   </Routes>
    // </Router>
>>>>>>> e1b7a1c1e464be2ea1b9b0edcccff37ac88db89c
  );
}

export default App;


