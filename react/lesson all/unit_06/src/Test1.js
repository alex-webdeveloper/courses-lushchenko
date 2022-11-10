import React from 'react';

class Test1 extends React.Component {
    constructor(props) {
        console.clear();
        console.log('constructor'); //отрисовывается только раз при отрисовки страницы(отрисовывается самый первый)
        console.log(props);
        super();
        this.state = {
            s1: 0
        }
        // super(props);
        // this.state = {
        //     s1: this.props.arg
        // }
    }


    buttonHandler = () => {
        let val = this.state.s1;
        val++;
        this.setState({ s1: val });
    }

    static getDerivedStateFromProps(props, state) {
        console.log('get derived state');
        return null;
        // return ({ "s1": props.arg }); // // отрисовывается каждый раз при обновлении страницы
    }

    componentDidMount() {
        console.log('component did mount++'); // отрисовывается только раз после отрисовки страницы
    }

    componentDidUpdate() {
        console.log('component did update');  // отрисовывается каждый раз при обновлении страницы
    }

    render() {
        console.log('render 1'); // отрисовывается каждый раз при обновлении страницы
        return ( // отрисовывается каждый раз при обновлении страницы
            <>
                {console.log('render 2')}
                <div>
                    <button onClick={this.buttonHandler}>Push</button>
                </div>
                <div>
                    {this.state.s1}
                </div>
            </>
        )
    }
}

export default Test1;