import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Home from "./views/Home";
import BookDetails from "./views/BookDetails";
import AddBook from "./views/AddBook";

//adding to Git

function App() {
  const [headerTitle, setHeaderTitle] = useState("Book Catalog");

  return (
    <BrowserRouter>
      <div className="header-content">
        <div className="button-group">
          {/* Catalog Button */}
          <Link to="/">
            <button onClick={() => setHeaderTitle("Book Catalog")}>
              Catalog
            </button>
          </Link>

          <Link to="/add-book">
            <button onClick={() => setHeaderTitle("Add a Book")}>
              Add Book
            </button>
          </Link>
        </div>

        <h1 className="header-right">{headerTitle}</h1>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/books/:id"
          element={<BookDetails setBookTitle={setHeaderTitle} />}
        />
        <Route path="/add-book" element={<AddBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
