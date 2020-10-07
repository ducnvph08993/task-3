import React from 'react'
import './BookMark.scss'
import { Link } from 'react-router-dom'

const BookMark = ({ marks, categories, onRemove }) => {
    console.log(marks);
    const onHandleRemove = (id) => {
        onRemove(id);
    }
    return (
        <div className="container">
            <h1>Bookmarks</h1>
            <Link to="/add-bookmark" className="btn btn-primary">
                Add
            </Link>
            <div className="row">
                <div className="col-6">
                    <h3>
                        {
                            categories.map(cate => (
                                cate.id == 1 ? cate.name : " "
                            ))
                        }
                    </h3>
                    {
                        marks.map((mark, index) => (
                            (mark.cate_id == 1)
                                ?
                                (
                                    <div id="xxxx" className="title-mark" key={index} >
                                        <i className="far fa-bookmark" id="icon" style={{ fontSize: 40, paddingLeft: 12, float: "left" }}></i>
                                        <span>{mark.name}</span>
                                        <button onClick={() => { if (window.confirm('Delete this item?')) { onHandleRemove(mark.id) }; }} className="btn btn-danger">Delete</button>
                                        <a href={mark.http} className="btn btn-success">Visit</a>
                                    </div>
                                ) : null
                        ))
                    }
                </div>
                <div className="col-6">
                    <h3>
                        {
                            categories.map(cate => (
                                cate.id == 2 ? cate.name : ""
                            ))
                        }
                    </h3>
                    {
                        marks.map((mark, index) => (
                            (mark.cate_id == 2)
                                ?
                                (
                                    <div className="title-mark" key={index} >
                                        <i className="far fa-bookmark" id="icon" style={{ fontSize: 40, paddingLeft: 12, float: "left" }}></i>
                                        <span>{mark.name}</span>
                                        <button onClick={() => { if (window.confirm('Delete this item?')) { onHandleRemove(mark.id) }; }} className="btn btn-danger">Delete</button>
                                        <a href={mark.http} className="btn btn-success">Visit</a>
                                    </div>
                                ) : null
                        ))
                    }
                </div>
            </div>


        </div >
    )
}

BookMark.propTypes = {

}

export default BookMark
