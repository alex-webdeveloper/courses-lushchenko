import React from 'react';

class App2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            y1: this.props.z1,

        }
    }


    render() {
        return (
            <div>
                <p>{this.props.z1}</p>
                <p>{this.state.y1 * 10}</p>
            </div>
        );
    }
}

export default App2;
