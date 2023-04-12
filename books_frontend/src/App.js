import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  let [books, setBooks] = useState([])

  const getBooks = () => {
    axios
      .get('http://')
      .then(
        (response) => setBooks(response.data),
        (err) => console.error(err)
      )
      .catch((error) => console.error(error)
      )
  }

useEffect(() => {
 getBooks()
}, [])


  return (
    <>
      <h1>Library</h1>
      <div>
        {books.map((book) => {
          return (
            <div key={book.id}>
              <h4>Title: {book.book_title}</h4>
              <h5>Author: {book.author}</h5>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App
