import React from "react";
import BookContextPreovider from "./context/BookContext";
import Navbar from "./components/Navbar";
import "./styles.css";
import BookList from "./components/BookList";
import NewBookForm from "./components/BookForm";

export default function App() {
  return (
    <div className="App">
      <BookContextPreovider>
        <Navbar />
        <BookList/>
        <NewBookForm />
      </BookContextPreovider>
    </div>
  );
}
