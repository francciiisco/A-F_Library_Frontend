import React, { useState, useEffect } from 'react'

const Add = (props) => {
    let emptyBook = { title: '', author: '', year: '', isbn: '' }
    const [books, setBooks] = useState(emptyBook)


    const handleChange = (event) => {
        setBooks({ ...books, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleCreate(books)
        props.setShowAdd(!props.showAdd)
    }

    return (
        <>
            <div className="pop-up">
                <div className="pop-upcontent">
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="title">Title: </label>
                            <input className="form-control" type="text" name="title" value={books.title} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="author">Author: </label>
                            <input className="form-control" type="text" name="author" value={books.author} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="series">Year: </label>
                            <input className="form-control" type="text" name="year" value={books.year} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="series">ISBN: </label>
                            <input className="form-control" type="text" name="isbn" value={books.isbn} onChange={handleChange} />
                        </div>
                        <input className='btn-e' onSubmit={props.handleShowAdd} type="submit" />
                        <button className='btn-e' onClick={props.handleShowAdd}>cancel</button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Add