import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import AddBook from "./components/Addbooks";
import Books from "./components/Book/Books";
import About from "./components/About";
import BookDetail from "./components/Book/BookDetail";
import Contact from "./components/Contact";

function App() {
  return (
    <React.Fragment>
      <Router>
        <header>
          <Header />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddBook />} />
            <Route path="/books" element={<Books />} />
            <Route path="/about" element={<About />} />
            <Route path="/books/:id" element={<BookDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </Router>
    </React.Fragment>
  );
}

export default App;
