import React from 'react';

class Homework1 extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.p1);
        this.state = {
            s1: this.props.p1
        }
        this.s2 = 201;
    }

    componentDidMount() {
        let arg = this.state.s1;
        arg += 5;
        this.setState({ s1: arg });

        let arg2 = this.s2;
        arg2 += 5;
        this.s2 = arg2;
        { console.log('componentDidMount') };
    }

    buttonHander = () => {
        let arg = this.state.s1;
        arg += 50;
        this.setState({ s1: arg });

        let arg2 = this.s2;
        arg2 += 50;
        this.s2 = arg2;
        { console.log('buttonHander') };
    }
    render() {
        console.log('render');
        return (

            <>
                <div>{this.state.s1}</div>
                <div>{this.s2}</div>
                <button onClick={this.buttonHander}>Push</button>
            </>
        )
    }
}

export default Homework1;