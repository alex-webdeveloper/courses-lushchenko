import Nav from '../Header/Nav';

function Footer(props) {
    let nav = props.site.nav;
    return (
        <footer>
            <h3>{props.site.site_name}</h3>
            <Nav nav={nav} />
        </footer>
    );
}


export default Footer;