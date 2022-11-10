import React from 'react';
import { useDispatch } from 'react-redux';
import { addNewUsers } from '../action';

const AddUser = () => {

    const dispatch = useDispatch();

    const formHandler = (event) => {
        event.preventDefault();
        let data = event.target.elements;
        dispatch(addNewUsers(data.passport.value, data.name.value, data.age.value));

    }
    return (
        <div>
            <form onSubmit={formHandler}>
                <input type='text' name="passport" defaultValue='passport: ' />
                <input type='text' name="name" defaultValue='name: ' />
                <input type='text' name="age" defaultValue='age: ' />
                <button type="submit">Add New User</button>
            </form>
        </div>
    )
}

export default AddUser;