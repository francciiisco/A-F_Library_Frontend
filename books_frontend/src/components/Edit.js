import React, { useState } from 'react'

const Edit = (props) => {
    const [books, setBooks] = useState({ ...props.books })
    let [showEdit, setShowEdit] = useState(false)



    const handleChange = (event) => {
        setBooks({ ...books, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleUpdate(books)
        setShowEdit(!showEdit)
    }

    const handleShowEdit = () => {
        setShowEdit(!showEdit)
    }


    return (
        <>
            {showEdit ? <div className="pop-up">
                <div className="pop-upcontent">
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="title">Title: </label>
                            <input className="form-control"
                                type="text"
                                name="title"
                                value={books.title}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="author">Author: </label>
                            <input className="form-control"
                                type="text"
                                name="author"
                                value={books.author}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="year">Year: </label>
                            <input className="form-control"
                                type="text"
                                name="year"
                                value={books.year}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="isbn">ISBN: </label>
                            <input className="form-control"
                                type="text"
                                name="year"
                                value={books.isbn}
                                onChange={handleChange}
                            />
                        </div>
                        <input className='btn-e' type="submit" />
                        <button className='btn-e' onClick={handleShowEdit}>BACK</button>
                    </form>
                </div>
            </div> : <button className='btn-e' onClick={handleShowEdit}>Edit</button>}

        </>
    )
}

export default Edit