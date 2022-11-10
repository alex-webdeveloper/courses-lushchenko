import Nav from '../Header/Nav';

function Sidebar(props) {
    let nav = props.site.nav;
    return (
        <aside>
            <ul>
                <li>Страница 1</li>
                <li>Страница 2</li>
                <li>Страница 3</li>
            </ul>
            <Nav nav={nav} />
        </aside>


    );
}



export default Sidebar;












