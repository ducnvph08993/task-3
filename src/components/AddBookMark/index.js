import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import './AddBookMark.scss'

const AddBookMark = ({ onAdd, categories }) => {
    let redirect = useHistory();
    const { register, handleSubmit, errors } = useForm();
    const onHandleSubmit = (data) => {
        const newLink = {
            ...data,
        }
        onAdd(newLink);
        redirect.push("/");
    };
    return (
        <div className="container">
            <div className="form">
                <form onSubmit={handleSubmit(onHandleSubmit)}>
                    <h5>Add a bookmark</h5>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter a name for your link"
                            ref={register({ required: true })}
                            name="name"
                        />
                        {errors.name && "Required"}
                    </div>
                    <div className="form-group">
                        <label>Link</label>
                        <input type="text"
                            className="form-control"
                            placeholder="https://example.com"
                            ref={register({ pattern: /^((http|https|ftp):\/\/)/ })}
                            name="http"
                        />
                        {errors.http && "Bạn phải nhập đường dẫn"}
                    </div>
                    <div className="form-group">
                        <label>Categories</label>
                        <select className="form-control" name="categoryId" ref={register} defaultValue={1}>
                            {
                                categories.map(({ id, name }, index) => (
                                    <option key={index} value={Math.floor(id)} >{name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

AddBookMark.propTypes = {

}

export default AddBookMark
