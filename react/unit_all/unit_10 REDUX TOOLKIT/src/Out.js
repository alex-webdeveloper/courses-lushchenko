import { useSelector } from 'react-redux';
import React from 'react';
import {
    selectValue,
    selectTest,
} from './app/taskReducerSlice';

export default function Out() {
    const task1 = useSelector(selectValue);
    const text = useSelector(selectTest);


    return (
        <div>
            <hr />
            <h2>Task 1</h2>
            <p>{task1}</p>
            <hr />
            <h2>Task 10 Out</h2>
            <p>{text}</p>
        </div>
    );
}