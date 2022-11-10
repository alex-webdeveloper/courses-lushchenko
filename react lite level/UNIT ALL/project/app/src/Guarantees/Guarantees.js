import React from 'react';
import './Guarantees.css';


class Guarantees extends React.Component {


    render() {
        const title = 'Гарантии';
        document.title = title;
        return (
            <div>
                <h2>{title}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit officia modi nam eaque laborum asperiores perferendis accusantium.</p>
            </div>

        );
    }
}

export default Guarantees;