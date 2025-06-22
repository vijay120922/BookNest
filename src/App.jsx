import { useState } from 'react';
import './App.css';
import AvailableBooksDashboard from './components/AvailableBooksDashboard';
import ManageBooksPage from './components/ManageBooksPage';
import ViewBookPage from './components/ViewBookPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ManageBooksPage />} />
        <Route path="/view/:id" element={<ViewBookPage />} />
      </Routes>
    </Router>
  );
}

export default App;
