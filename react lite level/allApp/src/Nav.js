import React from 'react';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Navigation',
            subtitle: 'Main menu',
            show: ['hi', 'ess']
        }
    }

    showNav = () => {
        console.log(this.state.show);
        this.state.show[1] = ' no  ';
        this.setState({ show: this.state.show }); // изменить свойство (метод)
        // this.state.show = 'ffff';
    }


    render() {

        let nav = this.props.nav;
        return (
            <nav>
                <button type='button' onClick={this.showNav}>Show menu</button>
                <h1>{this.state.title}</h1>
                <h2>{this.state.subtitle}</h2>
                <p>{this.state.show}</p>
                <ul>{Object.keys(nav).map(item => <li key={item}><a href='{nav[item]}'>{item}</a></li>)}</ul>
                <p>{this.props.hero}</p>
                <p>{this.props.nn}</p>
                <p>{this.props.na}</p>
            </nav>
        );
    }
}

export default Nav;
