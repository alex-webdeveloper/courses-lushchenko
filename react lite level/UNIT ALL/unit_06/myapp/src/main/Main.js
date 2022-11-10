import React from 'react';
import './Main.css';

class Main extends React.Component {
    render() {
        return (
            <div className='container'>
                <main>
                    <article>
                        <header>
                            <h1>Article 1</h1>
                            <h2>Article 2</h2>
                        </header>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis rerum animi corrupti laborum odio vel, voluptatum natus dolorum recusandae perferendis inventore quae est commodi voluptas ut repellat molestiae repudiandae placeat.
                </p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis rerum animi corrupti laborum odio vel, voluptatum natus dolorum recusandae perferendis inventore quae est commodi voluptas ut repellat molestiae repudiandae placeat.
                </p>
                    </article>
                </main>
            </div>
        );
    }
}

export default Main;