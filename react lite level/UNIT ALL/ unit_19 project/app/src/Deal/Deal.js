import React from 'react';
import './Deal.css';


class Deal extends React.Component {


    render() {
        const title = 'Соглашение о использовании сервиса';
        document.title = title;
        document.querySelector('meta[name="description"]').setAttribute("content", 'Соглашение');
        // document.querySelector('meta[name="description"]').content = 'hi';
        // document.getElementsByTagName("META")[2].content = "Your description about the page or site here to set dynamically";
        return (

            <div>
                <h2>{title}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit officia modi nam eaque laborum asperiores perferendis accusantium.</p>
            </div>

        );
    }
}

export default Deal;