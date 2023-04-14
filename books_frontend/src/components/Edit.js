import React, { useState } from 'react'

const Edit = (props) => {
  let emptyBook = { title: '', author: '', year: '', isbn: '' }
  const [book, setBook] = useState({...props.book})

  const handleChange = (event) => {
    setBook({ ...book, [event.target.name]: event.target.value })
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleUpdate(book)
  }
  

  return (
    <>
      <details>
        <summary>Edit Book</summary>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            name="title"
            value={book.title}
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="author">Author: </label>
          <input
            type="text"
            name="author"
            value={book.author}
            onChange={handleChange}
          />
          <label htmlFor="year">Year: </label>
          <input
            type="text"
            name="year"
            value={book.year}
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="isbn">ISBN: </label>
          <input
            type="text"
            name="isbn"
            value={book.isbn}
            onChange={handleChange}
          />
          <input type="submit" />
        </form>
      </details>
    </>
  )
}

export default Edit