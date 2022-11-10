import React from 'react';


class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',

        }
    }


    render() {
        return (
            <h2>Contacts</h2>
        );
    }
}

export default Contacts;