import Nav from './Nav';

function Header(props) {
    let nav = props.site.nav;
    return (
        <header>
            <h1>{props.site.site_name}</h1>
            <h2>{props.site.site_title}</h2>
            <Nav nav={nav} />
        </header>
    );
}



export default Header;