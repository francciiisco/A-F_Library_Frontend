import React, { useState, useEffect } from 'react'

const Add = (props) => {
  let emptyBook = { title: '', author: '', year: '', ibn: '' }
  const [book, setBook] = useState(emptyBook)


  const handleChange = (event) => {
  setBook({ ...book, [event.target.name]: event.target.value })
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
        <label htmlFor="year">Year: </label>
        <input type="text" name="year" value={book.year} onChange={handleChange}/>
        <br />
        <br />
        <label htmlFor="ibn">IBN: </label>
        <input type="text" name="ibn" value={book.ibn} onChange={handleChange}/>
        <input type="submit"/>
      </form>
    </>
  )
}

export default Add