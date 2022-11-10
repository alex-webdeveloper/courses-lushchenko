import { NavLink } from 'react-router-dom';

function Header(props) {
    return (
        <header>
            <nav>
                <ul>
                    {Object.keys(props.nav).map(item => <li key={item}><NavLink to={item}>{props.nav[item]}</NavLink></li>)}
                </ul>
            </nav>
        </header>
    );
}

export default Header;