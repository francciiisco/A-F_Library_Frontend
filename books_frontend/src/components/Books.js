import { useState, useEffect } from "react";
import axios from "axios";
import Add from './Add'
import Edit from './Edit'

const Books = (props) => {
    const [books, setBooks] = useState([])
    let [searchTerm, setSearchTerm] = useState('')
    let [showAdd, setShowAdd] = useState(false)

    const getBooks = () => {
        axios
            .get('http://localhost:8000/api/books')
            .then(
                (response) => setBooks(response.data),
                (err) => console.error(err)
            )
            .catch((error) => console.error(error))
    }

    const handleCreate = (addBook) => {
        axios
            .post('http://localhost:8000/api/books', addBook)
            .then((response) => {
                console.log(response)
                getBooks()
            })
    }


    const handleDelete = (event) => {
        axios
            .delete('http://localhost:8000/api/books/' + event.target.value)
            .then((response) => {
                getBooks()
            })
            .catch((error) => console.error(error))
    }


    const handleUpdate = (editBook) => {
        console.log(editBook);
        axios.put("http://localhost:8000/api/books/" + editBook.id, editBook)
            .then((response) => {
                getBooks();
            });
    };

    const handleShowAdd = () => {
        setShowAdd(!showAdd)
    }

    useEffect(() => {
        getBooks();
    }, []);

    return (
        <>
            {showAdd ? <Add showAdd={showAdd} setShowAdd={setShowAdd} handleShowAdd={handleShowAdd} handleCreate={handleCreate} /> : null}

            <div className='Container'>
                <nav className="fixed-top nav-bar">
                    <h1>A & F Book Finder</h1>
                    <button className='btn-e' onClick={props.toggleShowMy}>My Books</button>
                    <button className='btn-e' onClick={props.toggleShowLibrary}>Library</button>
                </nav>
                <br />
                <br />
                <br />
                <br />
            </div>
            <div className='container'>
                <div className='books'>
                    <div>
                        <div className='form-group row mb-2'>

                            <label className='col-sm-3 col-form-label'><strong>Search</strong></label>
                            <div className='col-sm-9'>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="search by Title, Author, or ISBN..."
                                    onChange={(event) => { setSearchTerm(event.target.value) }}
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className='btn-e' onClick={handleShowAdd}>ADD</button>
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
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.filter((books) => {
                            if (searchTerm == "") {
                                return books
                            } else if (books.author.toLowerCase().includes(searchTerm.toLocaleLowerCase()) || books.title.toLowerCase().includes(searchTerm.toLocaleLowerCase()) || books.isbn.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                                return books
                            }
                        }).map((books) => {
                            return (
                                <>
                                    <tr>
                                        <td>{books.author}</td>
                                        <td>{books.title}</td>
                                        <td>{books.year}</td>
                                        <td>{books.isbn}</td>
                                        <td><Edit books={books} handleUpdate={handleUpdate} /></td>
                                        <td><button className='btn-e' onClick={handleDelete} value={books.id}>DELETE</button></td>

                                    </tr>
                                </>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Books;