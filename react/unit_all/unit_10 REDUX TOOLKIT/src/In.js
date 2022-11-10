import React from 'react';
import { useDispatch } from 'react-redux';
import {
    add,
    minus,
    multi,
    division,
    showText
} from './app/taskReducerSlice';

export default function In() {
    let task1Input = React.createRef();
    const dispatch = useDispatch();
    let task10Input = React.createRef();

    const addHandler = () => {
        dispatch(add(task1Input.current.value));
    }
    const minusHandler = () => {
        dispatch(minus(task1Input.current.value));
    }
    const multiHandler = () => {
        dispatch(multi(task1Input.current.value));
    }
    const divisionHandler = () => {
        dispatch(division(task1Input.current.value));
    }
    const textHandler = () => {
        dispatch(showText(task10Input.current.value));
        task10Input.current.value = '';
    }

    return (
        <>
            <div>
                <input type="number" ref={task1Input} />
                <h2>Task 1</h2>
                <button onClick={addHandler}>+</button>
                <button onClick={minusHandler}>-</button>
                <button onClick={multiHandler}>x</button>
                <button onClick={divisionHandler}>/</button>
            </div>
            <div>
                <h2>Task 10 In</h2>
                <input type="text" ref={task10Input} />
                <button onClick={textHandler}>Push</button>
            </div>
        </>
    );
}