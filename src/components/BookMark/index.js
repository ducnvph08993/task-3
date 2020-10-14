import React from 'react'
import './BookMark.scss'
import { Link } from 'react-router-dom'

const BookMark = ({ marks, categories, onRemove }) => {
    const onHandleRemove = (id) => {
        onRemove(id);
    }
    return (
        <div className="container">
            <h1>Bookmarks</h1>
            <Link to="/add-bookmark" className="btn btn-primary">
                Add Bookmark
            </Link>
            <Link to="/add-cate" className="btn btn-success" style={{ margin: 10 }}>
                Add Cate
            </Link>
            <div className="row">
                {
                    categories.map((cate, index) => (
                        <div className="col-6" key={index}>
                            <h3>{cate.name}</h3>
                            {
                                marks.map((mark, indexMark) => (
                                    (mark.categoryId === cate.id)
                                        ?
                                        (
                                            <div className="title-mark" key={indexMark} >
                                                <i className="far fa-bookmark" id="icon" style={{ fontSize: 40, paddingLeft: 12, float: "left" }}></i>
                                                <span>{mark.name}</span>
                                                <button onClick={() => { if (window.confirm('Delete this item?')) { onHandleRemove(mark.id) }; }} className="btn btn-danger">Delete</button>
                                                <a href={mark.http} className="btn btn-success">Visit</a>
                                            </div>
                                        ) : null
                                ))
                            }
                        </div>
                    ))
                }
            </div>


        </div >
    )
}

BookMark.propTypes = {

}

export default BookMark
