import React, { useState, useEffect } from 'react'

const Add = (props) => {
  let emptyBook = { name: '', age: '' }
  const [book, setBook] = useState(emptyBook)


  const handleChange = (event) => {
  setBook({ ...book, [event.target.title]: event.target.value })
}

const handleSubmit = (event) => {
  event.preventDefault()
  props.handleCreate(book)
}

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title: </label>
        <input type="text" name="title" value={book.title} onChange={handleChange}/>
        <br />
        <br />
        <label htmlFor="author">Author: </label>
        <input type="text" name="author" value={book.author} onChange={handleChange} />
        <br />
        <br />
        <label htmlFor="series">Series: </label>
        <input type="text" name="series" value={book.series} onChange={handleChange}/>
        <input type="submit"/>
      </form>
    </>
  )
}

export default Add