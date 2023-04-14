import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Edit from './components/edit'

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


const handleDelete = (event) => {
  axios
    .delete('http://' + event.target.value)
    .then((response) => {
      getBooks()
    })
}


const handleUpdate = (editBook) => {
  console.log(editBook)
  axios
    .put('http://' + editBook.id, editBook)
    .then((response) => {
      getBooks()
    })
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
              <Edit handleUpdate={handleUpdate} book={book}/>
              <button onClick={handleDelete} value={book.id}>
  X
</button>

            </div>
          )
        })}
      </div>
    </>
  )
}

export default App
