import React from 'react';

class Footer extends React.Component {
    render() {
        let contact = this.props.contact;
        let address = this.props.address;
        return (
            <footer>
                <h3>{this.props.title}</h3>
                <ul>{contact.map(item => <li>{item[0]} тел: <a href='tel:+{item[1]}'>{item[1]}</a></li>)}</ul>
                <ul>{Object.keys(address).map(item => <li>{item}: {address[item]}</li>)}</ul>
            </footer>

        );
    }
}
export default Footer;


