import React from 'react';


class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',

        }
    }


    render() {
        return (
            <footer>
                <p>Footer</p>
            </footer>
        );
    }
}

export default Footer;