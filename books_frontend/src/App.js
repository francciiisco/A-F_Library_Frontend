import React, { useState, useEffect } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const URL = 'https://books39.p.rapidapi.com/CZFA4F/books/?rapidapi-key='
  const key = 'fa369899a0msh969a1c5fb88c23dp1daa69jsnb3214f324c6d'
  const [books, setBooks] = useState([])
  let [searchTerm, setSearchTerm] = useState("")
  const getBooks = () => {
    axios.get(`${URL}${key}`).then((response) =>{
      setBooks(response.data)
      console.log(books)
    })
  }

  useEffect(() => {
    getBooks()
  }, [])


  return (
    <>
    <div className='Container'>
    <nav className="fixed-top nav-bar">
      <h1>A & F Book Finder</h1>
      <button className='btn-e'>My Books</button>
    </nav>
    <br/>
    <br/>
    <br/>
    <br/>
    </div>
      <div className='container'>
        <div className='col-sm-6'>
          <div className='form-group row mb-2'>

            <label className='col-sm-2 col-form-label'><strong>Search</strong></label>
            <div className='col-sm-10'>
              <input
                type="text"
                className="form-control"
                placeholder="search by Title..."
                onChange={(event) => { setSearchTerm(event.target.value) }}
              />
            </div>

          </div>
          <br />
        </div>

        <table className='table table-bordered' >
          <thead className='thead-dark'>
            <tr>
              <th>Author</th>
              <th>Title</th>
              <th>Year</th>
              <th>ISBN</th>
            </tr>
          </thead>
          <tbody>
            {books.filter((books) => {
            if (searchTerm == "") {
              return books
            } else if (books.AUTHOR.toLowerCase().includes(searchTerm.toLocaleLowerCase())||books.TITLE.toLowerCase().includes(searchTerm.toLocaleLowerCase())||books.ISBN.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
              return books
            }
          }).map((books) => {
              return(
                <tr>
                <td>{books.AUTHOR}</td>
                <td>{books.TITLE}</td>
                <td>{books.YEAR}</td>
                <td>{books.ISBN}</td>
              </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
