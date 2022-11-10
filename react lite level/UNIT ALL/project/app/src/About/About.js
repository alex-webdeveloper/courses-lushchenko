import React from 'react';
import './About.css';

class About extends React.Component {

    render() {
        const title = 'О нас';
        document.title = title;
        return (

            <div>
                <h2>{title}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit officia modi nam eaque laborum asperiores perferendis accusantium. Nisi enim rem, fugiat ab expedita temporibus quis quaerat voluptatibus omnis laborum inventore.</p>
            </div>

        );
    }
}

export default About;