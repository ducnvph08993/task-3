import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import './AddCate.scss'

const AddCate = ({ onAdd }) => {
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
                    <h5>Add a categories</h5>
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
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

AddCate.propTypes = {

}

export default AddCate
