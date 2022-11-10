import React from 'react';


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',

        }
    }


    render() {
        return (
            <div className="pr" >
                <h2>Main</h2>
            </div>
        );
    }
}

export default Main;