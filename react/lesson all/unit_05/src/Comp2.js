import React from 'react';
import { useState } from 'react';

function Comp2() {
    const [count, setCount] = useState(0);
    const [comment, setComment] = useState([]);
    let myRef = React.createRef();

    const handler = () => {
        let currentCount = count;
        currentCount++;
        setCount(currentCount);
    }

    const addComment = () => {
        let commentValue = myRef.current.value;      //  let comment = this.myRef.current.value;
        let comments = [...comment, commentValue];   //  let comments = this.state.comment;
        setComment(comments);                        //   comments.push(comment);
        myRef.current.value = '';                   //   this.setState({ 'comment': comments});
    }
    return (
        <>
            <h1>State</h1>
            <div><button onClick={handler}>This button change state</button></div>
            <div>{count % 2 === 0 ? 'even' : 'odd'}</div>
            <div>{count}</div>
            <div>
                <textarea ref={myRef}></textarea>
                <button onClick={addComment}>Add comment</button>
            </div>
            <div>
                <ul>
                    {comment.map((item, index) => <li key={index.toString()}>{item}</li>)}
                </ul>
            </div>
        </>
    );
}

export default Comp2;