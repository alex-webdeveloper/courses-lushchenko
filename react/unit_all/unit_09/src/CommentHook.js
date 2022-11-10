import { useState } from "react";

function CommentHook() {
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
                {data.map((el, index) => (
                    <section key={el.id}>
                        <p><b>{index + 1}. {el.email}</b></p>
                        <p>{el.body}</p>
                    </section>
                ))}
            </div>
        </div>
    );
}

export default CommentHook;