import React, { createContext, useState } from 'react';
import uuid from 'uuid'

export const BookContext = createContext();

const BookContextPreovider = (props) => {
   const [books, setBooks] = useState([
    {title: 'The Da Vinci Code', author:'Dan Brown', id: 1 },
    {title: 'Harry Potter Series', author:'J K Rowling', id: 2},
    {title: 'Secret Seven', author:'Enid Blyton',id:3}
   ]);
   const addBook = (title, author) => {
   setBooks ([...books, {title, author, id: uuid }])
   };

   const removeBook = (id) => {
   setBooks(books.filter(book => book.id !== id));
};
return(
  <BookContext.Provider value={{books, addBook, removeBook}}>
    {props.children}
    </BookContext.Provider>

 )
}

export default BookContextPreovider;