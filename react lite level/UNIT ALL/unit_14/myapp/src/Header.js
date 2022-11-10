import React from 'react';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',

        }
    }


    render() {
        return (
            <header>
                <h1>My site</h1>
            </header>
        );
    }
}

export default Header;