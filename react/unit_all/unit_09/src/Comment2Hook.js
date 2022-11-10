import { useState, } from 'react';
// import CommentsListHook from './CommentsListHook';
import Comments2ListHook from './Comments2ListHook';

function Comment2Hook() {
    const [data, setData] = useState([]);

    function selectHandler(event) {
        fetch('https://jsonplaceholder.typicode.com/users/' + event.target.value + '/posts')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data);
            });
    }

    return (
        <div>
            <p>Choose post ID:</p>
            <select onChange={selectHandler}>
                <option hidden>Select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            <div>
                {/* <CommentsListHook data={data} /> */}
                <Comments2ListHook data={data} />
            </div>
        </div>
    );
}

export default Comment2Hook;