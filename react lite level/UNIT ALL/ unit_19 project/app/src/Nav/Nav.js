import React from 'react';
import './Nav.css';


class Nav extends React.Component {


    render() {
        const nav = {
            '/': 'Главная', '/about': 'О нас', '/address':
                'Пункты обмена'
        };
        return (

            <div className="header-nav">
                <div className="container">
                    <nav>
                        <ul>
                            {Object.keys(nav).map(item => <li key={item}><a href={item}>{nav[item]}</a></li>)}
                        </ul>
                    </nav>
                </div>
            </div>

        );
    }
}

export default Nav;