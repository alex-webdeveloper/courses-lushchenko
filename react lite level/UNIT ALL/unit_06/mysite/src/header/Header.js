import React from 'react';
import logo from '../app/logo.svg';
import './Header.css';


class Header extends React.Component {
    render() {
        return (
            <header className='header'>
                <nav>
                    <ul>
                        <li><img src={logo} className="App-logo" alt="logo" /></li>
                        <li>Алексей Казека</li>
                        <li>8-800-778-777-000</li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;



