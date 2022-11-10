

function Header(props) {
    return (
        <header>
            <nav>
                <ul>
                    {Object.keys(props.nav).map(item => <li key={item}><a href={item}>{props.nav[item]}</a></li>)}
                </ul>
            </nav>
        </header>
    );
}

export default Header;