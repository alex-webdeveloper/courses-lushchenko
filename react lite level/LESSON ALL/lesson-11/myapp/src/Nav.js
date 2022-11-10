import React from 'react';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Navigation',
            subtitle: 'Main menu',
            show: 'show'
        }
    }

    showNav = () => {
        this.setState({ show: 'hide' }); // изменить свойство (метод)
    }

    render() {
        let nav = this.props.nav;
        return (
            <nav>
                <button type='button' onClick={this.showNav}>Show menu</button>
                <h1>{this.state.title}</h1>
                <h2>{this.state.subtitle}</h2>
                <p>{this.state.show}</p>
                <ul>{Object.keys(nav).map(item => <li><a href='{nav[item]}'>{item}</a></li>)}</ul>
                <p>{this.props.hero}</p>
            </nav>
        );
    }
}

export default Nav;
