import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Edit from './components/edit'
import Add from './components/Add'

const App = () => {
  const URL = 'https://books39.p.rapidapi.com/CZFA4F/books/?rapidapi-key='
  const key = '023f447a90msh6babfc2e25f744cp16d63ejsn393297bc3bc4'
  const [books, setBooks] = useState([])
  // const [searchTerm, setSearchTerm] = useState('')
  const getBooks = async () => {
    try {
      const response = await axios.get(`${URL}${key}`)
      setBooks(response.data)
      console.log(books)
    } catch (err) {
      console.log(err)
    }
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
    <div>
    {books.map((books) =>{
      return(
        <div>
          <h1>{books.AUTHOR}</h1>
        </div>
      )
    })}
    </div>
    </>
  )
}

export default App
