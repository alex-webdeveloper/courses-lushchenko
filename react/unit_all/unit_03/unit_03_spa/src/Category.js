import { Link } from 'react-router-dom';

function Category(props) {
    return (
        <>
            <h1>Category</h1>
            <ul>
                {Object.keys(props.nav).map(item => <li key={item}><Link to={item}>{props.nav[item]}</Link></li>)}
            </ul>
        </>
    );
}

export default Category;

